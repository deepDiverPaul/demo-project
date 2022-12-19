import { shallowMount } from '@vue/test-utils';
import QuestionListResponseComponent from '@/components/questionnaires/questionnaire-answer-children/item-children/question-children/QuestionListResponse.component.vue';
import { FormQuestionTemplate } from '@/models/forms/checklist/items/templates/Question.template';

describe('questionnaire QuestionListResponse.component.vue', () => {
  it('renders props.msg when passed', () => {
    const question = FormQuestionTemplate();
    const wrapper = shallowMount(QuestionListResponseComponent, {
      question,
      resonse: 1,
    });
    expect(wrapper.get('button').text()).toMatch('yes');
  });
});
