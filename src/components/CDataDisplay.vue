<template>
  <div v-if="editable" class="row justify-between q-mx-sm q-mb-sm">
    <div>
      <span :class="editData ? 'text-primary' : 'text-secondary-dark'">{{ editData ? "Edit Mode" : "View Mode" }}</span>
    </div>
    <div>
      <q-btn v-if="!editData" flat round size="sm" icon="edit" @click="toggleEdit(!editData)"><q-tooltip>Edit</q-tooltip></q-btn>
      <q-btn v-else flat round size="sm" icon="close" class="bg-red text-white" @click="toggleEdit(!editData)"><q-tooltip>Cancel Edit</q-tooltip></q-btn>
    </div>
  </div>
  <div class="" :class="columnSize && 'row'">
    <div v-for="(value, key) in columns" :key="key" class="q-py-xs q-px-sm" :class="`col-${['xs', 'sm', 'md', 'lg', 'xl'].includes(columnSize) ? 12 / colSize[columnSize] : 12}`">
      <div v-if="type === 'field'">
        <q-input v-if="!editData" dense outlined stack-label readonly v-model="rowData[value.field]" :label="value.label" :class="[!rowData[value.field] ? 'bg-grey-4 text-grey' : highlight && highlight.includes(value.field) ? 'bg-green-1' : 'bg-grey-2']" />
        <q-input v-else dense outlined stack-label v-model="rowDataEdit[value.field]" :label="value.label" :class="[!rowDataEdit[value.field] ? ' bg-grey-3 text-grey' : 'bg-white']" />
      </div>
      <div v-else>
        <span class="text-secondary-dark text-caption">{{ value.label }}:</span>
        <span class="q-ml-sm text-semibold" :class="!data[value.field] && 'text-italic text-secondary-dark'">{{ data[value.field] ? data[value.field] : "N/A" }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  data: Object,
  columns: Object,
  columnSize: String,
  highlight: Array,
  type: String,
  editable: Boolean,
});

const editData = ref(false);
const cloneObject = (obj) => JSON.parse(JSON.stringify(obj));
const rowData = ref(cloneObject(props.data));
const rowDataEdit = ref(cloneObject(props.data));
const colSize = {
  xs: "1",
  sm: "2",
  md: "3",
  lg: "4",
  xl: "6",
};

const toggleEdit = (edit) => {
  if (!edit) rowDataEdit.value = cloneObject(props.data);
  editData.value = edit;
};
</script>
