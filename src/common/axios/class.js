import axios from 'axios'

class Request {
    constructor(baseurl,token){
        this.baseurl = baseurl;
        this.request = axios;
        this.token = token
    }

    // gettoken(){
    //     const tokens = sessionStorage.getItem(this.token);
    //     return tokens;
    // }

    get(url,id){
        let headers={};
        // const token = this.gettoken();
        // if (token) {
        //     headers = {
        //         'Authorization':'Bearer'+token,
        //     }
        // }
        const urls = this.baseurl + url + id;
        const result = this.request({
            method:'get',
            url:urls,
            headers:headers
        });
        return result;
    };

    post(url,obj){
        let headers={};
        // const token = this.gettoken();
        // if(token){
        //     headers = {
        //         'Authorization': 'Bearer ' + token
        //     }
        // }
        const urls = this.baseurl + url;
        const result = this.request({
            method:'post',
            url: urls,
            data: obj,
            headers:headers
        });
        return result;
    };

    put(url,data) {
        let headers = {};
        // const token = this.gettoken();
        // if(token){
        //     headers = {
        //         'Authorization': 'Bearer ' + token
        //     }
        // }
        const urls = this.baseurl + url;
        const result = this.request(urls, {
            method:'put',
            data: data,
            url:urls,
            headers:headers
        });
        return result;
    };

    delete (url,data) {
        let headers = {};
        // const token = this.gettoken();
        // if(token){
        //     headers = {
        //         'Authorization': 'Bearer ' + token
        //     }
        // }
        const urls = this.baseurl + url;
        const result = this.request({
            method:'delete',
            url:urls,
            data:data,
            headers:headers
        });
        return result;
    }
    test(){
        consoleLoggingStub('success')
    }
}

export default Request