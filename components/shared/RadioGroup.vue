<template>
  <RadioGroupRoot v-model="model" class="flex flex-col gap-2">
    <Flex
      v-for="item in items"
      :key="item.name"
      tag="label"
      :for="item.value"
      itemsCenter
      class="gap-2 cursor-pointer group"
    >
      <RadioGroupItem
        :value="item.value"
        :id="item.value"
        class="size-4 bg-white ring-2 ring-gray-300/50 rounded-full group-hover:ring-blue-500 data-[active=true]:ring-blue-500 data-[active=true]:bg-white shadow-sm outline-none transition-shadow"
      >
        <RadioGroupIndicator
          class="relative w-full h-full flex items-center justify-center after:content-[''] after:block after:size-[8px] after:rounded-[50%] after:bg-blue-500"
        />
      </RadioGroupItem>

      {{ item.name }}
    </Flex>
  </RadioGroupRoot>
</template>

<script lang="ts" setup>
import type { AcceptableValue } from 'reka-ui'
import Flex from '~/components/shared/Flex.vue'

export type RadioGroupItem = {
  name: string
  value: string
}

defineProps<{
  items: RadioGroupItem[]
}>()

const model = defineModel<AcceptableValue>()
</script>
