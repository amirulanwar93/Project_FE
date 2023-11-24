<template>
  <nav class="border-gray-200 bg-white dark:bg-gray-900">
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
    >
      <div class="flex items-center">
        <img
          src="../public/logo.png"
          class="mr-3 h-8 rounded"
          alt="Flowbite Logo"
        />
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
          >Galeri Gambar</span
        >
      </div>
      <div class="flex md:order-2">
        <button
          type="button"
          class="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
        >
          <a href="./auth/login"> Login </a>
        </button>
      </div>
    </div>
  </nav>
  <slot />
</template>
