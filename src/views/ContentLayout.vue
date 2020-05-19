<template>
    <div class="main-container">
       <div class="nav">
           <navbar></navbar>
       </div>
       <div class="page-wrapper">
          <router-view/>
       </div>
       <div class="footer">
           <span>重庆大学微系统研究中心©2019</span>
       </div>
    </div>
</template>

<script>
import Navbar from '@/components/ContentLayout/Navbar.vue'
export default {
    components:{
        Navbar
    }
}
</script>

<style scoped>
.main-container {
    width: 1920px;
    min-height: 100vh;
    background-image: url('../assets/bg01_small.png');
    background-position: center;
    background-size: cover;
    margin: 0 auto;
}
.nav {
    height: 50px;
    /* overflow: hidden; */
}
.page-wrapper {
    margin-top: 10px;
}


.footer {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    color: #4a70b3;
}
</style>
