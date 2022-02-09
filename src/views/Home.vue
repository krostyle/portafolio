<template>
  <main>
    <Navbar></Navbar>
    <AboutMe :profileImage="profileImage"></AboutMe>
  </main>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    AboutMe,
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
