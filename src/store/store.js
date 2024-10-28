import {createStore } from 'vuex';

//storeの作成
export default createStore({
    state: {
        count : 0,
        //天気データのref変数
        weatherData : {
            icon: 'icon',
            temp: 0,
            text: 'text',
            location: 'location',
            city: 'Tokyo',
        },
    },
    mutations: {
        //mutations(データ変更)
        addCount(state, payload){
            state.count += 1 + payload;
        },
        updateWeatherData(state, payload){
            state.weatherData = payload;
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = payload.main.temp;
            state.weatherData.text = payload.weather[0].description;
            state.weatherData.location = payload.sys.country;
            state.weatherData.city = payload.name;
        },
        onSearchCity(state, payload){
            state.weatherData.city = payload
        },
    },
    actions: {
        getWeather(context) {
            //環境設定ファイルに設定したAPI_KEYを読み込む。
            const API_KEY = import.meta.env.VITE_API_KEY;
            console.log("API_KEY :" + API_KEY);
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`;
            console.log('API_URL: ' + API_URL);
            fetch(API_URL)
              .then(res => res.json())//jsonに変換する
              .then(data => {
                console.log('actions data :' , data);
                context.commit('updateWeatherData', data);
              })
              .catch(err => {
                alert("APIコールでエラー発生！");
              })
          }
    }

})