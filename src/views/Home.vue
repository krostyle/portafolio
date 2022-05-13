<template>
  <main>
    <Navbar></Navbar>
    <AboutMe :profileImage="profileImage" id="aboutme"></AboutMe>
    <Skills id="skills"></Skills>
    <Contact id="contact"></Contact>
    <Footer></Footer>
  </main>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    AboutMe,
    Skills,
    Contact,
    Footer,
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
