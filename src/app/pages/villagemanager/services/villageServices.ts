import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {baseServices} from './../../../theme/services';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class villageServices {
    constructor(public http:Http,public baseServices:baseServices) { 
    }

    //删除小区
    public deleteVillage(data):any{
        return this.baseServices.getData("village/deleteVillage",data)
    }
    //小区列表
    public findVillageList(data):any{
        // return this.baseServices.postData("userController/findUserList",data)
        return this.baseServices.getData("village/findVillage",data)
    }
     //小区图片
    public findVillageImg(data):any{
        // return this.baseServices.postData("userController/findUserList",data)
        return this.baseServices.getData("village/findVillage",data)
    }
    // 小区修改
    public updataVillageList(data):any{
        return this.baseServices.postData("village/updateVillage",data)
    }
    //小区添加
    public insertVillage(data):any{
        return this.baseServices.postData("village/saveVillage",data)
    }
    
}