<template>
    <div class="xu-box h100">
      <baidu-map 
       class="bm-view"
       ak="HMsRLrPGidU6hIisM4HYgx0APRKhpm6p"
       :scroll-wheel-zoom="true"
       :zoom="10"
       :center="'重庆'"
      >
        <!-- 比例尺 -->
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <!-- 坐标点 -->
        <bm-marker 
         v-for="project in projectList"
         @mouseover="showInfoWindow(project)" 
         :key="project.projectId"
         :position="{lng:project.longitude,lat:project.latitude}"
        >
        </bm-marker>
        <!-- 信息窗口 -->
        <bm-info-window 
         :show="isInfoWindowShow"
         :position="{lng:projectNow.longitude,lat:projectNow.latitude}"
         title="项目概览"
         @open="isInfoWindowShow = true"
         @close="isInfoWindowShow = false"
        >
          <div class="info-window-content">
            <p><span class="info-window-item"></span>项目名称：{{projectNow.projectName}}</p>
            <p><span class="info-window-item"></span>项目位置：{{projectNow.location}}</p>
            <p><span class="info-window-item"></span>产品数量：{{projectNow.deviceNumber}}</p>
            <p><span class="info-window-item"></span>完工日期：{{projectNow.projectFinishDate}}</p>
          </div>
        </bm-info-window>
      </baidu-map>
    </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmScale from 'vue-baidu-map/components/controls/Scale.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'

export default {
    components:{
      BaiduMap,
      BmScale,
      BmMarker,
      BmInfoWindow
    },
    data(){
      return {
        projectList: [],
        isInfoWindowShow:false,
        infoWindowPos:null,
        projectNow:{}
      }
    },
    methods:{
      //1. 组件挂载前加载数据
      getData:function(){
        this.$http['getAllProjectsInfos']()
        .then(res => {
          const {msg} = res
          msg.forEach(ele => {
            this.projectList.push(ele)
          })
        })
      },
      //2. 显示信息窗口
      showInfoWindow:function(project){
        this.projectNow = project
        this.infoWindowPos = {lng:project.longitude,lat:project.latitude};
        this.isInfoWindowShow = true
      }
    },
    created(){
      this.getData()
    }
}
</script>

<style scoped>
.bm-view {
  height: 100%;
}
.info-window-content {
    border-radius: 5px;
    font-size: 14px;
    color: #3a4460;
    margin-bottom: 5px;
  }
  .info-window-content > p {
    line-height: 1.5;
  }
  .info-window-item {
    display: inline-block;
    margin-right: 5px;
    height: 12px;
    width: 12px;
    border-radius: 5px;
    background-color: #019b4c;
  }
</style>