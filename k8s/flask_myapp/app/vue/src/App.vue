<template>
  <div>
    <original-header />
    <router-view />
  </div>
</template>

<script>
import OriginalHeader from '@/components/common/header.vue'

export default {
  name: 'App',
  components: {
    OriginalHeader
  }
}
</script>

<style>
html {
  font-size: 20px;
}

#app {
  font-family: 'Noto Sans JP', 'Avenir', Helvetica, Arial, sans-serif;
  width: 900px;
  margin: 100px auto;
}
</style>
