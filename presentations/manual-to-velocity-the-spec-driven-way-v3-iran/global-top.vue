<template>
  <div class="iran-flag-overlay"></div>
</template>

<style scoped>
.iran-flag-overlay {
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  width: 2.625rem;
  height: 1.5rem;
  background-image: url('/iran-flag.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  opacity: 0.9;
  z-index: 100;
  pointer-events: none;
}
</style>
