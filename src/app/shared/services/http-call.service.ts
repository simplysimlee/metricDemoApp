import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  constructor(private readonly http: HttpClient) { }

  getTableData():Observable<any>{
    return this.http.get<any>('assets/tableData.json');
  }
}
