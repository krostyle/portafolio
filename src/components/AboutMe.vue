<template>
  <div class="container my-6 mx-auto">
    <h1 class="text-center text-gray-900 text-4xl font-bold">Sobre Mí</h1>
    <div class="grid grid-cols-1 gap-2">
      <div class="flex my-4 justify-center">
        <img
          :src="profileImage"
          class="rounded-full w-48 h-48 md:w-64 md:h-64"
        />
      </div>
      <h1 class="text-center text-rose-500 text-3xl font-bold">
        Hola! Mi nombre es <br />
      </h1>
      <h1 class="text-center text-indigo-900 text-2xl font-bold">
        Diego Andrés Bustamante Albarrán
      </h1>

      <div class="container px-6">
        <p class="text-gray-700 my-1 text-justify">
          Soy desarrollador de software y actualmente vivo en Santiago de Chile.
          Me considero una persona apasionada por la tecnología y la innovación.
          Soy autodidacta , por lo que , estoy en constante aprendizaje de
          nuevas tecnologías y herramientas.
        </p>
        <p class="text-gray-700 my-1 text-justify">
          Actualmente me encuentro cursando un diplomado de Arquitectura Cloud
          de AWS en La Universidad de Santiago de Chile.
        </p>

        <br />
        <p class="text-gray-700 mt-6 text-justify">
          Tengo conocimientos en diversas tecnologias, tales como : C#, Java,
          Javascript, Python, NodeJS, VueJS, Servicios en la nube de AWS, Bases
          de datos relacionales y no relacioneles como PostgreSQL, MongoDB,
          Oracle y Firebase.
        </p>
        <p class="text-gray-700 my-2 text-justify">
          Pero, podría decir, que me especializo en Javascript. Generalmente
          para el bakcend, utilizo NodeJS con Express, y para frontend, utilizo
          VueJS. Las bases de datos que usualmente utilizo son MongoDB y/o
          PostgreSQL.
        </p>
        <p class="text-gray-700 my-2 text-justify">
          También tengo conocimientos en herramientas de desarrollo y la Nube
          como, Docker, Git, Github y en los servicios de AWS.
        </p>
        <p class="text-gray-700 my-2 text-justify">
          Adicionalmente, manejo muy buenas relaciones interpersonales , me
          gusta el trabajo en equipo y la comunicación entre personas.
        </p>
        <p class="text-gray-700 my-2 text-justify">
          Me considero una persona responsable, con una actitud positiva y
          comprometida.
        </p>
        <p class="text-gray-700 my-2 text-justify">
          Disfruto mucho de andar en bicicleta y jugar a la pelota (futbolito) y
          me encanta la gastronmía.
        </p>
      </div>
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
