import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import response from "vue-resource/src/http/response";

Vue.use(VueResource);

Vue.http.options.root = 'secret';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => {
      return {
        message: response.body
      }
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
