import { Component, ElementRef, ViewChild, Injectable, OnInit, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { View } from "ui/core/view";
import { RadSideDrawer } from "nativescript-telerik-ui-pro/sidedrawer";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui-pro/sidedrawer');
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui-pro/sidedrawer/angular";

@Component({
    moduleId: module.id,
    selector: "tk-over-navigation-component",
    templateUrl: 'over-navigation.component.html',
    styleUrls: ['over-navigation.component.css']
})
@Injectable()
export class OverNavigationComponent extends Observable implements OnInit, AfterViewInit {
    constructor(private page: Page, private _changeDetectionRef: ChangeDetectorRef) {
        super();
    }

    @ViewChild('mySideDrawer') public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the HTML definition of your Angular Component by defining tkDrawerContent for its drawer's content and setting all of the DrawerPage's content out of the RadSideDrawer.");
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

}
