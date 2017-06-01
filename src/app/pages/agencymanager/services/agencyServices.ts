import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {baseServices} from './../../../theme/services';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class agencyServices {
    constructor(public http:Http,public baseServices:baseServices) { 
    }

    //增加用户
    public insertSysUser(data):any{
        return this.baseServices.getData("userController/insertSysUser",data)
    }
    //用户列表
    public findUserList(data):any{
        return this.baseServices.postData("userController/findUserList",data)
    }
    //角色列表
    public findRoleList(data):any{
        return this.baseServices.getData("roleController/findRoleList",data)
    }
    //角色添加
    public insertRole(data):any{
        return this.baseServices.getData("roleController/insertRole",data)
    }

    //模块添加接口
    public insertSysModule(data):any{
        return this.baseServices.postData("sysModuleController/insertSysModule",data)
    }    
}