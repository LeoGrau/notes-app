<template>
  <div
    class="navigation-bar flex justify-content-between align-items-center p-2"
  >
    <div class="left">
      <h1>Notes App</h1>
    </div>
    <div class="right">
      <ul class="flex gap-2">
        <li v-for="navOption in navOptions" :key="navOption.name">
          <router-link :to="navOption.to">
            <span class="navigate-text">{{ navOption.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOptions: [
        {
          name: "Home",
          to: "/home",
        },
        {
          name: "My Notes",
          to: "/notes",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navigation-bar {
  width: 100%;
  height: 85px;
  background-color: transparent;
}

.navigate-text {
  color: var(--gray-900);
  font-size: 1.2rem;
}

.navigate-text:hover {
  color: var(--gray-700);
}
</style>
