import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SidebarModule
} from '../sidebar/sidebar.module';

import { DropdownModule } from '../dropdown/dropdown.module';
import { TopnavModule } from '../topnav/topnav.module';

import { MainLayoutComponent } from './main-layout/main-layout';


import { StylesModule } from '../styles';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ErrorModule } from './error';
import { ApiModule } from './api';
import { UpdateModule } from './update';
import { MemberSelectModule } from './member-select';


import { LoginService } from './login.service';

import { MatDialogModule } from '@angular/material';
import { ColorSelectModule } from '../components/color-select';

import { ShareNewModule } from '../share-new/share-new.module';
import { MeepoModule } from '../meepo/meepo.module';
import { NavTabsModule } from '../components/nav-tabs';

import { WidgetService } from '../share/services/widget.service';
import { CatalogService } from '../share/services/catalog.service';
import { DataPerService } from '../share/services/data-per.service';


const modules = [
    CommonModule,
    SidebarModule,
    DropdownModule,
    TopnavModule,
    FlexLayoutModule,
    ErrorModule,
    ApiModule,
    StylesModule,
    MemberSelectModule,
    MatDialogModule,
    ColorSelectModule,
    ShareNewModule,
    MeepoModule,
    NavTabsModule
];

@NgModule({
    declarations: [
        MainLayoutComponent
    ],
    imports: [
        ...modules
    ],
    exports: [
        ...modules,
        MainLayoutComponent
    ],
    providers: [
        LoginService,
        WidgetService,
        CatalogService,
        DataPerService
    ],
})
export class CoreModule { }

