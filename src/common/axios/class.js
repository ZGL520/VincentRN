import axios from 'axios'

class Request {
    constructor(baseurl,url){
        this.baseurl = baseurl;
        this.url = url;
        this.request = axios;
    }


    get(token){
        let headers={};

        if (token) {
            headers = {
                'Authorization': 'Bearer ' + token
            }
        }
        const urls = this.baseurl + this.url;
        console.log(urls);
        result = axios({
            method:'get',
            url:urls,
            headers:headers
        });
        return result;
    };
    getId(id,token){
        let headers={};

        if (token) {
            headers = {
                'Authorization':'Bearer'+token,
            }
        }
        const urls = this.baseurl + this.url+id;
        const result = this.request({
            method:'get',
            url:urls,
            headers:headers
        });
        return result;
    };

    post(obj,token){
        let headers={};
        if(token){
            headers = {
                'Authorization': 'Bearer ' + token
            }
        }
        const urls = this.baseurl + this.url;
        const result = this.request({
            method:'post',
            url: urls,
            data: obj,
            headers:headers
        });
        return result;
    };

    put(data,token) {
        let headers = {};
        if(token){
            headers = {
                'Authorization': 'Bearer ' + token
            }
        }
        const urls = this.baseurl + this.url;
        const result = this.request(urls, {
            method:'put',
            data: data,
            url:urls,
            headers:headers
        });
        return result;
    };

    delete (data,token) {
        let headers = {};
        if(token){
            headers = {
                'Authorization': 'Bearer ' + token
            }
        }
        const urls = this.baseurl + this.url;
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