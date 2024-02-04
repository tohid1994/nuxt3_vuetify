import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3PersianDatetimePicker, {
    name: 'CustomDatePicker',
    props: {
      inputFormat: 'YYYY-MM-DD HH:mm',
      format: 'jYYYY-jMM-jDD', // jYYYY-jMM-jDD HH:mm
      editable: false,
      inputClass: 'form-control my-custom-class-name',
      placeholder: 'انتخاب کنید',
      altFormat: 'jYYYY-jMM-jDD',
      color: '#FF9966',
      autoSubmit: true,
      clearable: true,
      displayFormat: 'jYYYY-jMM-jDD',
      simple : true
      //...
      //... And whatever you want to set as default.
      //...
    },
  });
  
});
