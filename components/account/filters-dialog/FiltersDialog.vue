<template>
  <Dialog v-model:open="open" class="w-full max-w-[500px] max-[500px]:rounded-none">
    <FiltersDialogContent>
      <FiltersDialogHeading>
        Фильтры
      </FiltersDialogHeading>

      <FiltersDialogList>
        <FiltersDialogListItem>
          <FiltersDialogListItemHeading>
            ID
          </FiltersDialogListItemHeading>

          <UIInput
            type="number"
            v-model="filters.id"
            :disabled="isRequesting"
          />
        </FiltersDialogListItem>

        <FiltersDialogListItem>
          <FiltersDialogListItemHeading>
            Статус
          </FiltersDialogListItemHeading>

          <UIInput
            v-model="filters.status"
            :disabled="isRequesting"
          />
        </FiltersDialogListItem>

        <FiltersDialogListItem>
          <FiltersDialogListItemHeading>
            Дата создания
          </FiltersDialogListItemHeading>

          <FiltersDialogListItemSub>
            <DateField v-model="filters.date_created" class="w-full" />

            <DatePicker v-model="filters.date_created">
              <UIButton
                variant="secondary"
                class="flex items-center justify-center"
                :disabled="isRequesting"
              >
                <Icon name="tabler:calendar" class="!size-5" />
              </UIButton>
            </DatePicker>
          </FiltersDialogListItemSub>
        </FiltersDialogListItem>

        <FiltersDialogListItem>
          <FiltersDialogListItemHeading>
            Имя
          </FiltersDialogListItemHeading>

          <UIInput
            v-model="filters.name"
            :disabled="isRequesting"
          />
        </FiltersDialogListItem>

        <FiltersDialogListItem>
          <FiltersDialogListItemHeading>
            Цена
          </FiltersDialogListItemHeading>

          <FiltersDialogListItemSub>
            <UIInput
              placeholder="От"
              type="number"
              v-model="filters.minPrice"
              class="w-full"
              :disabled="isRequesting"
            />

            <UIInput
              placeholder="До"
              type="number"
              v-model="filters.maxPrice"
              class="w-full"
              :disabled="isRequesting"
            />
          </FiltersDialogListItemSub>
        </FiltersDialogListItem>
      </FiltersDialogList>

      <FiltersDialogFooter>
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
      </FiltersDialogFooter>
    </FiltersDialogContent>
  </Dialog>
</template>

<script lang="ts" setup>
import UIButton from '~/components/shared/UIButton.vue'
import Dialog from '~/components/shared/Dialog.vue'
import UIInput from '~/components/shared/UIInput.vue'
import DatePicker from '~/components/shared/DatePicker.vue'
import DateField from '~/components/shared/DateField.vue'
import { promiseTimeout } from '@vueuse/core'
import FiltersDialogList from '~/components/account/filters-dialog/FiltersDialogList.vue'
import FiltersDialogListItem from '~/components/account/filters-dialog/FiltersDialogListItem.vue'
import FiltersDialogListItemHeading from '~/components/account/filters-dialog/FiltersDialogListItemHeading.vue'
import FiltersDialogHeading from '~/components/account/filters-dialog/FiltersDialogHeading.vue'
import FiltersDialogContent from '~/components/account/filters-dialog/FiltersDialogContent.vue'
import FiltersDialogFooter from '~/components/account/filters-dialog/FiltersDialogFooter.vue'
import FiltersDialogListItemSub from '~/components/account/filters-dialog/FiltersDialogListItemSub.vue'

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
  filters.value = {}
  setFilters({})
}
</script>
