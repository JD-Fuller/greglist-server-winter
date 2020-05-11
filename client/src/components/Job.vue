<template>
  <div
    class="job"
    :class="{ greyscale: jobData.filled }"
    style="display: flex; margin-top: 3rem; justify-content: space-between;"
  >
    <router-link :to="{ name: 'jobDetails', params: { id: jobData.id } }">
      <p>{{ jobTitleUpperCase }} | {{jobData.location}} | {{ jobData.description }}</p>
    </router-link>
    <button @click="filled" style="max-height: 27px;">Filled</button>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: ["jobData"], //NOTE props come from parents
  computed: {
    jobTitleUpperCase() {
      return this.jobData.title.toUpperCase();
    }
  },
  methods: {
    filled() {
      this.$store.dispatch("filled", this.jobData.id);
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
}
.greyscale {
  color: rgb(236, 15, 15);
}
</style>
