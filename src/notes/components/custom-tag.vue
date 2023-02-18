<template>
  <div class="custom-tag flex gap-1 align-items-center">
    <p>{{ "React" }}</p>
    <div
      @mouseover="iconHover = true"
      @mouseleave="iconHover = false"
      :class="[!iconHover ? 'bi bi-tag-fill' : 'bi bi-x-lg']"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconHover: false,
    };
  },
};
</script>

<style scoped>
.custom-tag {
  padding: 4px 10px;
  width: max-content;
  border-radius: 7px;
  background-color: var(--gray-300);
}
</style>
