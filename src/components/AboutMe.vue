<template>
  <div class="container my-6 mx-auto">
    <h1 class="text-center text-gray-900 text-4xl font-bold">Sobre Mí</h1>
    <div class="grid grid-cols-1 gap-2">
      <figure class="md:flex rounded-xl p-8 md:p-0">
        <img
          class="w-24 h-24 md:w-48 md:h-48 xl:w-auto xl:h-auto rounded-full mx-auto my-auto"
          :src="profileImage"
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <h1 class="text-4xl text-slate-600">Hola! Mi nombre es</h1>
          <h1 class="text-4xl text-indigo-900">Diego Bustamante Albarrán</h1>
          <p class="text-gray-700 my-1 text-justify">
            Soy desarrollador de software y actualmente vivo en Santiago de
            Chile. Me considero una persona apasionada por la tecnología y la
            innovación. Soy autodidacta , por lo que , estoy en constante
            aprendizaje de nuevas tecnologías y herramientas.
          </p>
          <p class="text-gray-700 mt-6 text-justify">
            Tengo conocimientos en diversas tecnologias tales como: frontend,
            backend, bases de datos, metodologías ágiles, herramientas de
            desarrollo y servicios de la nube
          </p>
          <p class="text-gray-700 my-2 text-justify">
            Adicionalmente, manejo excelentes relaciones interpersonales ,
            disfruto del trabajo en equipo.
          </p>
          <p class="text-gray-700 my-2 text-justify">
            Me considero una persona responsable, con una actitud positiva y
            comprometida.
          </p>
          <p class="text-gray-700 my-2 text-justify">
            Disfruto de andar en bicicleta y jugar a la pelota (futbolito) y me
            encanta la gastronmía.
          </p>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  props: {
    profileImage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
