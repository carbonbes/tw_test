<template>
  <DateFieldRoot
    locale="ru"
    v-slot="{ segments }"
    v-model="model"
    :class="classes"
    :disabled
  >
    <template v-for="item in segments" :key="item.part">
      <DateFieldInput
        :part="item.part"
        class="data-[placeholder]:text-gray-400"
      >
        {{ item.value }}
      </DateFieldInput>
    </template>
  </DateFieldRoot>
</template>

<script lang="ts" setup>
import { CalendarDate } from '@internationalized/date'

const props = withDefaults(
  defineProps<{
    size?: 's' | 'm' | 'l'
    autofocus?: boolean
    disabled?: boolean
  }>(),
  {
    type: 'text',
    size: 'm',
  }
)

const date = ref<string>()

const model = computed({
  get() {
    if (!date.value) return

    const [day, month, year] = date.value.split('.')

    return new CalendarDate(+year, +month, +day)
  },

  set(newValue) {
    if (!newValue) return

    const { day, month, year } = newValue

    date.value = `${day}.${month}.${year}`
  }
})

const classes = computed(() => ({
  'flex items-center rounded-lg outline-none border-2 border-gray-200/50 hover:border-blue-500/50 focus:border-blue-500 disabled:opacity-25 disabled:pointer-events-none transition': true,
  'bg-gray-100/75': !model.value,
  'py-1 px-1 text-sm': props.size === 's',
  'py-1.5 px-2': props.size === 'm',
  'p-2 px-3 text-lg': props.size === 'l',
}))
</script>
