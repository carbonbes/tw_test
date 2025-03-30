<template>
  <DatePickerRoot
    locale="ru"
    :model-value="calendarDate"
    @update:model-value="handleUpdate"
  >
    <DatePickerTrigger asChild>
      <slot />
    </DatePickerTrigger>

    <DatePickerContent
      :alignOffset="24"
      :sideOffset="5"
      :collisionPadding="24"
      class="bg-white ring-1 ring-gray-300/50 shadow-lg rounded-xl z-[999]"
    >
      <DatePickerArrow class="fill-white stroke-gray-300/50" />

      <DatePickerCalendar v-slot="{ weekDays, grid }" class="p-4 flex flex-col gap-4">
        <DatePickerHeader class="flex items-center justify-between">
          <DatePickerPrev asChild>
            <Flex tag="button" center class="p-1.5 rounded-full hover:bg-gray-200">
              <Icon name="tabler:chevron-left" class="!size-4" />
            </Flex>
          </DatePickerPrev>

          <DatePickerHeading class="font-medium first-letter:uppercase" />

          <DatePickerNext asChild>
            <Flex tag="button" center class="p-1.5 rounded-full hover:bg-gray-200">
              <Icon name="tabler:chevron-right" class="!size-4" />
            </Flex>
          </DatePickerNext>
        </DatePickerHeader>

        <div
          class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <DatePickerGrid
            v-for="month in grid"
            :key="month.value.toString()"
            class="w-full border-collapse select-none space-y-1"
          >
            <DatePickerGridHead>
              <DatePickerGridRow class="mb-1 flex w-full justify-between">
                <DatePickerHeadCell
                  v-for="day in weekDays"
                  :key="day"
                  class="w-8 rounded-md text-xs"
                >
                  {{ day }}
                </DatePickerHeadCell>
              </DatePickerGridRow>
            </DatePickerGridHead>

            <DatePickerGridBody>
              <DatePickerGridRow
                v-for="(weekDates, index) in month.rows"
                :key="`weekDate-${index}`"
                class="flex w-full"
              >
                <DatePickerCell
                  v-for="weekDate in weekDates"
                  :key="weekDate.toString()"
                  :date="weekDate"
                >
                  <DatePickerClose asChild>
                    <DatePickerCellTrigger
                      :day="weekDate"
                      :month="month.value"
                      class="relative flex items-center justify-center whitespace-nowrap rounded-full border-2 border-transparent bg-transparent text-sm font-normal text-black w-8 h-8 outline-none hover:border-blue-500 data-[selected]:bg-blue-500 data-[selected]:font-medium data-[outside-view]:text-black/30 data-[selected]:text-white data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:size-1 before:bg-white data-[today]:text-blue-500 data-[today]:data-[selected]:text-white data-[today]:before:block data-[today]:before:bg-blue-500 data-[today]:before:-translate-y-[2px] data-[selected]:before:!bg-white"
                    />
                  </DatePickerClose>
                </DatePickerCell>
              </DatePickerGridRow>
            </DatePickerGridBody>
          </DatePickerGrid>
        </div>

        <DatePickerClose asChild>
          <UIButton
            variant="secondary"
            size="s"
            class="w-full"
          >
            Закрыть
          </UIButton>
        </DatePickerClose>
      </DatePickerCalendar>
    </DatePickerContent>
  </DatePickerRoot>
</template>

<script lang="ts" setup>
import Flex from '~/components/shared/Flex.vue'
import UIButton from '~/components/shared/UIButton.vue'
import { CalendarDate, type DateValue } from '@internationalized/date'

const props = defineProps<{
  date: string | undefined
}>()

const emits = defineEmits<{
  update: [string | undefined]
}>()

function handleUpdate(date: DateValue | undefined) {
  if (!date) {
    emits('update', undefined)

    return
  }

  const { day, month, year } = date

  emits('update', `${day}.${formatMonth(month)}.${year}`)
}

const calendarDate = computed(() => {
  if (!props.date) return

  const [day, month, year] = props.date.split('.')

  return new CalendarDate(+year, +month, +day)
})
</script>
