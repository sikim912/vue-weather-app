<template>
    <div>
        <div class="weather-info">
            <div class="icon">
                <img :src="`https://openweathermap.org/img/wn/${$store.state.weatherData.icon}@2x.png`"
                     :alt="$store.state.weatherData.icon"
                >
            </div>
            <div class="temp">気温： {{ ($store.state.weatherData.temp - 273.15).toFixed(1)}}&deg;</div>
            <div class="text"><b>天気状況：</b> {{ $store.state.weatherData.text }}</div>
            <div class="location"><b>国・都市名</b>：{{ $store.state.weatherData.city }}, {{ $store.state.weatherData.location }}</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
    .weather-info{
        padding: 20px;
        /*子セレクタで、親要素の直下のdiv要素を対象とする*/
        & > div{
            margin-bottom: 20px;
            padding: 20px;
            /*border: 1px solid #ccc;*/
        }
        .icon{
            width: auto;
        }
        .temp{
            font-size: 4em;
        }
        .text{
            font-size: 2em;
        }
    }
</style>