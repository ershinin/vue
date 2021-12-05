"use strict";

let services =  [
    {
        title: "Женская стрижка на длинные волосы",
        price: 2000
    },
    {
        title: "Стрижка челки",
        price: 300
    },
    {
        title: "Детская стрижка (до 7 лет)",
        price: 700
    },
    {
        title: "Мужская стрижка",
        price: 1000
    },
    {
        title: "Коррекция бороды",
        price: 1200
    },
    {
        title: "Тонирование мужских волос",
        price: 1500
    },
    {
        title: "Окрашивание волос",
        price: 5000
    },
    {
        title: "Женский маникюр",
        price: 1500
    },
    {
        title: "Мужской маникюр",
        price: 1700
    },
    {
        title: "Педикюр",
        price: 2500
    },
    {
        title: "Покрытие гель-лаком",
        price: 1500
    }
];

let app = Vue.createApp({
    data(){
        return {
            services,
            selectedServices: [], // простой массив, хранящий индексы услуг из services
        }
    },
    computed: {
        finalPrice(){
            let result = 0;
            for (let service of this.selectedServices) {
                result += this.services[service].price
            }
            return result;
        }
    },
    methods: {

    },

});

app.mount("#app");