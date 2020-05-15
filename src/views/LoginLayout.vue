<template>
    <div class="wrapper">
        <div class="login-form-wrapper">
            <div class="left">
                <login></login>
            </div>
            <div class="right">
                <login-form></login-form>
            </div>
        </div>
    </div>
</template>

<script>
import Login from '@/components/LoginLayout/Logo.vue'
import LoginForm from '@/components/LoginLayout/LoginForm.vue'
export default {
    components:{
        Login,
        LoginForm
    }
}
</script>

<style scoped>
.wrapper {
    background-image: url('../assets/login/background-small.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-form-wrapper {
    min-width: 1366px;
    height: 550px;
    display: flex;
    background-color:rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    animation: 1s ease 0s moveIn;
   
}
.login-form-wrapper > div {
    flex: 1;
    padding: 50px;
}

@keyframes moveIn {
    from {
        opacity: 0;
        transform: translateY(-20px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
}
</style>
