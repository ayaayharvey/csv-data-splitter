<template>
  <q-page>
    <q-container>
      <div class="q-mt-lg text-h6 text-weight-bold">File Splitter</div>
      <input type="file" ref="fileInput" @change="handleFileUpload" />
      <q-btn label="Split File" @click="splitFile" :disable="!file" />
      <q-progress :value="progress" :max="100" indeterminate />
      <div v-if="csvChunks.length">
        <h3 class="q-mt-md">Generated CSV Files</h3>
        <ul>
          <li v-for="(csvFile, index) in csvChunks" :key="index">
            <span>{{ csvFile.name }} - Size: {{ formatSize(csvFile.size) }} MB</span>
            <a :href="generateCsvBlobUrl(csvFile.data)" :download="csvFile.name">Download</a>
          </li>
        </ul>
        <div v-if="done">File Splitting Done!</div>
      </div>
    </q-container>
  </q-page>
</template>

<script setup>
import { ref, reactive } from "vue";

const file = ref(null);
const progress = ref(0);
const csvChunks = reactive([]);
const done = ref(false);

const handleFileUpload = (event) => {
  file.value = event.target.files[0];
};

const simulateUpload = (chunk) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000); // Simulate a 1-second delay for each chunk upload
  });
};

const generateCsvBlobUrl = (csvData) => {
  const blob = new Blob([csvData], { type: "text/csv" });
  return URL.createObjectURL(blob);
};

const splitFile = async () => {
  if (!file.value) return;

  const chunkSize = 50 * 1024 * 1024; // 50MB

  const numberOfChunks = Math.ceil(file.value.size / chunkSize);
  let currentChunk = 0;
  let offset = 0;

  while (currentChunk < numberOfChunks) {
    done.value = false;
    const chunk = file.value.slice(offset, offset + chunkSize);
    // Here, you can do something with each chunk, such as upload it to a server.
    console.log(`Uploading chunk ${currentChunk + 1} / ${numberOfChunks}`);

    // Simulate uploading with a delay (remove this in production).
    await simulateUpload(chunk);

    offset += chunkSize;
    currentChunk++;
    progress.value = (currentChunk / numberOfChunks) * 100;

    // Convert chunk data to CSV format
    const csvData = await convertToCsv(chunk);

    // Generate a file name with an indicator (e.g., originalFileName_part1.csv)
    const fileName = `${file.value.name.substring(0, file.value.name.lastIndexOf("."))}_${currentChunk}.csv`;

    // Store CSV data, name, and size for display and download
    csvChunks.push({ name: fileName, size: chunk.size, data: csvData });
  }
  done.value = true;
  console.log("File splitting complete!");
};

const convertToCsv = (chunk) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvData = event.target.result;
      resolve(csvData);
    };

    reader.onerror = (event) => {
      reject(event.target.error);
    };

    reader.readAsText(chunk);
  });
};

const formatSize = (bytes) => {
  const megabytes = bytes / (1024 * 1024);
  return megabytes.toFixed(2); // Display size with two decimal places
};
</script>
