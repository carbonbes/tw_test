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
      <UIButton
        class="flex items-center justify-center gap-2"
        @click="filtersDialogIsOpen = true"
      >
        <Icon name="tabler:adjustments-horizontal" />
        Фильтр
      </UIButton>

      <Table :headings="headings" :rows="filteredServices" />
    </Flex>
  </div>

  <Dialog v-model:open="filtersDialogIsOpen" class="w-full max-w-[500px]">
    <Flex col class="gap-6">
      <Heading :level="2">Фильтры</Heading>

      <Flex col class="gap-4">
        <UIInput placeholder="ID" type="number" v-model="filters.id" />
        <UIInput placeholder="Статус" v-model="filters.status" />
        <UIInput placeholder="Имя" v-model="filters.name" />
        <UIInput placeholder="Дата создания" v-model="filters.date_created" />
        <UIInput
          placeholder="Цена"
          type="number"
          v-model="filters.price"
          class="flex-[1]"
        />
      </Flex>

      <UIButton @click="filtersDialogIsOpen = false">Применить</UIButton>
    </Flex>
  </Dialog>
</template>

<script lang="ts" setup>
import Flex from '~/components/shared/Flex.vue'
import UIButton from '~/components/shared/UIButton.vue'
import Table from '~/components/Table.vue'
import Dialog from '~/components/shared/Dialog.vue'
import Heading from '~/components/shared/Heading.vue'
import UIInput from '~/components/shared/UIInput.vue'

definePageMeta({
  middleware: ['auth'],
})

const filtersDialogIsOpen = ref(false)

const { logout } = useUserStore()
const { filters, filteredServices } = storeToRefs(useServicesStore())

async function handleLogout() {
  try {
    await logout()
    await navigateTo('/login')
  } catch (error) {}
}

const headings = ['ID', 'Статус', 'Дата создания', 'Название', 'Цена']
</script>

<style lang="sass">
:root
  --header-height: 60px
</style>
