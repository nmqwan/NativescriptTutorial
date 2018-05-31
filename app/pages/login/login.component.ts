import { Component, ElementRef, ViewChild } from "@angular/core";
import * as frame from "ui/frame";
import { isIOS, isAndroid } from "platform";
import * as utils from "utils/utils";
import { User } from "~/models/user";
import { UserService } from "~/shared/user/user.service";
import { Router, NavigationExtras } from "@angular/router";

@Component({
    selector: "app_login",
    providers: [UserService],
    templateUrl: "./pages/login/login.html",
    styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})

export class LoginComponent {
    public user: User;

    constructor(private userService: UserService, private router: Router) {
        this.user = new User();
    }
    submit() {
        // hide soft key
        if (isIOS) {
            frame.topmost().nativeView.endEditing(true);
        }
        if (isAndroid) {
            utils.ad.dismissSoftInput();
        }
        // end hide soft key
        // this.userService.register(this.user);
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "email": this.user.email,
                "password": this.user.password
            }
        };
        this.router.navigate(["/list"], navigationExtras)
    }
}