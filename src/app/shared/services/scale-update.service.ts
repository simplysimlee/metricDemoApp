import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScaleUpdateService {

  constructor() { }

   updatedScale = new BehaviorSubject<number>(null);
  updatedScaleValue = this.updatedScale.asObservable();


}
