
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';
import I18n from 'react-native-i18n'

function setup():React.Component {
  class Root extends Component {

    constructor() {
      super();
      this.state = {
        isLoading: false,
        store: configureStore(() => this.setState({ isLoading: false })),
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
    }
  return Root;
}

I18n.fallbacks = true
I18n.translations = {
  zh: {
    loading: 'Loading...',
    colorsize: 'Color/Size',
    confirm: 'Confirm',
    addToCart: 'Add',
    color: 'Color:',
    empty_cart: 'Shopping cart is empty',
    colorsize_label: 'COLOR/SIZE  ',
    quantity_label: 'QUANTITY  ',
    coupon_label: 'Enter coupon code',
    voucher_label: 'Enter voucher code',
    error_colorsize: 'Please select a color/size.',
    applied: 'applied!',
    shopping_cart: 'Shopping Cart',
    next: 'Next',
    text_shippingmethods_title: 'Shipping/Payment',
    text_shippingaddress_title: 'Shipping Address',
    text_shipping_receiver_title: 'Your Information',
    text_email: 'Email Address',
    text_password: 'Password',
    text_name: 'Name',
    text_telephone:'Mobile Number',
    text_shipping_detail: 'Shipping Information',
    text_login: 'Login',
    text_shipping_options: 'Shipping Method',
    text_taiwan: 'Taiwan',
    text_oversea: 'Oversea',
    text_zipcode: 'Zipcode',
    text_address: 'Address',
    text_city: 'City',
    text_choose_cvs_store: 'Choose CVS store',
    text_fami_step1:'步驟1. 請在下方選擇您的便利商店',
    text_fami_step2:'步驟2. 移至右方確認您的便利商店，點選「下一步」',
    text_unimart_step1: '步驟1. 請移至右方找尋您的便利商店',
    text_unimart_step2: '步驟2. 確認您的便利商店，點選「門市確認」',
    text_shipping_cost: ' Shipping Fee',
    text_zone: 'City/Zone',
    text_payment_methods_title: 'Payment Method',
    text_choose_payment_method: 'Choose Payment Method',
    text_payment_method_paypal: 'Paypal',
    text_payment_method_unimart: '7-11 取貨付款',
    text_payment_method_cc: 'Credit Card',
    text_payment_method_fami: '全家取貨付款',
    text_country: 'Country',
    text_zone: 'Zone',
    text_checkout_success: 'Order Completed',
    text_payment: 'Payment',
    error_shippingmethod: 'Please choose one shipping method.'
  },
  en: {
    loading: '載入中...',
    colorsize: '顏色尺寸',
    confirm: '確認',
    addToCart: '加入購物車',
    color: '顏色:',
    empty_cart: '購物車目前沒有商品！',
    colorsize_label: '顏色尺寸  ',
    quantity_label: '數量  ',
    coupon_label: '請輸入折扣碼',
    voucher_label: '請輸入優惠卷',
    error_colorsize: '請選擇一個顏色尺寸。',
    applied: '已加入！',
    shopping_cart: '購物車',
    next: ' 下一步',
    text_shippingmethods_title: '運送方式 | 付款方式',
    text_shippingaddress_title: '寄件資料',
    text_shipping_receiver_title: '訂購人',
    text_email: 'Email 信箱',
    text_password: '密碼',
    text_name: '收件人',
    text_telephone:'手機門號',
    text_shipping_detail: '訂購人資料',
    text_login: '登入',
    text_shipping_options: '運送方式',
    text_taiwan: '台灣',
    text_oversea: '海外',
    text_zipcode: '郵遞區號',
    text_address: '地址',
    text_zone: '縣市/地區',
    text_city: '縣市',
    text_fami_step1:'步驟1. 請在下方選擇您的便利商店',
    text_fami_step2:'步驟2. 移至右方確認您的便利商店，點選「下一步」',
    text_unimart_step1: '步驟1. 請移至右方找尋您的便利商店',
    text_unimart_step2: '步驟2. 確認您的便利商店，點選「門市確認」',
    text_shipping_cost: ' 物流費',
    text_choose_cvs_store: '選取便利商店',
    text_payment_methods_title: '付款方式',
    text_choose_payment_method: '請選擇付款方式',
    text_payment_method_paypal: 'Paypal',
    text_payment_method_unimart: '7-11 取貨付款',
    text_payment_method_cc: '信用卡',
    text_payment_method_fami: '全家取貨付款',
    text_country: '國家',
    text_zone: '地區',
    text_checkout_success: '訂購完成',
    text_payment: '付款頁面',
    error_shippingmethod: '請選擇一個運送方式。'
  },
}

export default setup;
