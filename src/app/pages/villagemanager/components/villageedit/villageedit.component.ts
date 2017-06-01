import { Component, OnInit ,ViewContainerRef,Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { villageServices} from '../../services'
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { GlobalState} from '../../../../global.state'

@Component({
  selector: 'app-villageedit',
  templateUrl: './villageedit.component.html',
  styleUrls: ['./villageedit.component.scss']
})

export class VillageeditComponent implements OnInit {
  model:any = {};
  Images:any = [];
  Img: boolean =false;
   @Input() titNo:any;
   @Input() data:any;
  // @Input() sidebarCollapsed: boolean = false;
  constructor(
    private activeModal: NgbActiveModal,
    private villageServices:villageServices,
    
    vcr: ViewContainerRef,
    private _state:GlobalState) { 

    }

  ngOnInit() {

    if(typeof this.data != 'undefined')
      this.model = this.data;
  }

  villageInfo(){
    this.Img=false;
  }

  villageImg(){
    this.Img=true;
  }

  OKClick() {
    this.titNo = this.titNo;
    if(this.titNo == 0){
       this.villageServices.insertVillage(this.model).subscribe(result =>{
        if(result != null){
          // this.DataModel = result.data;
        }
      })
     }else if(this.titNo == 1){
         console.log(this.model)
         this.villageServices.updataVillageList(this.model).subscribe(result =>{
          if(result != null){
            //this.DataModel = result.data;
             console.log(result)
          }
        }) 
     }
    this.activeModal.close();
  }
  CancelClick(){
    //this._state.notifyDataChanged('Toast.Action.Show', {content:'保存成功!',type:'error'});
    this.activeModal.close();
  }
  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:8100/ng2/uploadFile',
    method: "POST",
    itemAlias: "uploadedfile"
  });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  reader(){
     this.villageServices.findVillageImg(this.model.id).subscribe(result =>{
        if(result != null){
            this.Images = result.img
        }
     })
  }
  // 上传图片缩略图
  upload(event: any) {
    console.log(event.target.value);
    if (this.uploader.queue.length > 0) {
      var ImgLength = this.uploader.queue.length
      var FileObject = this.uploader.queue[ImgLength - 1]
      // this.reader.readAsDataURL(FileObject._file);
      // this.reader.onloadend = (e) => {
      //   var imgObj = {
      //     content: "",
      //     fileItem: {}
      //   }
      //   imgObj.content = this.reader.result;
      //   imgObj.fileItem = FileObject;
      //   this.Images.push(imgObj);
      // }
    }
  }
  
}
