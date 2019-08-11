/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import Main from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}



Vue.use(Element, {
    size: Cookies.get('size') || 'medium' // set element-ui default size
  })
  
  // register global utility filters
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
  
  Vue.config.productionTip = false
  
  new Vue({
            el: '#app',
            router,
            store,
            render: h => h(Main)
        })

// window.Vue = require('vue');
// import moment from "moment";
// import VueRouter from 'vue-router';
// import VeeValidate, { Validator } from 'vee-validate';
// import VueProgressBar from 'vue-progressbar';
// import swal from 'sweetalert2';
// import {ServerTable, ClientTable, Event} from 'vue-tables-2';

// Vue.use(ClientTable);

// window.swal = swal;

// Vue.filter('formatDate', function(data) {
//     return moment(data).format("DD/MM/YYYY"); 
// });

// Vue.use(VueProgressBar, {
//     color: 'rgb(143, 255, 199)',
//     failedColor: 'red',
//     height: '2px'
// });

// Vue.use(VueRouter);
// Vue.use(VeeValidate);
// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */
// const messages = {
//     alpha_spaces: (field) => `El campo ${field} solo debe contener letras y espacios.`,
//     between: (field, [min, max]) => `Este campo debe estar entre ${min} y ${max}.`,
//     email: (field) => `El campo ${field} debe ser un correo electrónico válido.`,
//     date_format: (field, [format]) => format == 'YYYY' ? `Este campo debe tener formato de año` : `Este campo debe tener formato ${format}.`,
//     max: (field, [length]) => `El campo de ${field} no debe ser mayor a ${length} caracteres.`,
//     min: (field, [length]) => `El campo de ${field} debe tener al menos ${length} caracteres.`,
//     numeric: (field) => `Este campo debe contener solo caracteres numéricos.`,
//     required: (field) => `El campo ${field} es obligatorio.`,
//     url: (field) => `Este campo no es una URL válida.`
// };

// const locale = {
//     name: 'en',
//     messages
// };

// Validator.localize({ [locale.name]: locale });

// const routes = [
//     { path: '/home', component: require('./components/ExampleComponent.vue').default },
//     { path: '/example', component: require('./components/ExampleComponent.vue').default }, 
//     { path: '*', component: require('./components/ExampleComponent.vue').default }
// ];




//  // const files = require.context('./', true, /\.vue$/i);
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
// const router = new VueRouter({ 
//     mode: 'history',
//     base:__dirname,
//     routes 
// });

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

// const app = new Vue({
//     router
// }).$mount('#app');
