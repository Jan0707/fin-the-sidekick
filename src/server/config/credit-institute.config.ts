import { ICreditInstitute } from '../interfaces/credit-institute';

var creditInstitutes: ICreditInstitute = {
    '12345678': {
        blz: 12345678,
        url: 'http://localhost:3000/cgi-bin/hbciservlet'
    },
    'undefined': {
        url: ''
    }
};
 
export = creditInstitutes;