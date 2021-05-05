import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '@core/interface/product';
import { ShowOverlayComponent } from '@features/show-overlay/show-overlay.component';
import { HttpCallService } from '@shared/services/http-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Data Source for the Table
  dataSource: MatTableDataSource<Product[]>;
  // Columns to be displayed in the Table
  displayedColumns = [
    'productName',
    'productCode',
    'prodRating',
    'view',
    'edit',
  ];
  // Paginator for Mat table
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // Sort for Mat table
  @ViewChild(MatSort, {}) sort: MatSort;

  /**
   * Contructor
   * @param dialog
   * @param httpCallService
   * @param db
   */
  constructor(
    public dialog: MatDialog,
    private readonly httpCallService: HttpCallService,
    public db: AngularFireDatabase
  ) {}

  ngOnInit(): void {
    // Get table data
    this.getTableData();
  }

  /**
   * Retrive Table Data from API
   */
  getTableData() {
    this.httpCallService.getTableData().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /**
   * Open Material dialog
   * @param currRowdata
   * @param readonlyFlag
   */
  openDialog(currRowdata:Product, readonlyFlag:boolean) {
    this.dialog.open(ShowOverlayComponent, {
      data: {
        readonly: readonlyFlag,
        rowData: currRowdata,
      },
    });
  }
}
