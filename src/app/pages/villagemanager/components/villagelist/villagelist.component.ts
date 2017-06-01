import { Component, OnInit ,ElementRef,ViewChild, Pipe} from '@angular/core';
import {villageServices} from './../../services';
import swal from 'sweetalert2'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VillageeditComponent } from '../index';
import { VillagemapComponent} from '../index';

// declarations: [
//     BaiduMap
// ]

@Component({
  selector: 'app-villagelist',
  templateUrl: './villagelist.component.html',
  styleUrls: ['./villagelist.component.scss']
})
export class VillagelistComponent implements OnInit {
  BMap:any = null;
  DataList:any = [];
  model:any = {};
  PageSize:any = 10;
  PageNum:any = 0;
  RecordCount:any = 0;
  ShowMore:any = false;

  constructor(private modalService: NgbModal,private villageServices:villageServices) { 
   
  }
  ngOnInit() {
    this.loadData();
  }
    
  // 地图
  map(data){
    const activeModal = this.modalService.open(VillagemapComponent, {windowClass:'usermodal'});
    (activeModal.componentInstance).data = data
  }


  //增加小区--编辑小区
  EditVillage(model){
    var title = '';
    var titNo=0;
    if (model == null) {
      title = '小区新增';
      titNo = 0
    }else{
      title = '小区编辑';
      titNo = 1
    }

    // model == null ? title = '小区新增': title = '小区编辑';
    const activeModal = this.modalService.open(VillageeditComponent, {windowClass:'usermodal'});
    activeModal.componentInstance.titNo = titNo;
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
     this.villageServices.findVillageList(PostData).subscribe(result =>{
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
    var VillageServices = this.villageServices;
    var loadData = this;
     swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '删除',
          cancelButtonText:'取消'
        }).then(function(){
          var DelData = {
              id: data.villageId
              // id:333
            }
             VillageServices.deleteVillage(DelData).subscribe(result =>{
               console.log(result)
                if(result.code == 10){
                   swal(
                  '删除成功!',
                  'success'
                  )
                  loadData.loadData();
                }else{
                   swal(
                  '删除失败!'
                  )
                }
                console.log(DelData.id)
             })    
            },function(dismiss){
              if (dismiss === 'cancel') {
                } else {
                  throw dismiss;
                }
            })   
  }
  
}
