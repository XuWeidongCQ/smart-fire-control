<template>
  <div class="xu-box h100">
    <div class="xu-box-title">项目概况</div>
    <div class="xu-box-content">
      <table class="xu-table xu-table-center xu-table-hover">
        <thead>
          <tr>
            <th>#ID</th>
            <th>项目名称</th>
            <th>项目地址</th>
            <th>经纬度</th>
            <th>消防设备数量</th>
            <th>完工日期</th>
            <th>备注</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projectList" :key="project.projectId">
            <td>{{ project.projectId }}</td>
            <td>{{ project.projectName }}</td>
            <td>{{ project.location }}</td>
            <td>({{project.longitude}}，{{project.latitude}})</td>
            <td>{{project.deviceNumber}}</td>
            <td>{{project.projectFinishDate}}</td>
            <td>{{project.remark | formatterRemark}}</td>
            <td>
               <button 
               class="xu-btn xu-btn-sm xu-btn-cancel"
               :class="{'invalid-btn':project.deviceNumber > 0}" 
               @click="del(project)">
               删除
               </button>            
               <button class="xu-btn xu-btn-sm xu-btn-primary">添加设备</button>            
               <button 
               class="xu-btn xu-btn-sm xu-btn-info" 
               :class="{'invalid-btn':project.deviceNumber === 0}">
               查看设备
               </button>            
               <button class="xu-btn xu-btn-sm xu-btn-success" 
               @click="showEditModal(project)">
               编辑
               </button>            
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 编辑弹框 -->
    <edit-modal 
    @close="isEditModalShow = false"
    @editSuccess="getData(),isEditModalShow = false"
    :project="projectNow" 
    v-if="isEditModalShow">
    </edit-modal>
  </div>
</template>

<script>
import EditModal from './ProjectCasesComp/EditModal.vue'
export default {
  components: {
    EditModal
  },
  data(){
    return {
      projectList:[],
      projectNow:{},
      isEditModalShow:false,
    }
  },
  methods: {
    getData(){
      this.projectList = []
      this.$http['getAllProjectsInfos']()
      .then(res => {
        const {msg} = res
        this.projectList = msg
        this.projectListCache = this.projectList
      })
    },
    //2.删除一个项目
    del(project){
      this.projectNow = project
      const{projectId:id} = project
      this.$http['delOneProject']({data:{projectId:id}})
      .then(res => {
        this.getData()
      })
    },
    //3.编辑项目弹窗
    showEditModal(project){
      // console.log(project)
      this.projectNow = project
      this.isEditModalShow = true
    }
  },
  filters:{
    formatterRemark(value){
      const res = value === ''?'无':value
      return res
    }
  },
  created(){
    this.getData()
  }
}
</script>

<style scoped>
.invalid-btn {
  opacity: 0.5;
  pointer-events: none;
}
</style>