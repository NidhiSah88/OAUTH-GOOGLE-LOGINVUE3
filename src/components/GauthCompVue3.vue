
<template>
    <div>
        <h1> Is initialized: {{ Vue3GoogleOauth.isInit}} </h1>
        <h1> Is Authorized: {{ Vue3GoogleOauth.isAuthorized}} </h1>

        <h1 v-if='user'> Logged in  user: {{user}} </h1>

<button @click='handleSignin' :disabled='!Vue3GoogleOauth.isInit ||  Vue3GoogleOauth.isAuthorized'> Sign In  </button>
<button @click="handleSignOut" :disabled='Vue3GoogleOauth.isAuthorized'> Sign Out </button>


    </div>
</template>

<script setup>
import {inject, ref, onMounted} from 'vue';

const  Vue3GoogleOauth = inject('Vue3GoogleOauth');
const user = ref('');


onMounted(()=>{
    console.log("Vue3GoogleOauth:",Vue3GoogleOauth)
});

const  handleSignin = async () => {
    try{
        const googleUser = await $gAuth.signIn();
        console.log("$gAuth.signIn: ",$gAuth.signIn );

        if(!googleUser){
            return null;
        }

        user.value = googleUser.getBasicProfile().getEmail();
    } catch(error){
        console.log(error);
    }

}

const handleSignOut = async () => {
    try{

        const googleUser = await $gAuth.signOut();
        console.log("$gAuth.signIn: ",$gAuth.signOut );

        user.value = '';

    }
    catch(error){
         console.log(error);
    }    
}

</script>
