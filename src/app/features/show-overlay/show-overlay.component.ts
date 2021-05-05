import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MetricInfo } from '@core/interface/metric-info';
import { ScaleUpdateService } from '@shared/services/scale-update.service';

@Component({
  selector: 'app-show-overlay',
  templateUrl: './show-overlay.component.html',
  styleUrls: ['./show-overlay.component.scss'],
})
export class ShowOverlayComponent implements OnInit {
  //form group
  metricForm: FormGroup;
  // Metric Information Object
  metricsInfo: MetricInfo;
  // Model for Sub mertric
  subMetric: boolean;
  // Model for metric Name
  metricName = '';
  // Model for metric Description
  metricDesc = '';
  // Model for maxScore
  maxScore: number;
  // Dropdown for Business Group
  bizGrps = [
    { value: 'bizGrp-1', viewValue: 'Business Group 1' },
    { value: 'bizGrp-2', viewValue: 'Business Group 2' },
    { value: 'bizGrp-3', viewValue: 'Business Group 3' },
  ];
  // Dropdown for Sub Metrics
  isSubMetric = [
    { value: true, viewValue: 'YES' },
    { value: false, viewValue: 'NO' },
  ];

  // Required error msg
  requiredErr = 'This is a Required Field';

  /**
   * Constructor
   * @param data -Dialog box data
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    private readonly scaleUpdateService: ScaleUpdateService
  ) {}

  ngOnInit(): void {
    // Create form
    this.createForm();
    // Matric Info passed from parent component
    this.metricsInfo = this.data.rowData.metricInfo;
    // Update form values
    this.patchFormValues();
  }

  /**
   * Create reactive form
   */
  createForm() {
    this.metricForm = this.fb.group({
      businessGroup: new FormControl(
        { value: '', disabled: this.data.readonly },
        Validators.required
      ),
      metricName: new FormControl(
        { value: '', disabled: this.data.readonly },
        Validators.required
      ),
      metricDesc: new FormControl(
        { value: '', disabled: this.data.readonly },
        Validators.required
      ),
      maxScore: new FormControl(
        { value: '', disabled: this.data.readonly },
        Validators.required
      ),
      subMetric: new FormControl(
        { value: '', disabled: this.data.readonly },
        Validators.required
      ),
    });
  }

  /**
   * Update reactive form values
   */
  patchFormValues() {
    this.metricsInfo = this.data.rowData.metricInfo;
    // destructuring the values
    const {
      businessGroup,
      metricName,
      metricDesc,
      maxScore,
      subMetric,
    } = this.metricsInfo;
    // updating the form
    this.metricForm.patchValue({
      businessGroup,
      metricName,
      metricDesc,
      maxScore,
      subMetric,
    });
  }

  /**
   * Updating Behaviour subject to pass data to other components
   */
  maxScoreChange() {
    this.scaleUpdateService.updatedScale.next(
      this.metricForm.controls.maxScore.value
    );
  }
}
