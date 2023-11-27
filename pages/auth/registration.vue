<script setup lang="ts">
import { callWithNuxt } from "nuxt/app";

const form = ref({
  name: "",
  email: "",
  password: "",
  number_phone: "",
  company_name: "",
});

const config = useRuntimeConfig();

const register = async () => {
  return await callWithNuxt(
    useNuxtApp(),
    async () =>
      await useFetch(`${config.public.apiBase}/register`, {
        method: "post",
        body: form,
        onResponse({ request, response, options }) {
          console.log(response);
          // Process the response data
          // window.$cookies.set('token', response._data.data.token);
          navigateTo("/auth/login");
        },
        onResponseError({ request, response, options }) {
          // console.log(response);
          // Handle the response errors
        },
      }),
  );
};
</script>

<template>
  <main class="mx-auto max-w-screen-xl items-center justify-between p-4">
    <form>
      <div class="group relative z-0 mb-6 w-full">
        <input
          v-model="form.email"
          type="email"
          name="floating_email"
          id="floating_email"
          class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >Email address</label
        >
      </div>
      <div class="group relative z-0 mb-6 w-full">
        <input
          v-model="form.password"
          type="password"
          name="floating_password"
          id="floating_password"
          class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        <label
          for="floating_password"
          class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >Password</label
        >
      </div>
      <!-- <div class="group relative z-0 mb-6 w-full">
        <input
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
          placeholder=" "
          required
        />
        <label
          for="floating_repeat_password"
          class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >Confirm password</label
        >
      </div> -->
      <!-- <div class="grid md:grid-cols-2 md:gap-6"> -->
      <div class="group relative z-0 mb-6 w-full">
        <input
          v-model="form.name"
          type="text"
          name="floating_name"
          id="floating_name"
          class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        <label
          for="floating_name"
          class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >Name</label
        >
      </div>
      <!-- <div class="group relative z-0 mb-6 w-full">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
            placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >Last name</label
          >
        </div> -->
      <!-- </div> -->
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="group relative z-0 mb-6 w-full">
          <input
            v-model="form.number_phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="floating_phone"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >Phone number (123-456-7890)</label
          >
        </div>
        <div class="group relative z-0 mb-6 w-full">
          <input
            v-model="form.company_name"
            type="text"
            name="floating_company"
            id="floating_company"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="floating_company"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >Company (Ex. Google)</label
          >
        </div>
      </div>
      <button
        type="submit"
        @click.stop.prevent="register"
        class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  </main>
</template>
