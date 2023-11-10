<!-- <script setup lang="ts">
definePageMeta({
  layout: false,
})
// const layout = "mainNav";
</script>

<template>
  <div>
    <NuxtLayout name="mainNav">
      <template #frontPage> Some header template content.</template>

      The rest of the page
    </NuxtLayout>
  </div>
</template> -->

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <template #header> Some header template content. </template>

      The rest of the page
    </NuxtLayout>
  </div>
</template>
