<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
const { getMe } = useUserStore()

await useAsyncData('me', async () => {
  await getMe()

  return true
})
</script>
