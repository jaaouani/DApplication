'use strict';

import { AsyncStorage } from 'react-native';

export default class ProfileService {
    static updateFullname(_token, _fullname) {
        return fetch('http://localhost:3000/api/v1/profile/update/fullname', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json',
            'Authorization' :  `Bearer ${_token}` },
                     body: JSON.stringify({ fullname: _fullname }) })
                     .then((_response) => { return _response.json(); })
                     .catch((_error) => { console.log(_error); });
    }
}