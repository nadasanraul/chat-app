
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-window', require('./components/ChatWindow.vue'));
Vue.component('chat-input', require('./components/ChatInput.vue'));

const app = new Vue({
    el: '#app',

    data: {
        messages: [],
    },

    created() {
        this.getMessages();

        Echo.private('chat')
            .listen('SendMessage', (e) => {
                // console.log(e);
                this.messages.push({
                    body: e.message.body,
                    user: e.user
                });
            });
    },

    methods: {
        getMessages(){
            axios.get('/messages').then((response) => {
                this.messages = response.data;
            });
        },

        addMessage(message){
            this.messages.push(message);

            axios.post('/messages', message).then((response) => {
                console.log('success')
            });
        }
    }
});
