<template>
  <main>
    <Navbar></Navbar>
    <AboutMe :profileImage="profileImage"></AboutMe>
    <Skills></Skills>
    <Contact></Contact>
  </main>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Contact from "@/components/Contact.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    AboutMe,
    Skills,
    Contact,
  },
  data() {
    return {
      profileData: {},
      profileImage: "",
    };
  },
  methods: {
    async getProfileData() {
      const { data } = await axios.get("https://api.github.com/users/krostyle");
      return data;
    },
  },
  async created() {
    this.profileData = await this.getProfileData();
    this.profileImage = this.profileData.avatar_url;
  },
};
</script>
