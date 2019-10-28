<template>
  <div>
    <img v-for="img in allImages" :src="img.link" :key="img.link" alt="img uploaded on imgur.com" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
img {
  max-width: 500px;
  max-height: 500px;
}
</style>