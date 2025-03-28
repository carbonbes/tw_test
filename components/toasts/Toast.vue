<template>
  <Flex
    col
    class="p-4 gap-3 bg-white border border-gray-100 rounded-xl shadow-sm pointer-events-auto"
  >
    <Flex itemsCenter class="gap-2">
      <Flex
        class="p-1 rounded-full"
        :class="{
          'bg-green-500': isSuccess,
          'bg-red-500': !isSuccess,
        }"
      >
        <Icon
          :name="`tabler:${props.toast.type === 'success' ? 'check' : 'x'}`"
          class="!w-3 !h-3 text-white"
        />
      </Flex>

      <Heading
        v-if="toast.title"
        :level="3"
        class="w-full font-medium break-anywhere"
      >
        {{ toast.title }}
      </Heading>

      <p v-if="!toast.title && toast.text" class="w-full">
        {{ toast.text }}
      </p>

      <button
        class="flex hover:opacity-50 transition-opacity"
        @click="remove(props.toast.id)"
      >
        <Icon name="tabler:x" class="!w-5 !h-5" />
      </button>
    </Flex>

    <p v-if="toast.title && toast.text">{{ toast.text }}</p>
  </Flex>
</template>

<script lang="ts" setup>
import Flex from '~/components/shared/Flex.vue'
import type { Toast } from '~/types'
import Heading from '~/components/shared/Heading.vue'
import { promiseTimeout } from '@vueuse/core'

const props = defineProps<{ toast: Toast }>()

const isSuccess = computed(() => props.toast.type === 'success')

const { remove } = useToasts()

onMounted(async () => {
  await promiseTimeout(props.toast.duration)
  remove(props.toast.id)
})
</script>
