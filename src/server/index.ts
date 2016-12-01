'use strict';

import creditInstitutesConfig = require('./config/credit-institute.config');
import {IUser} from './interfaces/user';
import {Fints} from './fints';
import {User} from './user';

let myUser: IUser = {
    blz: 1234,
    pin: 12234,
    userId: 'dfgiojd'
}

let user = new User(myUser)
let fintsClient = new Fints(user, creditInstitutesConfig);

fintsClient.connect()

// console.log(fintsClient.getTurnOvers());