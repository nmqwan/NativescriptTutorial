import { Injectable } from "@angular/core";
import { User } from "~/models/user";
import { Config } from '~/shared/config';


@Injectable()
export class UserService {
    constructor() {

    }
    register(user: User) {
        alert("About to register: " + user.email);
    }

}