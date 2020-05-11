<template>
  <div class="jobs container-fluid">
    <header class="row">
      <div class="col">
        <h1>
          JO
          <img alt="Vue logo" src="../assets/logo.png" />s
        </h1>
      </div>
    </header>
    <main class="row search">
      <div class="col-12">
        <form @submit.prevent="createJob">
          <input required type="text" v-model="newJob.title" placeholder="Title" />
          <input required type="number" v-model="newJob.pay" placeholder="Pay" />
          <input required type="text" v-model="newJob.location" placeholder="Location" />
          <input required type="text" v-model="newJob.description" placeholder="Description" />
          <button class="btn btn-success" type="submit">Add Job</button>
        </form>
      </div>
      <div class="col-12">
        <div class="row jobs" style="flex-direction: column;">
          <div class="col-4" v-for="job in jobs" :key="job.id" style="text-align: left;">
            <!-- Props are data passed from parent to child with :propName="DATA" -->

            <job-component :jobData="job" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import JobComponent from "@/components/Job";
export default {
  name: "job",
  mounted() {
    //runs when the component is first put (mounted) on the dom
    this.$store.dispatch("getJobs");
  },
  data() {
    return {
      newJob: {
        title: "",
        pay: 0,
        location: "",
        description: ""
      }
    };
  },
  methods: {
    createJob() {
      debugger;
      let job = { ...this.newJob }; //NOTE makes a copy of the car data object
      this.$store.dispatch("createJob", job);
      this.newJob = {
        title: "",
        pay: 0,
        location: "",
        description: ""
      };
    }
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    },
    filledJobs() {
      this.jobs.filter(j => !job.filled);
    }
  },
  components: {
    JobComponent
  }
};
</script>
<style>
h1 img {
  transform: rotate(180deg);
  height: 1em;
}
</style>
