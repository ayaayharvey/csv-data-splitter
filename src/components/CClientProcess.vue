<template>
  <div class="row justify-between items-center">
    <div>
      <div class="text-h6 text-weight-bold">{{ data.customer_name }}</div>
      <div class="text-subtitle1 text-weight-medium text-primary">{{ data.client_code }}</div>
    </div>
    <div>
      <q-chip square size="lg" @click="copyText(number)">
        <q-avatar icon="content_copy" color="secondary-dark" text-color="white" class="cursor-pointer" />
        {{ number }}
      </q-chip>
      <!-- <q-chip clickable @click="copyText(number)" outline color="secondary-dark" size="md" text-color="white" icon="phone" icon-right="content_copy" class="bg-grey-3"> {{ number }} </q-chip> -->
    </div>
  </div>
  <div class="row grid">
    <div>
      <span class="text-secondary-dark text-caption">{{ data.pension_type }}:</span>
      <span class="q-ml-sm text-semibold">{{ data.pension_type }}</span>
    </div>
    <div>
      <span class="text-secondary-dark text-caption">{{ data.pension_type }}:</span>
      <span class="q-ml-sm text-semibold">{{ data.pension_type }}</span>
    </div>
  </div>
  <div>{{ data }}</div>
</template>

<script setup>
import { ref } from "vue";
import { copyToClipboard, Notify } from "quasar";

const props = defineProps({
  data: Object,
  columns: Array,
});

const number = "09481235155";

const copyText = (textToCopy) => {
  console.log(textToCopy);

  copyToClipboard(textToCopy)
    .then(() => {
      console.log("copied");
      Notify.create({
        type: "secondary",
        message: "Text copied",
      });
    })
    .catch(() => {
      console.log("error");
    });
};
</script>
