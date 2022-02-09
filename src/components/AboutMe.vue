<template>
  <div class="container my-6 mx-auto">
    <h1 class="text-center text-indigo-900 text-4xl font-bold">Sobre Mí</h1>
    <div class="grid grid-cols-1 gap-6">
      <div class="flex my-8 justify-center">
        <img :src="profileImage" class="rounded-full w-64 h-64" />
      </div>
      <div class="container px-6">
        <h1 class="text-center text-indigo-900 text-2xl font-bold my-4">
          Hola! Mi nombre es Diego Andrés Bustamante Albarrán
        </h1>
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
          Pero podría decir, que me especializo en Javascript. En el backend,
          utilizo NodeJS con ExpressJS, y en el frontend, utilizo VueJS. Para la
          base de datos utilizo MongoDB y/o PostgreSQL.
        </p>
        <p class="text-gray-700 my-2 text-justify">
          También tengo conocimientos en herramientas de desarrollo como,
          Docker, Git, Github, Jira, etc.
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
          Finalmente , datos random que nadie pidío, Me encanta la música ,
          desde Amar Azul , hasta Dream Theater , pasando por Iron Maiden y Juan
          Luis Guerra. Disfruto mucho de andar en bicicleta, y de la naturaleza.
          Me apasiona la cocina , y la gastronomía.
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
