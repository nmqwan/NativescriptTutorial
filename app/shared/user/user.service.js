"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.register = function (user) {
        alert("About to register: " + user.email);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTTNDO0lBQ0k7SUFFQSxDQUFDO0lBQ0QsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDZixLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFOUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7O09BQ0EsV0FBVyxDQVF2QjtJQUFELGtCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L21vZGVscy91c2VyXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xyXG4gICAgICAgIGFsZXJ0KFwiQWJvdXQgdG8gcmVnaXN0ZXI6IFwiICsgdXNlci5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG59Il19