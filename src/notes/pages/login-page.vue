<template>
  <div class="login flex">
    <div class="right col-5 flex justify-content-center align-items-center">
      <div class="card w-8">
        <form action="" class="p-fluid">
          <h2 class="mb-4 text-center">Login</h2>
          <div class="field mb-4">
            <div class="p-float-label">
              <pv-input-text v-model="emailOrUsername"></pv-input-text>
              <label for="emailOrUsername" class="p-error"
                >Email or Username</label
              >
            </div>
          </div>
          <div class="field mb-4">
            <div class="p-float-label">
              <pv-password v-model="password" :feedback="false"></pv-password>
              <label for="password" class="p-error">Password</label>
            </div>
          </div>
          <pv-button label="Submit" @click="handleSubmit()"></pv-button>
        </form>
      </div>
    </div>
    <div class="left col-7 p-0">
      <img src="../../assets/images/fibers.jpg" alt="background-image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailOrUsername: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      alert("Submited");
    },
  },
};
</script>

<style scoped>
.left > img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
</style>
