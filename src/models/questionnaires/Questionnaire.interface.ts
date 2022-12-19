export interface QuestionnaireInterface {
  id : number,
  items: {
    uuid: string,
    response: string | number | boolean | null
  }[]
}
