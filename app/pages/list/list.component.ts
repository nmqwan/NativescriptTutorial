import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "list",
    moduleId: module.id,
    templateUrl: "./list.html",
    styleUrls: ["./list-common.css", "./list.css"]
})
export class ListComponent {

    constructor(private route: ActivatedRoute){
        this.route.queryParams.subscribe(params => {
            console.log(params['email']);
            console.log(params['password']);
        });
    }
 }