<template>
  <input
    :type
    :placeholder
    :autofocus
    :disabled
    :class="classes"
    v-model="model"
    ref="inputRef"
  />
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type?: 'text' | 'email' | 'password' | 'number'
    size?: 's' | 'm' | 'l'
    placeholder?: string
    autofocus?: boolean
    disabled?: boolean
  }>(),
  {
    type: 'text',
    size: 'm',
  }
)

const classes = computed(() => ({
  'rounded-lg placeholder:text-gray-400 outline-none border-2 border-gray-200/50 hover:border-blue-500/50 focus:border-blue-500 disabled:opacity-25 disabled:pointer-events-none transition':
    true,
  'bg-gray-100/75': !model.value,
  'py-1 px-1 text-sm': props.size === 's',
  'py-1.5 px-2': props.size === 'm',
  'p-2 px-3 text-lg': props.size === 'l',
}))

const model = defineModel()

const inputRef = ref<HTMLInputElement>()

async function focus() {
  await nextTick()
  inputRef.value?.focus()
}

onMounted(async () => {
  if (props.autofocus) await focus()
})
</script>
