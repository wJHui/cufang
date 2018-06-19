<template>
  <div class="flex">
    <div class="topLeft top">
      <i class="iconfont icon-plus-add"></i>
    </div>
    <div class="topMain top">
      <span class="placeholder"><i class="iconfont icon-fangdajing"></i> 搜索菜谱、食材</span>
      <i class="iconfont icon-maikefeng"></i>
    </div>
    <div class="topRight top">
      <i class="iconfont icon-iconset0316"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeadVue',
    data () {
      return {}
    },
    mounted(){},
    methods : {},
    components : {}
  }
</script>

<style lang="scss" scoped>
  .top{
    height: 36px; text-align: center; line-height: 36px; 

    &Left{ flex: 2;}
    &Main{ flex: 8; padding: 0 10px; margin: 0 6px; background: #f2f3ee; border-radius: 2px; text-align: right; font-size: .9rem;  color: #949590;

      i.iconfont{ color: #949590; }
      .placeholder {
          display: inline-block; margin-right: 10%;
      }
    }
    &Right{ flex: 2; }
  }
</style>
