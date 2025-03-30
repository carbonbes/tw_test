<template>
  <RadioGroupRoot v-model="model" class="flex flex-col gap-2">
    <Flex
      v-for="item in items"
      :key="item.name"
      tag="label"
      :for="item.value"
      itemsCenter
      class="gap-2"
    >
      <RadioGroupItem
        :value="item.value"
        :id="item.value"
        class="size-5 bg-white border-2 rounded-full data-[active=true]:border-blue-500 data-[active=true]:bg-white shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-blue-500 outline-none cursor-default"
      >
        <RadioGroupIndicator
          class="relative w-full h-full flex items-center justify-center after:content-[''] after:block after:size-[10px] after:rounded-[50%] after:bg-blue-500"
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
