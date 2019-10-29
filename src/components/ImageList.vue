<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img v-for="img in allImages" :src="img.link" :key="img.link" alt="img uploaded on imgur.com" />
    </div>
    <h2 v-else>Login to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
  created() {
    if (this.isLoggedIn) {
      this.fetchImages();
    }
  }
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>