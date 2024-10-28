<script setup>
  import NavBar from './components/NavBar.vue';
  import MainComp from './components/MainComp.vue';
  import {ref, onMounted} from 'vue';
  import {useStore} from 'vuex';

  const store = useStore();

  //天気データのref変数
  const weatherData = ref({
    icon: 'icon',
    temp: 0,
    text: 'text',
    location: 'location',
    city: 'Tokyo',
  });

  //Apiをコールして天気関連データを取得
  onMounted(() => {
    store.dispatch('getWeather');
  });

  const onSearchCity = () =>{
    weatherData.value.city = store.state.weatherData.city;
    getWeather();
  }

</script>

<template>
  <NavBar /><br>
  <router-view></router-view>
</template>

<style scoped lang="scss">

</style>
