<template>
  <header class="header">
    <h1 class="header__title">
      y-kissy
    </h1>
    <navigation class="header__nav" />
  </header>
</template>

<script>
import constants from './constants.js'
import Navigation from './navigation.vue'

export default {
  components: {
    Navigation
  },
  data () {
    return {
      drawer: false,
      navItems: constants.navItems
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';

.header {
  width: 100%;
  font-weight: bold;
  background-color: $concept_lighten_color !important;
  &__title {
    margin: 50px 0;
    color: $concept_color;
    text-align: center;
  }
  &__nav {
    margin: 0;
  }
  .isOpen {
    display: block;
  }
}
</style>
