<template>
  <div class="block box">
    <div class="head">
      <div class="is-size-5">{{ model.checklist.checklist_title }}</div>
      <div class="actions">
        <router-link :to="{ name: 'form-edit', params: { id: model.id }}">
          <EditIcon />
        </router-link>
      </div>
    </div>
    <div class="body is-size-7">
      {{ model.checklist.checklist_description }}
    </div>
  </div>
</template>

<script lang="ts" setup>

import { FormInterface } from '@/models/forms/Form.interface';
import EditIcon from '@/components/icons/EditIcon.component.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  model: FormInterface
}>();
</script>

<style lang="scss" scoped>
.box {
  .head {
    @apply flex justify-between;
    .actions {
      a {
        svg {
          @apply h-6 w-6;
        }
      }
    }
  }
  .body {
    @apply mt-2;
  }
}
</style>
