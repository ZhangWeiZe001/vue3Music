<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>

//老三样
import {nextTick,ref,provide} from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "app",
}

</script>

<style>

</style>
