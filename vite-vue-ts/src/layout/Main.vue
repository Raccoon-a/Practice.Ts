<script setup lang="ts">

import Menu from "@/components/comment/Menu.vue";

</script>

<template>

  <div class="container">
    <div class="header">
      <Menu/>
    </div>
    <div class="view">
      <router-view/>
    </div>

  </div>

</template>

<style>


</style>