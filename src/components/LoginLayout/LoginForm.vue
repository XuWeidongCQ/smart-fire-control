<template>
    <div class="form-wrapper">
        <div class="username">请输入用户名:</div>
        <div>
            <input type="text"  placeholder="用户名">
        </div>
        <div class="password">请输入密码:</div>
        <div>
            <input type="text" placeholder="密码">
        </div>
        <div class="btn-wrapper">
           <input type="button" value="登录" @click="login">
            <p>忘记密码？</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'LoginForm',
    methods:{
        login:function(){
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
.form-wrapper {
    margin: 80px 50px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    padding: 40px 20px;
}
.password {
    margin-top: 20px;
}
.form-wrapper input{
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    font-size: 16px;
}
.btn-wrapper {
    margin-top: 20px;
}
.btn-wrapper > input {
    background-color: #29a745;
    color: #ffffff;
    font-size: 17px;
    cursor: pointer;
}
.btn-wrapper > input:hover {
    background-color: #269e40;
}
</style>


