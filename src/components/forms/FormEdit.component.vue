<template>
  <div>
    <div class="is-flex is-align-items-center is-justify-content-space-between mb-4">
      <div class="is-size-4">
        Form Editor
        <span> - {{ form?.checklist?.checklist_title }}</span>
      </div>
      <div class="buttons are-small">
        <button class="button" @click="onFormSave">save form</button>
      </div>
    </div>
    <Loader v-if="loading || (form === null)" />
    <div v-else>
      <Toolbar />
      <p class="is-size-5 mb-4">{{ form.checklist?.checklist_description }}</p>
      <div class="form-editor">
        <PageComponent
          v-for="page in form.checklist?.form.items"
          :key="page.uuid"
          :page="page"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageComponent from '@/components/forms/form-edit-children/Page.component.vue';
import Loader from '@/components/common/Loader.component.vue';
import Toolbar from '@/components/forms/form-edit-children/Toolbar.component.vue';
import { MutationType } from '@/models/store';
import { FormInterface } from '@/models/forms/Form.interface';
import {
  computed, onMounted,
} from 'vue';
import { useFormsStore } from '@/store/forms';
import { useRoute } from 'vue-router';

const route = useRoute();

const formsStore = useFormsStore();

const loading = computed(() => formsStore.state.loading);

// const form: Ref< null | FormInterface > = ref< null | FormInterface >(null);
const form = computed< null | FormInterface >({
  get: () => formsStore.state.active,
  set: (data) => {
    console.log(data);
  },
});

const onFormSave = () => {
  formsStore.action(MutationType.forms.saveForm, {
    form: form.value,
  });
};

onMounted(() => {
  formsStore.action(MutationType.forms.loadForm, {
    id: route.params.id,
  });
});
</script>

<style lang="scss">

.form-editor--page,
.form-editor--item {
  @apply p-4 border-solid border border-gray-400 rounded;
  .form-editor--item-prop__drag {
    @apply hidden;
  }
}
.sortable-chosen:not(.sortable-ghost) {
  .form-editor--item-prop__drag {
    @apply block;
  }
  .form-editor--item-prop__static {
    @apply hidden;
  }
  & > .dragArea {}

  @apply bg-blue-100 w-60;
}

.dragArea {
  @apply mt-4;
  &:empty {
    @apply h-20 border-dashed border-gray-200 border rounded;
  }
}
</style>
