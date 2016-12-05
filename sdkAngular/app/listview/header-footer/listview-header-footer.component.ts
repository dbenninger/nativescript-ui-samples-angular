import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "tk-listview-header-footer",
    providers: [DataItemService],
    templateUrl: "listview-header-footer.component.html",
    styleUrls: ["listview-header-footer.component.css"]
})
export class ListViewHeaderFooterComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService, private router: Router) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getIdenticalDataItems(10));
    }

    select(event) {
        this.router.navigate(['examples-depth-3', 'title', 'title']);
    }
}