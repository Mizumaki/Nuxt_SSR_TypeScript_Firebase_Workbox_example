<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Nuxt.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component,　Vue } from "nuxt-property-decorator"
import HelloWorld from '~/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  }
})
export default class extends Vue {}
</script>