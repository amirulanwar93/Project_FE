<script setup lang="ts">
import { callWithNuxt } from "nuxt/app";

definePageMeta({
  middleware: "auth",
});

let album = ref([]);
let pictures = ref([]);

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const route = useRoute();

console.log(route.params.album_id);

const config = useRuntimeConfig();

const listingAlbum = () => {
  nextTick(async () => {
    const { data, pending, error, refresh } = await useFetch(
      `${config.public.apiBase}/albums/show/${route.params.album_id}`,
      {
        method: "get",

        headers: {
          Authorization: `Bearer ${token}`,
        },
        onResponse({ request, response, options }) {
          console.log(response);
          // Process the response data

          album.value = response._data.data;
          // window.$cookies.set('token', response._data.data.token);
        },
        onResponseError({ request, response, options }) {
          console.log(response);
          // Handle the response errors
        },
      },
    );
  });
};

const listingPicture = () => {
  nextTick(async () => {
    const { data, pending, error, refresh } = await useFetch(
      `${config.public.apiBase}/albums/${route.params.album_id}/pictures/listing`,
      {
        method: "get",

        headers: {
          Authorization: `Bearer ${token}`,
        },
        onResponse({ request, response, options }) {
          console.log(response);
          // Process the response data

          pictures.value = response._data.data;
          // window.$cookies.set('token', response._data.data.token);
        },
        onResponseError({ request, response, options }) {
          console.log(response);
          // Handle the response errors
        },
      },
    );
  });
};

// Tambah field file baru
const form = ref({
  file: "",
});

// Bila file input onchange, assign the value into form
const onChange = async (e) => {
  form.value.file = e.target.files[0];
};

// Masa nak submit form, guna formData.append() untuk populate data
const uploadPicture = async () => {
  const formData = new FormData();
  formData.append("file", form.value.file);

  return await callWithNuxt(
    useNuxtApp(),
    async () =>
      await useFetch(
        `${config.public.apiBase}/albums/${route.params.album_id}/pictures/upload`,
        {
          method: "post",
          body: formData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          onResponse({ request, response, options }) {
            console.log(response);
            // Process the response data
            reloadNuxtApp();
          },
          onResponseError({ request, response, options }) {
            console.log(response);
            // Handle the response errors
          },
        },
      ),
  );
};

const deleteAlbum = () => {
  nextTick(async () => {
    const { data, pending, error, refresh } = await useFetch(
      `${config.public.apiBase}/albums/delete/${route.params.album_id}`,
      {
        method: "delete",

        headers: {
          Authorization: `Bearer ${token}`,
        },
        onResponse({ request, response, options }) {
          console.log(response);
          // Navigate to Albums
          navigateTo("/albums");
        },
        onResponseError({ request, response, options }) {
          console.log(response);
          // Handle the response errors
        },
      },
    );
  });
};

onMounted(() => {
  listingAlbum();
  listingPicture();
});
</script>

<template>
  <main class="mx-auto max-w-screen-xl items-center justify-between p-4">
    <div class="flex justify-between">
      <div class="flex p-4">
        <button
          type="button"
          class="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0"
        >
          <a href="#" @click.stop.prevent="navigateTo('/albums')">
            <svg
              class="h-6 w-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
          </a>
        </button>
        <div class="m-4">
          <h1>{{ album.name }}</h1>
          <p>{{ album.description }}</p>
          <div class="flex">
            <div class="flex flex-col">
              <label
                class="mb-2 block text-sm font-medium text-gray-900"
                for="user_avatar"
                >Upload file</label
              >
              <input
                class="my-2.5 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                @change="onChange"
                type="file"
              />
            </div>
            <div class="flex md:order-2">
              <button
                type="button"
                class="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
              >
                <a href="#" @click.stop.prevent="uploadPicture"> Simpan </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-evenly">
        <button
          type="button"
          class="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
        >
          <a :href="'/albums/' + album.id + '/edit'"> Edit Album </a>
        </button>
        <button
          type="button"
          class="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
        >
          <a href="#" @click.stop.prevent="deleteAlbum"> Delete Album </a>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-5">
      <div class="relative flex">
        <svg
          class="absolute right-0 top-0 h-6 w-6 rounded-full bg-white text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <img
          class="h-auto max-w-full rounded-lg"
          :src="config.public.apiBase + '/' + album.imageUrl"
          alt=""
        />
      </div>

      <div v-for="picture in pictures" class="relative flex">
        <svg
          class="absolute right-0 top-0 h-6 max-w-full rounded-full bg-white text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
          <a href="#"></a>
        </svg>
        <img
          class="h-auto max-w-full rounded-lg object-contain"
          :src="config.public.apiBase + '/' + picture.imageUrl"
          alt=""
        />
      </div>
    </div>
  </main>
</template>
