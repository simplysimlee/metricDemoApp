import { Component, Input, OnInit } from '@angular/core';
import { NumDropdown } from '@core/interface/num-dropdown';
import { Row } from '@core/interface/row';
import { NumFilterPipe } from '@shared/pipes/num-filter.pipe';
import { ScaleUpdateService } from '@shared/services/scale-update.service';

@Component({
  selector: 'app-metric-score',
  templateUrl: './metric-score.component.html',
  styleUrls: ['./metric-score.component.scss'],
})
export class MetricScoreComponent implements OnInit {
  // MaxScore Passed from parent Component
  @Input() maxScoreInp: number;

  // drop down containing digits till maxScore
  numbersDrpDwn: NumDropdown[];
  // array containing row data
  row: Row[];
  // empty row
  emptyRowData = { input: null, count: null };
  /**
   * constructor
   * @param NumFilterPipe
   */
  constructor(
    private readonly NumFilterPipe: NumFilterPipe,
    private readonly scaleUpdateService: ScaleUpdateService
  ) {}

  ngOnInit(): void {
    // initialize row
    this.row = [{ input: null, count: null }];
    // dropdown based on maxScore
    this.numberCounterDrpDwn(this.maxScoreInp);
    // get max score updated value
    this.getMaxScoreUpdatedVal();
  }

  /**
   * Create dropdown  based on the max score
   * @param val
   */
  numberCounterDrpDwn(val) {
    this.numbersDrpDwn = Array(val)
      .fill({})
      .map((curr, index) => {
        return {
          value: (curr.value = index + 1),
          disabled: false,
        };
      });
  }

  /**
   *  Subcribe to max score latest value
   */
  getMaxScoreUpdatedVal() {
    this.scaleUpdateService.updatedScaleValue.subscribe((data) => {
      if (data) {
        this.row = [];
        this.maxScoreInp = data;
        this.row = [{ input: null, count: null }];
        this.numberCounterDrpDwn(data);
      }
    });
  }

  /**
   * Add row
   */
  addRow() {
    if (this.row.length < this.maxScoreInp) {
      const obj: Row = {
        input: null,
        count: null,
      };
      this.row.push(obj);
    }
  }

  /**
   * Delete row
   * @param x:index of row
   */
  deleteRow(x) {
    this.row.splice(x, 1);
  }

  /**
   * track by index in for loop
   * @param index
   * @returns
   */
  trackByIndex(index: number): any {
    return index;
  }
  /**
   * Event is triggered once a value is selected in dropdown
   * @param event
   */
  chngScaleDrpdwn(event?) {
    // updating the view by invoking the pipe
    let f = new NumFilterPipe();
    f.transform(this.numbersDrpDwn, this.row);
  }
}
