"use strict";

import axios from 'axios';




function getRequest(url,token) {
    let headers = {};
    if(token){
        headers = {
            'Authorization': 'Bearer ' + token
        }
    }
    const URL = 'http://lv55api.brolgatech.com/api/v1/';

    const result = axios({
        method:'get',
        url:URL+url,
        headers:headers
    });

    return result;

}

export default getRequest;