"use strict";

let cats = [
    {
        name: "Люся",
        age: "1 год",
        color: "трехцветная",
        img: "https://picsum.photos/id/219/1000/1000"
    },
    {
        name: "Макс",
        age: 4,
        color: "серый",
        img: "https://picsum.photos/id/1074/1000/1000"
    },
    {
        name: "Василий",
        age: 1,
        color: "трехцветный",
        img: "https://picsum.photos/id/593/1000/1000"
    }
];

let app = Vue.createApp({
    data(){
        return {
            cats,
        }
    }
});

app.mount("#app");