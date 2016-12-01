'use strict';

import { IUser } from './interfaces/user';

export class User implements IUser {
    blz: number;
    pin: number;
    userId: string

    constructor(user: IUser) {
        this.blz = user.blz;
        this.pin = user.pin;
        this.userId = user.userId;
    }
}