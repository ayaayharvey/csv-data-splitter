<template>
  <q-page class="rounded-borders">
    <div style="min-height: inherit" class="rounded-borders row bg-secondary">
      <div class="col q-px-md q-py-md">
        <div class="bg-white rounded-borders q-pa-md" style="height: 100%">
          <slot></slot>
        </div>
      </div>
      <!-- <div class="col-3 q-pr-md q-py-md">
      <div class="bg-white rounded-borders q-pa-md" style="height: 100%">
        PageLayout
      </div>
    </div> -->
    </div>
  </q-page>
</template>

<script setup></script>
