const isMock = false;
const URL = 'http://lv55api.brolgatech.com/api/v1/';
const LOCAL_URL = 'http://192.168.1.185:3000/api/v1/';

function getUrl(obj){
    if(isMock){
        return obj.mockUrl;
    }else{
        return obj.url;
    }
}


export default {

    /**
     * 关于Auth 注册，登陆，退出的api
     */
    getAuthSignUpURL:getUrl(
        {
            mockUrl: LOCAL_URL+'auth/signUp',
            url: URL+'auth/signUp',
            method: 'post',
        }
    ),
    getAuthLoginURL:getUrl(
        {
            mockUrl: LOCAL_URL+'auth/login',
            url: URL+'auth/login',
            method: 'post',
        }
    ),
    getAuthUserDetailURL:getUrl(
        {
            mockUrl: LOCAL_URL+'auth/details',
            url: URL+'auth/details',
            method: 'get',
        }
    ),
    getAuthLogoutURL:getUrl(
        {
            mockUrl: LOCAL_URL+'auth/logout',
            url: URL+'auth/logout',
            method: 'post',
        }
    ),

    /**
     * 关于商品product的api
     */
    getAllProductURL:getUrl(
        {
            mockUrl: LOCAL_URL+'goods',
            url: URL+'goods',
            method: 'get',
        }
    ),

    getProductByIDURL:getUrl(
        {
            mockUrl: LOCAL_URL+'goods/',
            url: URL+'goods/',
            method: 'get',
        }
    ),

    /**
     * 获取购物车列表
     * post values:
     * ids:[1,2]  (数组)
     */
    getCartUrl:getUrl(
        {
            mockUrl: LOCAL_URL+'cart',
            url: URL+'cart',
            method: 'get',
        }
    ),

    getRemoveCartUrl:getUrl(
        {
            mockUrl: LOCAL_URL+'cart',
            url: URL+'cart',
            method: 'delete',
        }
    ),

    getChangeCartNumUrl:getUrl(
        {
            mockUrl: LOCAL_URL+'cart/changeNum',
            url: URL+'cart/changeNum',
            method: 'post',
        }
    ),
    getAddCartNumUrl:getUrl(
        {
            mockUrl: LOCAL_URL+'cart/addNum',
            url: URL+'cart/addNum',
            method: 'post',
        }
    ),


    getNewOrderURL:getUrl(
        {
            mockUrl: LOCAL_URL+'order',
            url: URL+'order',
            method: 'post',
        }
    )

}