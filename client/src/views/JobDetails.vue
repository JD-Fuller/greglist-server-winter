<template>
  <div class="job-details container-fluid">
    <header class="row">
      <div class="col">
        <router-link :to="{ name: 'jobs' }">
          <h1>
            Jo
            <img alt="Vue logo" src="../assets/logo.png" />s
          </h1>
        </router-link>
      </div>
    </header>
    {{ job }}
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  mounted() {
    this.$store.dispatch("getJobById", this.$route.params.id);
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
    }
  }
};
</script>

<style></style>
