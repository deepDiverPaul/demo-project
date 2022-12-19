<template>
  <div>
    <div class="is-size-4 mb-4">Form List</div>
    <Loader v-show="loading" />
    <div v-show="!loading">
      <FormComponent v-for="form in forms"
        :key="form.id"
        :model="form" @select="onFormSelect" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Loader from '@/components/common/Loader.component.vue';
import FormComponent from './forms-list-children/Form.component.vue';
import { computed, onMounted } from 'vue';
import { FormInterface } from '@/models/forms/Form.interface';
import { MutationType } from '@/models/store';
import { useFormsStore } from '@/store/forms';

const formsStore = useFormsStore();

const onFormSelect = (form: FormInterface) => {
  formsStore.action(MutationType.forms.selectForm, {
    id: form.id,
  });
};

const forms = computed(() => formsStore.state.forms);
const loading = computed(() => formsStore.state.loading);

onMounted(() => {
  formsStore.action(MutationType.forms.loadForms);
});

</script>
