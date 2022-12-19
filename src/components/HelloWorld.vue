<template>
  <div class="content">
    <h1>Demo-App</h1>
    <h3>Form builder</h3>
    <ul>
      <li>
        <router-link :to="{name: 'forms-list'}">
          Example for form list
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'form-edit', params: {id: 12345}}">
          Example for form editing
        </router-link>
      </li>
    </ul>
    <h3>Form conduction</h3>
    <ul>
      <li>
        <router-link :to="{name: 'questionnaire-answer', params: {id: 12345}}">
          Example for form conduction
        </router-link>
      </li>
    </ul>
  </div>
</template>
