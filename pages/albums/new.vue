<script setup lang="ts">
import { callWithNuxt } from "nuxt/app";

definePageMeta({
  middleware: "auth",
});

// Tambah field file baru
const form = ref({
  name: "",
  penerangan: "",
  file: "",
});

// Bila file input onchange, assign the value into form
const onChange = async (e) => {
  form.value.file = e.target.files[0];
};

const config = useRuntimeConfig();

// Masa nak submit form, guna formData.append() untuk populate data
const newAlbum = async () => {
  const formData = new FormData();
  formData.append("albumsName", form.value.name);
  formData.append("albumsDescription", form.value.penerangan);
  formData.append("file", form.value.file);

  return await callWithNuxt(
    useNuxtApp(),
    async () =>
      await useFetch(`${config.public.apiBase}/albums/new`, {
        method: "post",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        onResponse({ request, response, options }) {
          // Process the response data
          navigateTo("/albums");

          // window.$cookies.set('token', response._data.data.token);
        },
        onResponseError({ request, response, options }) {
          // Handle the response errors
        },
      }),
  );
};
</script>

<template>
  <main class="mx-auto max-w-screen-xl items-center justify-between p-4">
    <div class="mb-6 text-2xl">
      <h1>Album Baru</h1>
    </div>
    <div class="mb-6">
      <label
        for="base-input"
        class="mb-2 block text-sm font-medium text-gray-900"
        >Nama Album</label
      >
      <input
        v-model="form.name"
        type="text"
        id="base-input"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
    </div>
    <div class="mb-6">
      <label
        for="base-input"
        class="mb-2 block text-sm font-medium text-gray-900"
        >Penerangan</label
      >
      <input
        v-model="form.penerangan"
        type="text"
        id="base-input"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
    </div>

    <label
      class="mb-2 block text-sm font-medium text-gray-900"
      for="user_avatar"
      >Upload file</label
    >
    <input
      class="my-2.5 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
      aria-describedby="user_avatar_help"
      id="user_avatar"
      type="file"
      @change="onChange"
    />
    <div class="flex md:order-2">
      <button
        type="button"
        class="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
      >
        <a href="#" @click.stop.prevent="newAlbum"> Simpan </a>
      </button>
    </div>
  </main>
</template>
