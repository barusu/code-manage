<template>
  <main>
    <header></header>
    <div class="content">
      <div class="sidebar" :class="{'close': close}">
        <div class="sidebar-wrapper">
          <div class="control" @click="close = !close"><span class="icon-menu"></span></div>
          <div class="sidebar-item-wrapper">
            <div>
              <template v-for="(n, ni) in nav">
                <input :id="'sidebar_' + ni" type="radio" name="sidebar_control" class="kakushi sidebar-control" :key="n.name">
                <div class="item" :key="'el' + n.name">
                  <label :for="'sidebar_' + ni" class="sidebar-item"><span v-html="n.name"></span></label>
                  <ul class="item-wrapper" v-if="n.child">
                    <li class="item-child" v-for="c in n.child"  :key="c.name">
                      <div class="icon"><span :class="c.icon"></span></div>
                      <span v-html="c.name"></span>
                    </li>
                  </ul>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="subsidiary"></div>
      <router-view class="container"/>
    </div>
  </main>
</template>

<script>
import nav from '@/data/nav.json';

export default {
  name: 'App',
  data() {
    return {
      nav: [],
      close: false,
      clientHeight: 50
    };
  },
  methods: {
    init() {
      this.nav = nav;
    },
    resize() {
      this.clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
    }
  },
  computed: {
    maxHeight() {
      return this.clientHeight - 80 - this.nav.length * 40;
    }
  },
  mounted() {
    this.init();
    this.resize();
    window.addEventListener('resize', this.resize, false);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize, false);
  }
}
</script>
