<script setup lang="ts">

import menuData from "@/components/comment/data/menu";

const  data = menuData;
</script>


<template>

  <n-menu :options="data.menu" mode="horizontal"/>

</template>