import { Injectable } from "@angular/core";

@Injectable()
export class UsersMockService {
    constructor() {
        console.log('service mock instanced');
    }

    getUsers() {
        console.log('users fetched from fake DB');
        return ['Peter', 'Bill'];
      }

}