<template>
  <Component
    :is="to ? nuxtLink : 'button'"
    :to
    :target
    :disabled
    :data-disabled="to ? disabled : undefined"
    v-bind="$attrs"
    :class="classes"
  >
    <slot />
  </Component>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    to?: string
    target?: '_blank'
    variant?: 'primary' | 'secondary'
    size?: 's' | 'm' | 'l'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'm',
  }
)

const nuxtLink = defineNuxtLink({})

const classes = computed(() => ({
  'rounded-lg border-2 border-transparent shadow-md font-bold whitespace-nowrap disabled:opacity-25 disabled:pointer-events-none data-[disabled="true"]:opacity-25 data-[disabled="true"]:pointer-events-none transition select-none touch-manipulation':
    true,
  'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white':
    props.variant === 'primary',
  'bg-white ring-1 ring-gray-300/50 hover:bg-gray-100 hover:ring-gray-200 active:bg-gray-300 text-black':
    props.variant === 'secondary',
  'py-1 px-1 text-sm': props.size === 's',
  'py-1.5 px-2 text-md': props.size === 'm',
  'p-2 px-3 text-lg': props.size === 'l',
}))
</script>
