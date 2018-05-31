"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var frame = require("ui/frame");
var platform_1 = require("platform");
var utils = require("utils/utils");
var user_1 = require("~/models/user");
var user_service_1 = require("~/shared/user/user.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.submit = function () {
        // hide soft key
        if (platform_1.isIOS) {
            frame.topmost().nativeView.endEditing(true);
        }
        if (platform_1.isAndroid) {
            utils.ad.dismissSoftInput();
        }
        // end hide soft key
        // this.userService.register(this.user);
        var navigationExtras = {
            queryParams: {
                "email": this.user.email,
                "password": this.user.password
            }
        };
        this.router.navigate(["/list"], navigationExtras);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app_login",
            providers: [user_service_1.UserService],
            templateUrl: "./pages/login/login.html",
            styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLGdDQUFrQztBQUNsQyxxQ0FBNEM7QUFDNUMsbUNBQXFDO0FBQ3JDLHNDQUFxQztBQUNyQywyREFBeUQ7QUFDekQsMENBQTJEO0FBUzNEO0lBR0ksd0JBQW9CLFdBQXdCLEVBQVUsTUFBYztRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQ0ksZ0JBQWdCO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLGdCQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1osS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFDRCxvQkFBb0I7UUFDcEIsd0NBQXdDO1FBQ3hDLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUN4QixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO2FBQ2pDO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBdkJRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSx5QkFBeUIsQ0FBQztTQUMzRSxDQUFDO3lDQUttQywwQkFBVyxFQUFrQixlQUFNO09BSDNELGNBQWMsQ0F3QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9tb2RlbHMvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcF9sb2dpblwiLFxyXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHVzZXI6IFVzZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgfVxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIC8vIGhpZGUgc29mdCBrZXlcclxuICAgICAgICBpZiAoaXNJT1MpIHtcclxuICAgICAgICAgICAgZnJhbWUudG9wbW9zdCgpLm5hdGl2ZVZpZXcuZW5kRWRpdGluZyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgICAgICAgICB1dGlscy5hZC5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVuZCBoaWRlIHNvZnQga2V5XHJcbiAgICAgICAgLy8gdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJlbWFpbFwiOiB0aGlzLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHRoaXMudXNlci5wYXNzd29yZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSwgbmF2aWdhdGlvbkV4dHJhcylcclxuICAgIH1cclxufSJdfQ==