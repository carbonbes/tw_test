<template>
  <Transition
    :mode
    :enterActiveClass
    :leaveActiveClass
    enterFromClass="opacity-0"
    leaveToClass="opacity-0"
    @beforeEnter="emits('beforeEnter')"
    @afterLeave="emits('afterLeave')"
  >
    <slot />
  </Transition>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ mode?: 'out-in' | 'in-out'; duration?: string }>(),
  {
    duration: '250ms',
  }
)

const emits = defineEmits<{
  beforeEnter: [void]
  afterLeave: [void]
}>()

const enterActiveClass = computed(
  () => `transition-opacity duration-[${props.duration}]`
)
const leaveActiveClass = computed(
  () => `transition-opacity duration-[${props.duration}]`
)
</script>
