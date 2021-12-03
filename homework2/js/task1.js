"use strict";

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 0
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

let app = Vue.createApp({
    data(){
        return {
            goods,
            sortType: "title",
        }
    },
    computed: {
        sortedGoods(){
            if (this.sortType === "title")
                return this.goods.sort(
                    (a, b) => {return a.title.localeCompare(b.title)}
                )
            else return this.goods.sort(
                (a, b) => {return (a[this.sortType] - b[this.sortType])}
                )
        },
    },
    methods: {
        sortByTitle(){
            this.sortType = "title";
        },
        sortByPrice(){
            this.sortType = "price";
        },
        sortByCount(){
            this.sortType = "count";
        },
    }
});

app.mount("#app");