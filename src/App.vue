<template>
  <div id="app">
    <div style="width: 50%;height:300px">
      <vue-loop-marquee :options="options"></vue-loop-marquee>
    </div>
    <button @click="toggleStyle('bgColor','red')">bgColor</button>
    <button @click="toggleStyle('alignItems','top')">alignItems(top)</button>
    <button @click="toggleStyle('alignItems','center')">alignItems(center)</button>
    <button @click="toggleStyle('alignItems','bottom')">alignItems(bottom)</button>
    <button @click="toggleStyle('content','这是一个很长很长很长很长很长很长的跑马灯组件')">content</button>
    <button @click="toggleStyle('fontSize','30')">fontSize</button>
    <button @click="toggleStyle('fontFamily','Arial,Verdana,Sans-serif')">fontFamily</button>
    <button @click="toggleStyle('letterSpacing','5')">letterSpacing</button>
    <button @click="toggleStyle('fontWeight','bold')">fontWeight</button>
    <button @click="toggleStyle('color','#fff')">color</button>
    <button @click="toggleStyle('animationTimer','2000')">animationTimer</button>
    <button @click="toggleStyle('stopTimer','3000')">stopTimer</button>
    <button @click="toggleStyle('loop',false)">loop</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      options:{}
    }
  },
  methods:{
    toggleStyle(key,val){
      this.$set(this.options,key,val);
    }
  }
}
</script>

<style>

</style>
