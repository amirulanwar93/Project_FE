<script setup lang="ts">
definePageMeta({
  layout: "main-nav",
});
</script>

<template>
  <main
    class="mx-auto flex max-w-screen-xl flex-col items-center justify-between p-4"
  >
    <div class="flex md:order-2">
      <button
        type="button"
        class="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
      >
        <a href="./auth/registration"> Registration </a>
      </button>
      OVERVIEW<br />
      Tempat untuk menimpan gambar-gambar
    </div>
  </main>
</template>
