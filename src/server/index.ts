'use strict';

import creditInstitutesConfig = require('./config/credit-institute.config');
import {IUser} from './interfaces/user';
import {Fints} from './fints';
import {User} from './user';

let myUser: IUser = {
    blz: 12345678,
    pin: '1234',
    userId: 'test1'
}

let user = new User(myUser)
let fintsClient = new Fints(user, creditInstitutesConfig);

fintsClient.connect(connected => {
    if(connected) {
        console.log('connected');
        fintsClient.getTurnOvers(turnOvers => {
            console.log(turnOvers);
        })
    }
});
