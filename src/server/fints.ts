'use strict';

import { User } from './user';
import FinTSClient = require('open-fin-ts-js-client');

export class Fints {
    user: User;
    finTSClient;
    connected: boolean

    constructor(user: User, creditInstitutes) {
        this.user = user;
        this.connected = false;
        this.finTSClient = new FinTSClient(user.blz, user.userId, user.pin.toString(), creditInstitutes);
    }

    connect(callback) {
        this.finTSClient.EstablishConnection(function(error) {
            if(error) {
                console.log("Fehler: "+ error);
                callback(error);
            }
            else {
                console.log("Erfolgreich Verbunden");
                callback(true);
            }
        });
    }

    getTurnOvers(callback: Function) {
        this.finTSClient.MsgGetKontoUmsaetze(this.finTSClient.konten[0].sepa_data, null, null, function(error, rMsg, data) {                      
            if(error){
                console.log("Fehler beim laden der Umsätze: " + error);
                callback(error);
            }
            else {
                callback(JSON.stringify(data));                       
            }
        });
    }
    
}
