<template>
  <div class="home-profile">
    <div class="home-profile__introduction">
      <img class="home-profile__introduction__icon" src="@/assets/img/404.jpg" />
      <section class="home-profile__introduction__text">
        <label class="home-profile__introduction__text__label">
          Name
        </label>
        <p class="home-profile__introduction__text__name">
          岸下 優介 (Yusuke Kishishita)
        </p>
        <label class="home-profile__introduction__text__label">
          Working at
        </label>
        <p class="home-profile__introduction__text__description">
          Future Architect
        </p>
        <label class="home-profile__introduction__text__label">
          Tech
        </label>
        <p class="home-profile__introduction__text__description">
          Google Cloud / Vue.js / おうちKubernetes / Python / Terraform
        </p>
        <label class="home-profile__introduction__text__label">
          Hobby
        </label>
        <p class="home-profile__introduction__text__description">
          筋トレ / 自動車 / 英会話見習い
        </p>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/sass/colors.scss';
@import '@/assets/sass/size.scss';

.home-profile {
  background-color: $concept_lighten_color;
  &__introduction {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 900px;
    padding: $unit_size*4 0;
    margin: 0 auto;
    vertical-align: bottom;
    border-radius: $radius_size;
    &__icon {
      flex-grow: 0;
      width: 200px;
      height: 200px;
      margin: $unit_size*2;
      border-radius: 50%;
    }
    &__text {
      max-width: 600px;
      padding: $unit_size;
      &__label {
        display: block;
        margin-bottom: $unit_size;
        font-size: 0.8rem;
        font-weight: bold;
        color: $concept_color;
      }
      &__name {
        font-size: 1.2rem;
      }
      &__description {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
