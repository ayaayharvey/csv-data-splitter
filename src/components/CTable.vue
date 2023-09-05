<template>
  <div class="q-pt-md">
    <q-table class="my-sticky-virtscroll-table" style="min-height: 700px" flat bordered :title="title" :rows="rows" :columns="columns" row-key="index" virtual-scroll v-model:pagination="pagination" :rows-per-page-options="[0]" separator="cell" @virtual-scroll="onScroll" />
  </div>
</template>

<script setup>
import { ref, nextTick, computed } from "vue";
const props = defineProps({
  title: String,
  data: Object,
});

let allRows = [];
for (let i = 0; i < 1000; i++) {
  allRows = allRows.concat(props.data.items.slice(0).map((r) => ({ ...r })));
}
allRows.forEach((row, index) => {
  row.index = index;
});

const pageSize = 50;
const lastPage = Math.ceil(allRows.length / pageSize);

const nextPage = ref(2);
const loading = ref(false);

const rows = computed(() => allRows.slice(0, pageSize * (nextPage.value - 1)));

const onScroll = ({ to, ref }) => {
  const lastIndex = rows.value.length - 1;

  if (loading.value !== true && nextPage.value < lastPage && to === lastIndex) {
    loading.value = true;

    setTimeout(() => {
      nextPage.value++;
      nextTick(() => {
        ref.refresh();
        loading.value = false;
      });
    }, 500);
  }
};

const pagination = { rowsPerPage: 0 };
</script>

<style lang="scss">
.my-sticky-virtscroll-table {
  /* height or max-height is important */
  height: 410px;

  .q-table__top,
  thead tr:first-child th {
    /* bg color is important for th; just specify one */
    background-color: #388e3c;
    color: #fff;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
    /* this will be the loading indicator */
  }

  thead tr:last-child th {
    /* height of all previous header rows */
    top: 48px;
  }

  thead tr:first-child th {
    top: 0;
  }

  /* prevent scrolling behind sticky top row on focus */
  tbody {
    /* height of all previous header rows */
    scroll-margin-top: 48px;
  }
}
</style>
