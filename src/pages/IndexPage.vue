<template>
  <q-page>
    <q-container>
      <div class="q-mx-md">
        <div class="q-mt-lg text-h6 text-weight-bold">File Splitter</div>
        <div style="min-width: 800px" class="row justify-start">
          <q-file color="grey-3" outlined label-color="primary" v-model="file" label="Select a File" accept=".csv" @change="handleFileUpload">
            <template v-slot:append>
              <q-icon name="attachment" color="primary" />
            </template>
          </q-file>
          <q-btn unelevated color="primary" label="Split File" @click="splitFile" :disable="!file" class="q-ml-sm" />
        </div>
        <q-progress :value="progress" :max="100" indeterminate />
        <div v-if="csvChunks.length">
          <div class="q-mt-lg text-h6 text-weight-bold">Generated CSV Files</div>
          <!-- <ul>
            <li v-for="(csvFile, index) in csvChunks" :key="index">
              <span>{{ csvFile.name }} - Size: {{ formatSize(csvFile.size) }} MB</span>
              <a :href="generateCsvBlobUrl(csvFile.data)" :download="csvFile.name">Download</a>
            </li>
          </ul> -->
          <div v-for="(csvFile, index) in csvChunks" :key="index">
            <q-chip clickable @click="downloadCsvFile(csvFile)" outline square color="primary" text-color="white" icon="download"> {{ csvFile.name }} ({{ formatSize(csvFile.size) }} MB) </q-chip>
          </div>
        </div>
      </div>
    </q-container>
  </q-page>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Notify } from "quasar";

const file = ref(null);
const progress = ref(0);
const csvChunks = reactive([]);
const done = ref(false);

const handleFileUpload = () => {
  // Handle the file change event here if needed
};

const simulateUpload = (chunk) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000); // Simulate a 1-second delay for each chunk upload
  });
};

const downloadCsvFile = (csvFile) => {
  const blob = new Blob([csvFile.data], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = csvFile.name;
  a.click();
  URL.revokeObjectURL(url);
};

const generateCsvBlobUrl = (csvData) => {
  const blob = new Blob([csvData], { type: "text/csv" });
  return URL.createObjectURL(blob);
};

const splitFile = async () => {
  if (!file.value) return;

  const maxChunkSize = 50 * 1024 * 1024; // 50MB
  const minChunkSize = 45 * 1024 * 1024; // 45MB

  const numberOfChunks = Math.ceil(file.value.size / maxChunkSize);
  let currentChunk = 0;
  let offset = 0;
  let remainingData = file.value.size;

  // Remove the file extension from the original file name
  const originalFileNameWithoutExtension = file.value.name.replace(/\.[^/.]+$/, "");

  while (currentChunk < numberOfChunks) {
    done.value = false;

    // Calculate the chunk size for this iteration
    const chunkSize = Math.min(maxChunkSize, remainingData);
    const chunk = file.value.slice(offset, offset + chunkSize);

    // Simulate uploading with a delay (remove this in production).
    await simulateUpload(chunk);

    offset += chunkSize;
    remainingData -= chunkSize;
    currentChunk++;
    progress.value = (currentChunk / numberOfChunks) * 100;

    // Convert chunk data to CSV format
    const csvData = await convertToCsv(chunk);

    // Generate a file name with an indicator and without the extension (e.g., originalFileName_part1.csv)
    const fileName = `${originalFileNameWithoutExtension}_part${currentChunk}.csv`;
    console.log("fileName: ", fileName);

    // Store CSV data, name, and size for display and download
    csvChunks.push({ name: fileName, size: chunk.size, data: csvData });

    // If there is less than 45MB remaining data, finish the last file
    // if (remainingData <= minChunkSize) {
    //   break;
    // }
  }

  done.value = true;
  Notify.create({
    type: "positive",
    message: "File splitting is successful",
  });
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
