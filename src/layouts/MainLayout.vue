<template>
  <q-layout view="hHh lpR fFf" class="poppins">
    <HeaderLayout />
    <SidebarLayout />

    <q-page-container class="bg-secondary">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderLayout from "layouts/HeaderLayout.vue";
import SidebarLayout from "layouts/SidebarLayout.vue";
</script>
