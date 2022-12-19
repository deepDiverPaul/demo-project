<template>
  <div class="form-editor--page">
    <div class="is-flex is-align-items-center is-justify-content-space-between">
      <h4>{{title}}</h4>
      <div class="buttons are-small">
        <button class="button" @click="collapsed = !collapsed">
          {{ collapsed ? 'expand' : 'collapse' }}
        </button>
      </div>
    </div>
    <draggable
      class="dragArea mt-4"
      tag="div"
      :list="items"
      :group="{ name: 'form' }"
      @change="changed"
      handle=".handle"
      v-show="!collapsed"
      item-key="uuid">
      <template #item="{ element }">
        <ItemComponent
          :level="0"
          :item="element"/>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import ItemComponent from '@/components/forms/form-edit-children/Item.component.vue';
import { computed, ref } from 'vue';
import { PageInterface } from '@/models/forms/checklist/Page.interface';
import draggable from 'vuedraggable';
import { MutationType } from '@/models/store';
import { useFormsStore } from '@/store/forms';
import { FormVueDraggableEvent } from '@/store/forms/methods';

const formsStore = useFormsStore();

const props = defineProps<{
  page: PageInterface
}>();

const items = computed({
  get: () => props.page.items,
  set: (data) => {
    formsStore.action(MutationType.forms.updateItems, {
      uuid: props.page.uuid,
      items: data,
    });
  },
});

const changed = (action: FormVueDraggableEvent) => {
  formsStore.action(MutationType.forms.updateItems, {
    uuid: props.page.uuid,
    action,
  });
};

const collapsed = ref<boolean>(false);
const title = ref<string>(props.page.title);

</script>
