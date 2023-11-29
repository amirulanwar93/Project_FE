<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

let albums = ref([]);

const config = useRuntimeConfig();

const albumListing = () => {
  nextTick(async () => {
    const { data, pending, error, refresh } = await useFetch(
      `${config.public.apiBase}/albums/listing`,
      {
        method: "get",

        headers: {
          Authorization: `Bearer ${token}`,
        },
        onResponse({ request, response, options }) {
          console.log(response);
          // Process the response data

          albums.value = response._data.data;
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

onMounted(() => {
  albumListing();
});
</script>

<template>
  <main class="mx-auto max-w-screen-xl items-center justify-between p-4">
    <div>
      <div class="py-4">Galeri Terkini</div>

      <div class="grid grid-cols-2 justify-center gap-4 md:grid-cols-5 md:grid">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://picsum.photos/200?random=1"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://picsum.photos/200?random=2"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://picsum.photos/200?random=3"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://picsum.photos/200?random=4"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://picsum.photos/200?random=5"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="mx-auto flex  max-w-screen-xl items-center justify-between py-4">
      <div>Album</div>
      <div class="flex flex-wrap items-center">
        <button
          type="button"
          class="rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          <a href="#" @click.stop.prevent="navigateTo('/albums/new')"
            >Album Baru</a
          >
        </button>
      </div>
    </div>

    <ul class="">
      <li
        v-for="album in albums"
        class=" relative flex my-4 justify-center rounded-lg border border-black p-4"
      >
        <svg
          class="absolute right-0 top-0 h-6 max-w-full rounded-full border border-black bg-white text-gray-800"
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
        <a
          :href="'/albums/' + album.id"
          class="flex flex-grow items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-screen-xl md:flex-row"
        >
          <img
            class="h-96 w-full rounded-t-lg object-cover md:h-48 md:w-48 md:rounded-none md:rounded-s-lg"
            :src="config.public.apiBase + '/' + album.imageUrl"
            alt=""
          />
          <div
            class="flex flex-col justify-between p-4 leading-normal tracking-tight text-gray-900 dark:text-white"
          >
            <div class="flex">
              <h5 class="mb-2 text-2xl font-bold">
                {{ album.albumsName }}
              </h5>
              <!-- <p class="mb-2 text-xl">10 Gambar</p> -->
            </div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ album.albumsDescription }}
            </p>
          </div>
        </a>
      </li>
    </ul>
  </main>
</template>
