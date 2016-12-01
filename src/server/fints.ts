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
        this.finTSClient = new FinTSClient(user, creditInstitutes);
    }

    connect() {
        this.finTSClient.EstablishConnection(function(error) {
            if(error) {
                console.log("Fehler: "+ error);
            }
            else {
                console.log("Erfolgreich Verbunden");

                this.connected = true;
            }
        });
    }

    getTurnOvers() {
        this.finTSClient.MsgGetKontoUmsaetze(this.finTSClient.konten[0].sepa_data, null, null, function(error, rMsg, data) {
            if(error){
                console.log("Fehler beim laden der Umsätze: " + error);
            }
            else {
                return JSON.stringify(data);                        
            }
        });
    }
}
