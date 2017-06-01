import { Component, OnInit ,ElementRef,ViewChild,Input} from '@angular/core';
import {villageServices} from './../../services';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OfflineOptions, ControlAnchor, NavigationControlType } from 'angular2-baidu-map';

@Component({
	selector:'app-villagemap',
	template: `
        <h1>小区位置<h1>
        <baidu-map ak="put your ak here" [options]="opts" [offline]="offlineOpts" 
        (onMapLoaded)="loadMap($event)" (onMarkerClicked)="clickMarker($event)" 
        (onClicked)="clickmap($event)" ></baidu-map>
    `,
    styles: [`
        baidu-map{
            width: 498px;
            height: 400px;
            display: block;
        }
    `]
})

export class VillagemapComponent implements OnInit {

	constructor(private activeModal: NgbActiveModal,private villageServices:villageServices) {
    }
    position:any = {}
    @Input() data:any;
	opts: any;
  	offlineOpts: OfflineOptions;

  	ngOnInit() {

    this.opts = {
            center: {
                longitude: this.data.areaPosition.split(',')[0],
                latitude: this.data.areaPosition.split(',')[1]
            },
            zoom: 17,
            markers: [{
                longitude: this.data.areaPosition.split(',')[0],
                latitude: this.data.areaPosition.split(',')[1],
                title: 'Where',
                content: 'Put description here',
                enableDragging: true
            }],
            geolocationCtrl: {
                anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
            },
            scaleCtrl: {
                anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
            },
            overviewCtrl: {
                isOpen: true
            },
            navCtrl: {
                type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
            }
        };

        this.offlineOpts = {
            retryInterval: 5000,
            txt: 'NO-NETWORK'
        };

  }


    loadMap(map: any) {
        alert( this.data.areaPosition);
        if(this.data.areaPosition == null){
          alert()
          }
        // console.log('map instance here', map);
    }

    clickMarker(marker: any) {
        console.log('The clicked marker is', marker);
    }

    clickmap(e: any) {
        console.log(`Map clicked with coordinate: ${e.point.lng}, ${e.point.lat}`);
    }
}
