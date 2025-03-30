<template>
  <Flex col center class="p-4 h-full">
    <Flex col class="p-8 w-full max-w-[450px] gap-4 bg-white rounded-xl">
      <Heading :level="2" class="text-center">Идентификация</Heading>

      <UIInput
        placeholder="Логин"
        type="email"
        v-model.trim="formData.login"
        :disabled="isRequesting"
        autofocus
      />

      <UIInput
        placeholder="Пароль"
        type="password"
        :disabled="isRequesting"
        v-model.trim="formData.password"
      />

      <UIButton :disabled="formDataIsEmpty || isRequesting" @click="login">
        Войти
      </UIButton>
    </Flex>
  </Flex>
</template>

<script lang="ts" setup>
import Flex from '~/components/shared/Flex.vue'
import Heading from '~/components/shared/Heading.vue'
import UIInput from '~/components/shared/UIInput.vue'
import UIButton from '~/components/shared/UIButton.vue'
import { promiseTimeout } from '@vueuse/core'
import type { User } from '~/utils/users'

const formData = reactive({
  login: '',
  password: '',
})

const isRequesting = ref(false)

const formDataIsEmpty = computed(() => !(formData.login && formData.password))

const { $api } = useNuxtApp()
const { errorToastify } = useToasts()
const { setUser } = useUserStore()

async function login() {
  try {
    isRequesting.value = true

    await promiseTimeout(500)
    const data = await $api.login(formData)
    setUser(data as User)

    await navigateTo('/account')
  } catch (error: any) {
    errorToastify({
      title: 'Ошибка идентификации',
      text: error.data.message,
    })
  } finally {
    isRequesting.value = false
  }
}
</script>
