<template>
  <Dialog v-model:open="open" class="w-full max-w-[500px] max-[500px]:rounded-none">
    <Flex col class="gap-8">
      <Heading :level="2">Фильтры</Heading>

      <Flex col class="gap-4">
        <UIInput
          placeholder="ID"
          type="number"
          v-model="filters.id"
          :disabled="isRequesting"
        />

        <UIInput
          placeholder="Статус"
          v-model="filters.status"
          :disabled="isRequesting"
        />

        <Flex itemsCenter justifyBetween class="gap-4">
          <DateField v-model="filters.date_created" class="flex-[1]" />

          <DatePicker v-model="filters.date_created">
            <UIButton variant="secondary" class="flex items-center justify-center">
              <Icon name="tabler:calendar" class="!size-5" />
            </UIButton>
          </DatePicker>
        </Flex>

        <UIInput placeholder="Имя" v-model="filters.name" :disabled="isRequesting" />

        <Flex itemsCenter class="gap-4">
          <UIInput
            placeholder="Цена, от"
            type="number"
            v-model="filters.minPrice"
            class="flex-[1]"
            :disabled="isRequesting"
          />

          <UIInput
            placeholder="Цена, до"
            type="number"
            v-model="filters.maxPrice"
            class="flex-[1]"
            :disabled="isRequesting"
          />
        </Flex>
      </Flex>

      <Flex col class="gap-2">
        <UIButton @click="applyFilters" :disabled="isRequesting">
          Применить
        </UIButton>

        <UIButton
          variant="secondary"
          class="flex items-center justify-center gap-2"
          @click="clearFilters"
          :disabled="isRequesting || isEmptyObject(filters)"
        >
          <Icon name="tabler:trash" />
          Очистить фильтры
        </UIButton>
      </Flex>
    </Flex>
  </Dialog>
</template>

<script lang="ts" setup>
import Flex from '~/components/shared/Flex.vue'
import UIButton from '~/components/shared/UIButton.vue'
import Dialog from '~/components/shared/Dialog.vue'
import Heading from '~/components/shared/Heading.vue'
import UIInput from '~/components/shared/UIInput.vue'
import DatePicker from '~/components/shared/DatePicker.vue'
import DateField from '~/components/shared/DateField.vue'
import { promiseTimeout } from '@vueuse/core'

const open = defineModel('open', { type: Boolean, default: false })

const isRequesting = ref(false)
const filters = ref<Filters>({})

const { setFilters } = useServicesStore()

async function applyFilters() {
  isRequesting.value = true
  await promiseTimeout(500)
  setFilters(filters.value)
  isRequesting.value = false
  open.value = false
}

async function clearFilters() {
  isRequesting.value = true
  await promiseTimeout(500)
  filters.value = {}
  setFilters({})
  isRequesting.value = false
  open.value = false
}
</script>
