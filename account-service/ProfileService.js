'use strict';

import { AsyncStorage } from 'react-native';

export default class ProfileService {
    static updateFullname(_token, _fullname) {
        return fetch('http://localhost:3000/api/v1/profile/update/fullname', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json',
            'Authorization' :  `Bearer ${_token}` },
                     body: JSON.stringify({ fullname: _fullname }) })
                     .then((_response) => { 
                            AsyncStorage.mergeItem('fullname', _fullname, () => { return _response.json(); });
                     }).catch((_error) => { console.log(_error); });
    }
    static updatePassword(_token, _password) {
        return fetch('http://localhost:3000/api/v1/profile/update/password', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json',
            'Authorization' :  `Bearer ${_token}` },
                     body: JSON.stringify({ password: _password }) })
                     .then((_response) => { return _response.json(); })
                     .catch((_error) => { console.log(_error); });
    }
    static updateAddress(_token, _address) {
        return fetch('http://localhost:3000/api/v1/profile/update/address', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json',
            'Authorization' :  `Bearer ${_token}` },
                     body: JSON.stringify({ address: _address }) })
                     .then((_response) => { return _response.json(); })
                     .catch((_error) => { console.log(_error); });
    }
    static updateAddress2(_token, _address) {
        return fetch('http://localhost:3000/api/v1/profile/update/address/2', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json',
            'Authorization' :  `Bearer ${_token}` },
                     body: JSON.stringify({ address2: _address }) })
                     .then((_response) => { return _response.json(); })
                     .catch((_error) => { console.log(_error); });
    }
    static updatePhone(_token, _phone) {
        return fetch('http://localhost:3000/api/v1/profile/update/phone', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json',
            'Authorization' :  `Bearer ${_token}` },
                     body: JSON.stringify({ phone: _phone }) })
                     .then((_response) => { return _response.json(); })
                     .catch((_error) => { console.log(_error); });
    }
    static updateCity(_token, _city) {
        return fetch('http://localhost:3000/api/v1/profile/update/city', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json',
            'Authorization' :  `Bearer ${_token}` },
                     body: JSON.stringify({ city: _city }) })
                     .then((_response) => { return _response.json(); })
                     .catch((_error) => { console.log(_error); });
    }
    static updateZipcode(_token, _zipcode) {
        return fetch('http://localhost:3000/api/v1/profile/update/zipcode', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json',
            'Authorization' :  `Bearer ${_token}` },
                     body: JSON.stringify({ zipcode: _zipcode }) })
                     .then((_response) => { return _response.json(); })
                     .catch((_error) => { console.log(_error); });
    }
}