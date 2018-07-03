<template>
  <main>
    <header></header>
    <div class="content">
      <input id="sidebar_control" type="checkbox" class="kakushi">
      <div class="sidebar">
        <label for="sidebar_control" class="control"><span class="icon-menu"></span></label>
        <input id="sidebar_1" type="checkbox" class="kakushi sidebar-control">
        <div class="item">
          <label for="sidebar_1" class="sidebar-item"><span>tets1</span></label>
          <ul class="item-wrapper">
            <li class="item-child">
              <div class="icon"></div>
              <span>tets1-1</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="subsidiary"></div>
      <router-view class="container"/>
    </div>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>
