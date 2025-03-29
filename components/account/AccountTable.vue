<template>
  <div class="overflow-x-auto">
    <table class="w-full border-1 border-gray-300 border-separate">
      <thead class="uppercase">
        <th v-for="heading in props.headings" class="px-6 py-3 bg-gray-300">
          {{ heading }}
        </th>
      </thead>

      <tbody>
        <tr v-for="row in props.rows" :key="row.id">
          <td v-for="(value, key) in row" :key="key" class="px-6 py-4">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  headings: string[]
  rows: any[]
}>()
</script>
