<template>
  <div class="table-page">
    <div class="title"><span>Table</span></div>
    <p class="intro">Table组件用过好几个，最后感觉还是用Vue写原生的最方便。Table大多都是用于大量的数据展示，纯原生写是比较麻烦，但是在有Vue处理数据后就变的异常简单了，在Vue的基础上再使用Table组件只是把简单的功能复杂化而已，而且其实绝大多数情况下我的同事们使用Table插件仅仅是要那个插件所附加的样式而已......</p>
    <div class="type-switch">
      <span class="bgc" :style="{'transform': 'translate3d(' + (index * 100) + '%, 0, 0)'}"></span>
      <span @click="index = 0" :class="{'select': index == 0}">Unicode</span>
      <span @click="index = 1" :class="{'select': index == 1}">Font class</span>
      <span @click="index = 2" :class="{'select': index == 2}">Symbol</span>
      <span @click="index = 3" :class="{'select': index == 3}">Symbol</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>年龄</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in list">
          <td v-html="i.id"></td>
          <td v-html="i.name"></td>
          <td v-html="i.age"></td>
          <td v-html="i.address"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tablePage',
  data () {
    return {
      index: 1,
      list: [
        {id: 1, name: 'Platelet', age: '3', address: 'vessel'},
        {id: 2, name: 'erythrocyte', age: '29', address: 'Japan'},
        {id: 3, name: '山新', age: '3岁', address: '北斗企鹅🐧'},
        {id: 4, name: '临渊', age: '42', address: '未知'},
        {id: 5, name: '衔烛', age: '1W+', address: '北方极寒之地'},
        {id: 6, name: 'Sherlock·Holmes', age: '27', address: 'Baker Street 221B'}
      ]
    };
  }
}
</script>