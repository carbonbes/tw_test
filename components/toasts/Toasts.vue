<template>
  <Teleport to="#teleports">
    <div
      class="fixed inset-0 md:inset-[unset] md:top-0 md:right-0 p-4 w-full md:w-[350px] md:h-full pointer-events-none z-[1]"
    >
      <Flex col class="relative gap-2">
        <TransitionGroup
          move-class="duration-[250ms]"
          enter-active-class="animate-toast transition-[transform,opacity] duration-[250ms]"
          leave-active-class="absolute !transition-opacity duration-[250ms]"
          leave-to-class="opacity-0"
        >
          <Toast v-for="toast in toasts" :key="toast.id" :toast />
        </TransitionGroup>
      </Flex>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import Flex from '~/components/shared/Flex.vue'
import Toast from '~/components/toasts/Toast.vue'
import { useToasts } from '~/composables/useToasts'

const { toasts } = useToasts()
</script>
