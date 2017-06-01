import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsereditComponent } from './../useredit/useredit.component';
import {sysServices} from './../../services';
import swal from 'sweetalert2'

// import { SweetAlertService } from 'ng2-sweetalert2';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  DataList:any = [];
  model:any = {};
  PageSize:any = 10;
  PageNum:any = 0;
  RecordCount:any = 0;
  ShowMore:any = false;
  swalService:any;
  constructor(private modalService: NgbModal,private sysServices:sysServices) { 
   
  }

  ngOnInit() {
    this.loadData();
  }

  //增加用户--编辑用户
  EditUser(model){
    var title = '';
   model == null ? title = '用户新增': title = '用户编辑' 
    const activeModal = this.modalService.open(UsereditComponent, {windowClass:'usermodal'});
    if(model != null)
      (activeModal.componentInstance).data = model;
    activeModal.componentInstance.modalHeader = title;
  }

  loadData(){
    var PostData = {
      name:this.model.searchText,
      pagesize:this.PageSize,
      pagenum:this.PageNum
    }
     this.sysServices.findUserList(PostData).subscribe(result =>{
        if(result != null){
          this.DataList = result.data
          this.RecordCount = result.total
        }
     })
  }
  
  pageChange(){
    this.loadData();
  }
  keyupSearch(e){
    if (e.keycode == 13) {
	      this.loadData();
	  }
  }

  filterList(){
    this.loadData();
  }

  delete(data){
     swal('Hello world!')
  }
}
