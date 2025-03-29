<template>
  <DatePickerRoot locale="ru">
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

      <DatePickerCalendar v-slot="{ weekDays, grid }" class="p-4">
        <DatePickerHeader class="flex items-center justify-between">
          <DatePickerPrev asChild>
            <Flex tag="button" center class="p-1.5 rounded-full hover:bg-gray-200">
              <Icon name="tabler:chevron-left" class="!size-4" />
            </Flex>
          </DatePickerPrev>

          <DatePickerHeading class="font-medium" />

          <DatePickerNext asChild>
            <Flex tag="button" center class="p-1.5 rounded-full hover:bg-gray-200">
              <Icon name="tabler:chevron-right" class="!size-4" />
            </Flex>
          </DatePickerNext>
        </DatePickerHeader>

        <div
          class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
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
                  class="w-8 rounded-md text-xs text-green8"
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
                  <DatePickerCellTrigger
                    :day="weekDate"
                    :month="month.value"
                    class="relative flex items-center justify-center whitespace-nowrap rounded-full border-2 border-transparent bg-transparent text-sm font-normal text-black w-8 h-8 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black hover:border-blue-500 data-[selected]:bg-blue-500 data-[selected]:font-medium data-[outside-view]:text-black/30 data-[selected]:text-white data-[unavailable]:pointer-events-none data-[unavailable]:text-black/30 data-[unavailable]:line-through before:absolute before:top-[5px] before:hidden before:rounded-full before:w-1 before:h-1 before:bg-white data-[today]:before:block data-[today]:before:bg-green9 data-[selected]:before:bg-white"
                  />
                </DatePickerCell>
              </DatePickerGridRow>
            </DatePickerGridBody>
          </DatePickerGrid>
        </div>
      </DatePickerCalendar>
    </DatePickerContent>
  </DatePickerRoot>
</template>

<script lang="ts" setup>
import Flex from '~/components/shared/Flex.vue'
</script>
