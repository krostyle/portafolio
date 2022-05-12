<template>
  <div class="container my-6 mx-auto">
    <h1 class="text-center text-gray-900 text-4xl font-bold my-4">Contacto</h1>
    <div class="container my-2 flex justify-center items-center">
      <form
        action="https://getform.io/f/0488a0ac-4d69-451f-baa5-18140375cf68"
        method="POST"
        class="w-full max-w-lg p-4"
      >
        <div class="py-12">
          <div class="mt-2 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Nombre</span>
                <input
                  type="text"
                  class="mt-1 block w-full"
                  placeholder="Juan"
                  required
                  name="name"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email</span>
                <input
                  type="email"
                  class="mt-1 block w-full"
                  placeholder="juan@example.com"
                  required
                  name="email"
                />
              </label>

              <label class="block">
                <span class="text-gray-700">Mensaje</span>
                <textarea
                  class="mt-1 block w-full"
                  rows="3"
                  required
                  name="message"
                ></textarea>
              </label>
            </div>
          </div>
        </div>
        <div class="container flex justify-center align-middle">
          <button
            type="submit"
            class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style></style>
