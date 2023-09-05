<template>
  <q-card class="q-px-md" :style="['xs', 'sm', 'md'].includes(size) ? dialogSize[size] : dialogSize['md']">
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6 text-primary">{{ title }}</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <slot></slot>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="OK" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  title: String,
  size: String,
});

const dialogSize = {
  xs: { width: "300px" },
  sm: { width: "500px" },
  md: { width: "700px" },
};
</script>
