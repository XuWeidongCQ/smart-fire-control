<template>
    <div class="xu-box h100">
      <div class="xu-box-title">
        <span>新增设备</span>
        <div class="year-select">
          <select v-model="yearNow">
            <option v-for="(year,index) in yearList" :key="index">{{ year }}</option>
          </select>
        </div>
      </div>
      <div class="xu-box-content">
        <table class="xu-table xu-table-sm xu-table-center xu-table-hover">
          <thead>
            <tr>
              <th>月份</th>
              <th>设备数量</th>
              <th>项目数量</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in monthList" :key="index">
              <td>{{item.dateName | formatterMonthName}}</td>
              <td>{{item.devNum}}</td>
              <td>
                  {{item.projectNum}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="xu-box-foot">
        <div class="foot-content-wrapper">
          <div><p>项目合计</p><span>{{ sumNum }}</span></div>
          <div><p>项目最大值</p><span>{{ maxNum }}</span></div>
          <div><p>项目最小值</p><span>{{ minNum }}</span></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
      return {
        monthList: [],
        yearList: [],
        yearNow: this.$util.getFormatterDate().YYYY
      }
    },
    methods:{
      getData:function(year = this.yearNow){
        this.yearList = [];
        this.monthList = []
        this.$http['getMonthlyProjects']({params:{year:year}})
        .then(res => {
          const { msg } = res;
          msg.forEach( ele => {
            this.monthList.push(ele)
          })
        })
        this.$http['getMonthlyProjects']()
        .then(res => {
          const { msg } = res;
          msg.forEach( ele => {
            this.yearList.push(ele.dateName)
          })
        })
      }
    },
    computed:{
      maxNum:function(){
        return Math.max(...this.monthList.map(ele => ele.projectNum))
      },
      minNum:function(){
        return Math.min(...this.monthList.map(ele => ele.projectNum))
      },
      sumNum:function(){
         return this.$util.sum(this.monthList.map(ele => ele.projectNum))
      }
    },
    watch:{
      yearNow:function(oldVal,val){
        this.getData()
      }
    },
    filters:{
      formatterMonthName:function(value){
        switch (value) {
          case 1:
            return '一月';
          case 2:
            return '二月';
          case 3:
            return '三月';
          case 4:
            return '四月';
          case 5:
            return '五月';
          case 6:
            return '六月';
          case 7:
            return '七月';
          case 8:
            return '八月';
          case 9:
            return '九月';
          case 10:
            return '十月';
          case 11:
            return '十一月';
          case 12:
            return '十二月';
          default:
            return '未知'
        }
      }
    },
    created(){
      this.getData()
    }
}
</script>

<style scoped>
.foot-content-wrapper {
  display: flex
}

.foot-content-wrapper > div {
  flex: 1;
  text-align: center;
}
.foot-content-wrapper > div:nth-child(2) {
  border-left: 1px solid #ededed;
  border-right: 1px solid #ededed;
}
.foot-content-wrapper > div > p {
  margin-bottom: 5px;
}
.year-select {
  float: right;
}
.year-select > select {
  border: 1px solid #3a9fd3;
  padding: 3px 6px;
  background-color: rgba(30, 89, 124, 0.1);
  border-radius: 10px;
  color: #ffffff;
  transition: border 0.2s;
}
.year-select > select:hover {
  border: 1px solid #ccc;
  
}
.year-select > select > option {
  color: rgb(82, 81, 81);
}
</style>


