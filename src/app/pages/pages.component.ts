import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right" translate>技术服务<i class="ion-heart"></i> 杭州瑞懿科技有限公司</div>
       
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
    //<div class="al-footer-main clearfix">
         //<div class="al-copy">&copy; <a href="javascript:;" translate></a> 2016</div>
       //</div>
       // // <ba-page-top></ba-page-top>
})
export class Pages {

  constructor(private _menuService: BaMenuService,) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
