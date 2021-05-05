import { Pipe, PipeTransform } from '@angular/core';
import { NumDropdown } from '@core/interface/num-dropdown';
import { Row } from '@core/interface/row';

@Pipe({
  name: 'numFilter'
})
export class NumFilterPipe implements PipeTransform {

  transform(value: NumDropdown[], args: Row[]): any {

    /**
     * Created a rowCountArr array
     * rowCountArr: Stores the list of counts/ numbers already assigned
     * in one of the dropdowns
     */
    const rowCountArr = args && args.length>0 ? args.map(a => a.count) : [];

    /**
     *  In the dropdown list,
     *  updated the value of disabled flag to true in case the value
     *  is selected in one of the drop downs
     *
     */

    return value.map(curr=>{
      // updating the disable flag based on rowCountArr array
      curr.disabled= rowCountArr.includes(curr.value);
      return curr;
    });
  }

}
