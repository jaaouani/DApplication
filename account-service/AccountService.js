'use strict';

import { AsyncStorage } from 'react-native';

export default class AccountService {
    static registerAccount(_fullname, _email, _password) {
        /* const _data = { fullname: _fullname, email: _email, password: _password };
        const _register_form = new FormData(); 
                for(let k in _data) { _register_form.append(k, _data[k]); } */
        return fetch('http://localhost:3000/api/v1/account/register', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                     body: JSON.stringify({ email: _email, password: _password, fullname: _fullname }) })
                        .then((_response) => { return _response.json(); })
                        .catch((_error) => { console.log(_error); });
    }

    static loginAccount(_email, _password) {
        /* const _data = { email: _email, password: _password };
        const _login_form = new FormData(); 
                for(let k in _data) { _login_form.append(k, _data[k]); } */
        return fetch('http://localhost:3000/api/v1/account/login', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                     body: JSON.stringify({ email: _email, password: _password }) })
                     .then((_response) => { return _response.json(); })
                     .catch((_error) => { console.log(_error); });
    }

    static isConnected() {
       return AsyncStorage.getItem('token')
       .then((_result) => { if(_result) { return { status : true, message: _result }; } else if(!_result) { return { status: false }; } })
       .catch((_error) => { return { status: false, message: _error }; });
    }

    static verifyAccountToken(_token) {
        return fetch('http://localhost:3000/api/v1/token/verify', { method: 'GET', headers: { Accept: 'application/json', 'Content-Type': 'application/json', 
                'Authorization': `Bearer ${_token}` } })
            .then((_response) => { return _response.json(); })
            .then((_json) => { 
                if(_json.hasOwnProperty('status')) { if(_json.status == 401) { return false; } }
                else if(_json.hasOwnProperty('status')) { if(_json.status == "success") { return true; } }
            }).catch((_error) => { console.log(_error); });     
    }

    static retrieveAccount(_token) {
        return fetch('http://localhost:3000/api/v1/account/profile', { method: 'GET', headers: { Accept: 'application/json', 'Content-Type': 'application/json', 
                'Authorization': `Bearer ${_token}` } })
            .then((_response) => { return _response.json(); })
            .then((_json) => { console.log(_json);
                if(_json.hasOwnProperty('status')) { if(_json.status == 401) { return { success: false, message: _json }; } }
                else if(_json.hasOwnProperty('status')) { if(_json.status == "success") { return { success: true, message: _json }; } }
            }).catch((_error) => { console.log(_error); }); 
    }

    static storeAccount(_user) { 
        AsyncStorage.setItem('fullname', _user.fullname).then(() => { AsyncStorage.setItem('email', _user.email).then(() => {
            AsyncStorage.setItem('reference', _user.reference).then(() => { AsyncStorage.setItem('points', _user.points.toString()).then(() => {
                AsyncStorage.setItem('userToken', _user.token).then(() => { AsyncStorage.setItem('updatedAt', _user.updatedAt).then(() => {
                    AsyncStorage.setItem('createdAt', _user.createdAt).then(() => { AsyncStorage.setItem('address', _user.address).then(() => {
                        AsyncStorage.setItem('city', _user.city).then(() => { AsyncStorage.setItem('zipcode', _user.zipcode.toString()).then(() => {
                            AsyncStorage.setItem('phone', _user.phone).then(() => { console.log("Sauvegarde réussi."); });
                        }); });
                    }); });
                }); });
            }); });
        }); });
    }
}