// "use strict";

import Request from './class'

// Auth
const AuthSignUp = new Request('http://lv55api.brolgatech.com/api/v1/','auth/signUp/');
const AuthLogin = new Request('http://lv55api.brolgatech.com/api/v1/','auth/login/');
const AuthDetails = new Request('http://lv55api.brolgatech.com/api/v1/','auth/details/');
const AuthRefreshToken = new Request('http://lv55api.brolgatech.com/api/v1/','auth/refreshToken/');
const AuthLogout = new Request('http://lv55api.brolgatech.com/api/v1/','auth/logout/');
const AuthUpdateProfile = new Request('http://lv55api.brolgatech.com/api/v1/','auth/update/profile/');
const AuthUpdateAddress = new Request('http://lv55api.brolgatech.com/api/v1/','auth/update/address/');
const AuthUpdateSocialMedia = new Request('http://lv55api.brolgatech.com/api/v1/','auth/update/socialMedia/');
// Goods
const Goods = new Request('http://lv55api.brolgatech.com/api/v1/','goods/');
// Brand
const Brands = new Request('http://lv55api.brolgatech.com/api/v1/','brands/');
// Category
const Categories = new Request('http://lv55api.brolgatech.com/api/v1/','categories/');
const CategoriesSubCategories = new Request('http://lv55api.brolgatech.com/api/v1/','categories/subCategories/');
// Address
const AddressesAdd = new Request('http://lv55api.brolgatech.com/api/v1/','addresses/add/');
const AddressesAllDeliveryAddr = new Request('http://lv55api.brolgatech.com/api/v1/','addresses/allDeliveryAddr/');
const AddressesGetAllSenderAddr = new Request('http://lv55api.brolgatech.com/api/v1/','addresses/getAllSenderAddr/');
// Shopping Cart
const Cart = new Request('http://lv55api.brolgatech.com/api/v1/','cart/');
const CartChangeNum = new Request('http://lv55api.brolgatech.com/api/v1/','cart/changeNum/');
const CartAddNum = new Request('http://lv55api.brolgatech.com/api/v1/','cart/addNum/');
// Order
const Order = new Request('http://lv55api.brolgatech.com/api/v1/','order');
const OrderOrders = new Request('http://lv55api.brolgatech.com/api/v1/','order/orders/');
const OrderGetOrder = new Request('http://lv55api.brolgatech.com/api/v1/','order/getOrder/');
// Wechat User
const WechatUsers = new Request('http://lv55api.brolgatech.com/api/v1/','wechat/users');
const WechatUsersRemark = new Request('http://lv55api.brolgatech.com/api/v1/','wechat/users/remark/');

export {
    AuthSignUp,
    AuthLogin,
    AuthDetails,
    AuthRefreshToken,
    AuthLogout,
    AuthUpdateProfile,
    AuthUpdateAddress,
    AuthUpdateSocialMedia,
    Goods,
    Brands,
    Categories,
    CategoriesSubCategories,
    AddressesAdd,
    AddressesAllDeliveryAddr,
    AddressesGetAllSenderAddr,
    Cart,
    CartChangeNum,
    CartAddNum,
    Order,
    OrderOrders,
    OrderGetOrder,
    WechatUsers,
    WechatUsersRemark,
}

