<template>
  <q-item class="rounded-borders" :class="icon === 'record_voice_over' && 'bg-white'" clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :class="icon === 'record_voice_over' ? 'text-primary' : 'text-secondary-dark'" :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-caption text-bold" :class="icon === 'record_voice_over' ? 'text-primary' : 'text-secondary-dark'">
        {{ title }}
      </q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "#",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>
