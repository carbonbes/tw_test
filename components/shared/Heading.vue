<template>
  <Component :is="tag" :class="classes">
    <slot />
  </Component>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    level?: 1 | 2 | 3 | 4
  }>(),
  {
    level: 1,
  }
)

const tag = computed(() => `h${props.level}`)

const classes = computed(() => ({
  'font-bold': true,
  'text-[32px] leading-[30px]': props.level === 1,
  'text-[20px] leading-[28px]': props.level === 2,
  'text-[17px] leading-[24px]': props.level === 3,
  'text-md leading-[20px]': props.level === 4
}))
</script>
