import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs/Subject';
declare const jQuery;
@Component({
    selector: 'meepo-danmu-view',
    templateUrl: './meepo-danmu-view.html',
    styleUrls: ['./meepo-danmu-view.scss']
})
export class MeepoDanmuView implements OnInit {
    swiperJs: string = 'https://meepo.com.cn/meepo/libs/marquee.js';
    swiper: any;
    laodSuccess: Subject<any> = new Subject();
    constructor(
        @Inject(DOCUMENT) public document: any
    ) { 
        this.laodSuccess.subscribe((scroxt: any)=>{
            jQuery(function() {
                jQuery('#marquee_slide').marquee({
                    auto: true,
                    interval: 3000,
                    speed: 500,
                    showNum: 5,
                    stepLen: 5
                });
            })
        });
    }

    ngOnInit() { 
        this.loadJScript();
    }

    loadJScript() {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.swiperJs;
        script.onload = () => {
            this.swiper = window['scroxt'];
            this.laodSuccess.next(this.swiper);
        };
        script.onerror = () => {
            console.log('Swiper插件加载失败');
        };
        this.document.body.appendChild(script);
    }
}