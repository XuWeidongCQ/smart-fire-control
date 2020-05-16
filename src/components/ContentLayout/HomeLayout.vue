<template>
    <div class="content-wrapper">
        <div class="xu-row h500">
            <div class="xu-col-2">
                <increase-dev></increase-dev>
            </div>
            <div class="xu-col-5">
                <baidu-map></baidu-map>
            </div>
            <div class="xu-col-5">
                <register-dev></register-dev>
            </div>
        </div>
        <div class="xu-row h320 mt15">
            <div class="xu-col-7">
                <alert-infos></alert-infos>
            </div>
            <div class="xu-col-5">
                <pie-charts></pie-charts>
            </div>
        </div>
    </div>
</template>

<script>
import IncreaseDev from './HomeLayout/IncreaseDev.vue'
import Map from './HomeLayout/Map.vue'
import RegisterDev from './HomeLayout/RegisterDev.vue'
import AlertInfos from './HomeLayout/AlertInfos.vue'
import PieCharts from './HomeLayout/PieCharts.vue'
export default {
    components:{
        IncreaseDev,
        'baidu-map':Map,
        RegisterDev,
        AlertInfos,
        PieCharts
    }
}
</script>

<style scoped>
.content-wrapper {
    /* height:800px; */
    padding: 0 15px;
}
.h500 {
    height: 500px;
}
.h320 {
    height: 320px;
}
.mt15 {
    margin-top: 15px;
}
</style>

