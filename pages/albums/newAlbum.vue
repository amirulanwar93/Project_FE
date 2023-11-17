<template>
  <main class="mx-auto max-w-screen-xl items-center justify-between p-4">
    <div class="mb-6">
      <label
        for="base-input"
        class="mb-2 block text-sm font-medium text-gray-900"
        >Nama Album</label
      >
      <input
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
        type="text"
        id="base-input"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
    </div>

    <label
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      for="user_avatar"
      >Upload file</label
    >
    <input
      class="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
      aria-describedby="user_avatar_help"
      id="user_avatar"
      type="file"
    />
    <div class="mt-1 text-sm text-gray-500" id="user_avatar_help">
      A profile picture is useful to confirm your are logged into your account
    </div>
    <div class="flex md:order-2">
      <button
        type="button"
        class="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
      >
        <a href="#"> Simpan </a>
      </button>
    </div>
  </main>
</template>
