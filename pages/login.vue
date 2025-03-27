<template>
  <Flex col center class="h-full">
    <Flex col class="w-full max-w-[450px] gap-4">
      <Heading :level="2" class="text-center">Авторизация</Heading>

      <UIInput
        placeholder="Логин"
        type="email"
        v-model.trim="formData.login"
        autofocus
      />

      <UIInput
        placeholder="Пароль"
        type="password"
        v-model.trim="formData.password"
      />

      <UIButton :disabled="formDataIsEmpty">Войти</UIButton>
    </Flex>
  </Flex>
</template>

<script lang="ts" setup>
import Flex from '~/components/shared/Flex.vue'
import Heading from '~/components/shared/Heading.vue'
import UIInput from '~/components/shared/UIInput.vue'
import UIButton from '~/components/shared/UIButton.vue'

const formData = reactive({
  login: '',
  password: '',
})

const formDataIsEmpty = computed(() => !(formData.login && formData.password))
</script>
