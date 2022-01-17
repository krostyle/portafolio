<template>
  <nav class="flex items-center justify-between flex-wrap bg-cv p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img :src="profileImage" alt="ImagenPerfil" class="h-16 w-16 rounded-full px-auto mr-4">
      <div class="font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl tracking-tight text-white">Diego Bustamante
      </div>  
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  props:['profileImage'],
}
</script>


<style>

</style>