<template>
  <Transition
    :enterActiveClass
    :leaveActiveClass
    enterFromClass="opacity-0 scale-[0.99]"
    leaveToClass="opacity-0 scale-[0.99]"
  >
    <slot />
  </Transition>
</template>

<script lang="ts" setup>
const enterActiveClass = computed(() => 'transition-all duration-[250ms]')
const leaveActiveClass = computed(() => 'transition-all duration-[250ms]')
</script>
