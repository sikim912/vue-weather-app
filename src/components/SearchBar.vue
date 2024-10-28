<template>
    <div class="search-bar">
        <form @submit.prevent>
            <div class="form-group">
                <input @input="inputText=$event.target.value" type="search" name="search" placeholder="都市名を入力してください">
                <button @click="
                            $store.commit('onSearchCity', inputText);
                            $store.dispatch('getWeather');
                            ">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </button>
            </div>
        </form>
    </div>
    
</template>

<script setup>
import {ref} from 'vue';
const inputText = ref('');
const emits = defineEmits(['onSearchCity']);//イベントを定義し、関数を返却する。関数は複数指定可能

</script>


<style lang="scss" scoped>
  .search-bar {
    padding: 8px 20px;
    border-radius: 40px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 0 20px;
  
    form {
      .form-group {
        display: flex;
        input {
          width: 100%;
          border: none;
          padding: 1em 0;
          font-size: 18px;
          outline: none;
          font-size: 14px;
        }
        button {
          background: transparent;
          border: none;
          &:hover { cursor: pointer; }
          .icon { font-size: 24px; }
        }
      }
    }
  }
</style>