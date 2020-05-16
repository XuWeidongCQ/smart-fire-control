<template>
    <div class="xu-box h100">
      <div class="xu-box-title">新增设备</div>
    </div>
</template>

<script>
export default {
    methods:{
      getData:function(){
       this.$http['getMonthlyProjects']({params:{year:2019}})
       .then(res => {
         console.log(res)
       })
      }
    },
    created(){
      this.getData()
    }
}
</script>

<style scoped>

</style>


