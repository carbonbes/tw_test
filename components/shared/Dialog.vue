<template>
  <DialogRoot v-model:open="open">
    <DialogPortal to="#teleports">
      <FadeInOpacityTransition>
        <DialogOverlay class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      </FadeInOpacityTransition>

      <FadeInScaleTransition>
        <DialogContent
          aria-describedby=""
          class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 flex flex-col bg-white rounded-xl"
          :class
          v-bind="{ ...emitsAsProps, ...$attrs }"
        >
          <VisuallyHidden>
            <DialogTitle />
          </VisuallyHidden>

          <Flex itemsCenter class="pb-6 h-14" :class="[headerClass]">
            <Heading v-if="props.title" :level="2">
              {{ props.title }}
            </Heading>

            <Flex tag="button" class="ml-auto hover:opacity-50 transition-opacity" @click="onCloseDown">
              <Icon name="tabler:x" />
            </Flex>
          </Flex>

          <slot />

          <Flex
            v-if="$slots.footer"
            itemsCenter
            class="pt-4"
            :class="[footerClass]"
          >
            <slot name="footer" />
          </Flex>
        </DialogContent>
      </FadeInScaleTransition>
    </DialogPortal>
  </DialogRoot>
</template>

<script lang="ts" setup>
import Flex from '~/components/shared/Flex.vue'
import Heading from '~/components/shared/Heading.vue'
import FadeInOpacityTransition from '~/components/shared/FadeInOpacityTransition.vue'
import FadeInScaleTransition from '~/components/shared/FadeInScaleTransition.vue'
import {
  useEmitAsProps,
  type DialogContentEmits,
  type DialogContentProps,
} from 'reka-ui'

const props = defineProps<
  DialogContentProps & {
    class?: string | object
    headerClass?: string | object
    footerClass?: string | object
    closeCallback?: () => void
    title?: string
  }
>()

const emits = defineEmits<DialogContentEmits>()

const emitsAsProps = useEmitAsProps(emits)

const open = defineModel('open', { type: Boolean, default: false })

function onCloseDown() {
  if (props.closeCallback) props.closeCallback()
  else open.value = false
}
</script>
