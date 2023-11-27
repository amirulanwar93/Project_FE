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

      <div class="grid grid-cols-2 gap-4 md:grid-cols-5">
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

    <div class="mx-auto max-w-screen-xl items-center justify-between py-4">
      <div
        class="mx-auto flex max-w-screen-xl items-center justify-between py-4"
      >
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
      <div class="flex max-w-screen-xl justify-center">
        <ul class="">
          <li
            v-for="album in albums"
            class="container my-4 flex justify-center rounded-lg border border-black p-4"
          >
            <a
              :href="'/albums/' + album.id"
              class="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
            >
              <img
                class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
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
      </div>
    </div>

    <div class="flex justify-center">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px text-sm">
          <li>
            <a
              href="#"
              class="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Previous</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >4</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >5</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Next</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>
