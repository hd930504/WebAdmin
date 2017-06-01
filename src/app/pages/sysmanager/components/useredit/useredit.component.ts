import { Component, OnInit ,ViewContainerRef,Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { sysServices} from '../../services'

import { GlobalState} from '../../../../global.state'
@Component({
  selector: 'sysmanager-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {
  model:any = {}
   @Input() data:any;
  // @Input() sidebarCollapsed: boolean = false;
  constructor(
    private activeModal: NgbActiveModal,
    private sysServices:sysServices,
    
    vcr: ViewContainerRef,
    private _state:GlobalState) { 

    }

  ngOnInit() {
    if(typeof this.data != 'undefined')
      this.model = this.data;

      console.log(this.model)
  }


  OKClick() {
    this.sysServices.insertSysUser(this.model).subscribe(result =>{
      if(result != null){
        //this.DataModel = result.data;
        console.log(result)
      }
    })
    // this.activeModal.close();
  }
  CancelClick(){
    //this._state.notifyDataChanged('Toast.Action.Show', {content:'保存成功!',type:'error'});
    this.activeModal.close();
  }


}
