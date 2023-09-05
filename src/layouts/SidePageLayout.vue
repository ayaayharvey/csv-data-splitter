<template>
  <q-drawer v-model="active" side="right" overlay bordered :width="800" class="q-pa-md bg-secondary">
    <q-btn size="sm" flat round dense @click="closeSide()" icon="close" />
    <q-item-label class="text-weight-bold text-caption" header> {{ label }} </q-item-label>
    <slot></slot>
  </q-drawer>
</template>

<script setup>
import { ref, defineEmits, watch } from "vue";
import { useStores } from "src/stores";

const store = useStores();
const props = defineProps({
  label: String,
  selectedRecord: Object,
});
const emit = defineEmits(["toggleRowDetails"]);

const rowRecord = ref(props.selectedRecord);
const active = ref(false);

const closeSide = () => {
  rowRecord.value = null;
  active.value = false;
  emit("toggleRowDetails", null);
};

watch(
  () => props.selectedRecord,
  (newValue) => {
    rowRecord.value = newValue;
    active.value = rowRecord.value ? true : false;
  }
);
</script>
