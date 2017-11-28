import axios from 'axios'

class Request {
    constructor(baseurl,url,token){
        this.baseurl = baseurl;
        this.url = url;
        this.request = axios;
        this.token = token
    }

    // gettoken(){
    //     const tokens = '';
    //     return tokens;
    // }

    get(id){
        let headers={};
        // const token = this.gettoken();
        if (this.token) {
            headers = {
                'Authorization':'Bearer'+this.token,
            }
        }
        const urls = this.baseurl + this.url + id;
        const result = this.request({
            method:'get',
            url:urls,
            headers:headers
        });
        return result;
    };

    post(obj){
        let headers={};
        // const token = this.gettoken();
        if(this.token){
            headers = {
                'Authorization': 'Bearer ' + this.token
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

    put(data) {
        let headers = {};
        // const token = this.gettoken();
        if(this.token){
            headers = {
                'Authorization': 'Bearer ' + this.token
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

    delete (data) {
        let headers = {};
        // const token = this.gettoken();
        if(this.token){
            headers = {
                'Authorization': 'Bearer ' + this.token
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