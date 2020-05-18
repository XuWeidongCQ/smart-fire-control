<template>
    <div class="xu-box h100">
      <div class="xu-box-title">
        <span>项目注册设备</span>
        <ul class="search-wrapper">
          <li>项目查询:</li>
          <li><input type="text" placeholder="请输入项目名称" v-model="projectName" @keyup.enter="searchProjects"></li>
          <li><button @click="searchProjects" class="xu-btn-sm xu-btn-success">查询</button></li>
        </ul>
      </div>
      <div class="xu-box-content">
        <table class="xu-table xu-table-sm xu-table-center xu-table-hover">
          <thead>
            <tr>
              <th>项目名称</th>
              <th>产品数量</th>
              <th>项目地址</th>
              <th>完工日期</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projectList.slice((pageNow-1)*MAX_NUM,pageNow*MAX_NUM)" 
                :key="project.projectId">
              <td>{{ project.projectName }}</td>
              <td>{{ project.deviceNumber }}</td>
              <td>{{ project.location }}</td>
              <td>{{ project.projectFinishDate }}</td>
            </tr>
          </tbody>
        </table>       
      </div>
      <!-- 分页器 -->
        <div class="pager-wrapper">
          <xu-pager :show="Math.ceil(projectList.length / MAX_NUM) > 1" 
                  :pageNum="Math.ceil(projectList.length / MAX_NUM)" 
                  @hasSelectedPage="togglePage">
          </xu-pager>
        </div>
    </div>
</template>

<script>
import XuPager from '@/xu-view/XuPager.vue'
export default {
    components:{
      XuPager
    },
    data(){
      return {
        projectList: [],
        projectListCache: [],
        MAX_NUM:10, //每页显示的数目
        pageNow:1,
        projectName:''//用于查询的项目名称
      }
    },
    methods:{
      getData:function(){
        this.projectList = []
        this.$http['getAllProjectsInfos']()
        .then(res => {
          const {msg} = res
          this.projectList = msg
          this.projectListCache = this.projectList
        })
      },
      togglePage:function(page){
        this.pageNow = page
      },
      //查询项目
      searchProjects:function(){
        this.projectList = this.projectList.filter(ele => 
          ele.projectName.includes(this.projectName)
        )
      }
    },
    watch:{
      projectName:function(newVal,oldVal){
        if(newVal === ''){
          this.projectList = this.projectListCache
        }
      }
    },
    created(){
      this.getData()
    }

}
</script>

<style scoped>
.pager-wrapper {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.search-wrapper {
  position: absolute;
  right: 10px;
  top:12px;
  font-size: 14px;

}
.search-wrapper > li {
  display: inline-block;
}
.search-wrapper > li:nth-child(2){
  margin: 0 10px;
}
.search-wrapper  input {
  border: 1px solid #3a9fd3;
  border-radius: 3px;
  padding: 2px 4px;
}
</style>