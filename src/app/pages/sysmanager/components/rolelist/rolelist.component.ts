import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleeditComponent } from './../roleedit/roleedit.component';
import {sysServices} from './../../services';

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.scss']
})
export class RolelistComponent implements OnInit {

  page = 3;
  DataList:any = [];
  model:any = {};
  PageSize:any = 10;
  PageNum:any = 0;
  constructor(private modalService: NgbModal,private sysServices:sysServices) { }

  ngOnInit() {
    this.loadData();
  }

  //增加用户--编辑用户
  EditUser(e){
    var title = '';
    e == null ? title = '用户角色': title = '用户角色' 
    const activeModal = this.modalService.open(RoleeditComponent, {windowClass:'usermodal'});
    activeModal.componentInstance.modalHeader = title;
  }

  loadData(){
    var PostData = {
      name:this.model.name,
      pagesize:this.PageSize,
      pagenum:this.PageNum
    }
     this.sysServices.findRoleList(PostData).subscribe(result =>{
        if(result != null){
          this.DataList = result.data
        }
     })
  }
  
  keyupSearch(e){

  }

  filterList(){

  }

}
