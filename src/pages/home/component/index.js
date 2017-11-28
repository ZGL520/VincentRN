import React,{Component} from 'react';
import GetGoods from '../../../common/axios/index'

const GetGoodsdata = () => {
    GetGoods.then(res => {
        alert('success')
    }).catch(error => {
        alert('fiale')
    })
};

export default GetGoodsdata