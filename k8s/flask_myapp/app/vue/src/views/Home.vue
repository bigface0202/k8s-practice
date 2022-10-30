<template>
  <div class="home">
    <img class="home__img" src="@/assets/img/top.jpg" />
    <profile />
  </div>
</template>

<script>
import Profile from '@/components/home/profile.vue'

export default {
  components: {
    Profile
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';
@import '@/assets/sass/size.scss';

.home {
  &__img {
    max-width: 900px;
    max-height: 560px;
  }
}


</style>
