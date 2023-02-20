<template>
  <div class="custom-note">
    <div class="card">
      <div class="left flex gap-2 align-items-center">
        <i class="bi bi-sticky-fill text-7xl"></i>
        <div class="data">
          <h1>Take out Rusty</h1>
          <p><strong>Date: </strong> <span>22/07/2022</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-radius: 10px;
  background-color: var(--blue-100);
}
.card > i.bi.bi-sticky-fill {
  font-size: 2rem;
}
</style>
