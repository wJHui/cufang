<template>
  <div class="flex" id="header">
    <div class="topLeft top">
      <router-link  v-if="!!data.left.type" :to="data.left.url">
        <i :class="data.left.content"></i>
      </router-link>
    </div>

    <div class="topMain top" v-if="data.main.type === 'text'" style="font-size:1rem;color: #383835; font-weight: 500;">
       {{data.main.content}}
    </div>
    <div class="topMain top" v-else-if="data.main.type === 'placeholder'">
      <div>
        <span class="placeholder">
          <i :class="data.main.l.content"></i>
          <span>{{data.main.m.content}}</span>
        </span>
        <router-link :to="data.main.r.url">
          <i :class="data.main.r.content"></i>
        </router-link>
      </div>
    </div>
    <div class="topMain top" v-else-if="data.main.type === 'input'">
      <div>
        <span class="placeholder"><i :class="data.main.l.content"></i> 搜索菜谱、食材</span>
        <router-link :to="data.main.r.url"><i :class="data.main.r.content"></i></router-link>
      </div>
    </div>
    <div class="topMain top" v-else="data.main.type === 'null'"></div>
    <div class="topRight top">
      <router-link v-if="!!data.right.type" :to="data.right.url">
        <i :class="data.right.content"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'head-vue',
    data () {
      return {}
    },
    mounted(){},
    methods : {},
    props : {
      data : {
        type : Object,
        require : true
      }
    },
    components : {}
  }
</script>

<style lang="scss" scoped>

  #header{ 
    height: 50px; 
    width: 100%; 
    background: #fff;
    position: relative;
    z-index: 20; 
    position: fixed; 
    left: 0; 
    z-index: 200;  
    top: 0; 
    padding: 6px 0 
  }
  
  .top{
    height: 36px; 
    text-align: center; 
    line-height: 36px; 

    &Left{
      flex: 2;

      i.iconfont{ 
        font-size: 1.3rem !important; 
      }
    }
    &Main{ 
      flex: 8; 
      margin: 0 6px; 

      > div{
         color: #949590;  
         padding: 0 10px; 
         background: #f2f3ee; 
         border-radius: 2px; 
         text-align: right; 
         font-size: .9rem; 
      }
      i.iconfont{ 
        color: #949590; 
      }
      .placeholder {
          display: inline-block; 
          margin-right: 10%;
      }
    }
    &Right{ flex: 2; }
  }
</style>
