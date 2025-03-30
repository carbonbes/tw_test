<template>
  <div class="pt-[calc(var(--header-height)+1rem)] p-4 h-full">
    <Flex
      tag="header"
      class="fixed top-0 left-0 px-4 py-2 w-full h-[var(--header-height)] bg-white shadow-sm z-[1]"
    >
      <UIButton class="ml-auto flex items-center gap-2" @click="handleLogout">
        <Icon name="tabler:door-exit" />
        Выйти
      </UIButton>
    </Flex>

    <Flex col class="gap-6">
      <div class="relative md:w-[fit-content]">
        <UIButton
          class="w-full flex items-center justify-center gap-2"
          @click="filtersDialogIsOpen = true"
        >
          <Icon name="tabler:adjustments-horizontal" />
          Фильтр
        </UIButton>

        <div
          v-if="!isEmptyObject(filters)"
          class="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 size-4 bg-red-500 rounded-full"
        />
      </div>

      <AccountTable
        :headings="['ID', 'Статус', 'Дата создания', 'Название', 'Цена']"
        :rows="services"
      />
    </Flex>
  </div>

  <AccountFiltersDialog v-model:open="filtersDialogIsOpen" />
</template>

<script lang="ts" setup>
import Flex from '~/components/shared/Flex.vue'
import UIButton from '~/components/shared/UIButton.vue'
import AccountTable from '~/components/account/AccountTable.vue'
import AccountFiltersDialog from '~/components/account/filters-dialog/FiltersDialog.vue'

definePageMeta({
  middleware: ['auth'],
})

const filtersDialogIsOpen = ref(false)

const { logout } = useUserStore()
const { services, filters } = storeToRefs(useServicesStore())

async function handleLogout() {
  try {
    await logout()
    await navigateTo('/login')
  } catch (error) {}
}
</script>

<style lang="sass">
:root
  --header-height: 60px
</style>
