<template>
  <q-drawer v-model="leftDrawerOpen" show-if-above :width="250" class="bg-secondary">
    <q-list>
      <q-item-label class="text-weight-bold text-caption q-ml-sm" header> MENU </q-item-label>

      <EssentialLink class="q-ml-md" v-for="link in linksList" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const leftDrawerOpen = ref(true);
const linksList = [
  {
    title: "Dashboard",
    caption: "quasar.dev",
    icon: "dashboard",
    link: "https://quasar.dev",
  },
  {
    title: "PAR Reason",
    caption: "github.com/quasarframework",
    icon: "record_voice_over",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Collections",
    caption: "github.com/quasarframework",
    icon: "stacked_bar_chart",
    link: "https://github.com/quasarframework",
  },
];

// const toggleLeftDrawer = () => {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// };
</script>
