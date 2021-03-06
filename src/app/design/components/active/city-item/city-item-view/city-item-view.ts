import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CityItemDefault } from '../../../../classes';
@Component({
    selector: 'city-item-view',
    templateUrl: './city-item-view.html',
    styleUrls: ['./city-item-view.scss']
})
export class CityItemView implements OnInit {
    @Input() widget: CityItemDefault = new CityItemDefault();
    constructor() { }

    ngOnInit() { }

    ngOnDestroy(){
        this.widget = null;
    }
}
