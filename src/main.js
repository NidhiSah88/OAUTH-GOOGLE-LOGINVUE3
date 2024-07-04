import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);
 import gAuthPlugin from 'vue3-google-oauth2';

 import vue3GoogleLogin from 'vue3-google-login'

let gauthClientId = '1039147683524-c76cq67mibs9ivmu66e9h8f7ffgf2s5s.apps.googleusercontent.com';

app.use(gAuthPlugin, {
    clientId: gauthClientId,
    scope: 'email',
    prompt: 'consent',
    
})

app.use(vue3GoogleLogin, {
    clientId: gauthClientId
  })


 app.mount('#app')

// 1039147683524-c76cq67mibs9ivmu66e9h8f7ffgf2s5s.apps.googleusercontent.com

// client secret:
// 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
