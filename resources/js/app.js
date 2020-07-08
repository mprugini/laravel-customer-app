import Vue from 'vue';
import VueRouter from 'vue-router';
import VueNoty from 'vuejs-noty'
import routes from './routes';
import 'vuejs-noty/dist/vuejs-noty.css'

Vue.use(VueRouter);
Vue.use(VueNoty)

require('./bootstrap');

Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('users', require('./components/Users.vue').default);
Vue.component('edit-user', require('./components/EditUser.vue').default);
Vue.component('add-user', require('./components/AddUser.vue').default);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});
