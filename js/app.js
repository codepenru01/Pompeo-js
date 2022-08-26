"use strict";

console.log("Foydalanuvchi ismi:", prompt("Ismingizni kiriting ?"));
console.log("Foydalanuvchi familyasi:", prompt("Familyangizni kiriting ?"));
console.log("Foydalanuvchi yoshi:", prompt("Yoshingizni kiriting ?"));
console.log("Foydalanuvchi manzili:", prompt("Manzilingizni kiriting ?"));
console.log("Foydalanuvchi raqami:", prompt("Raqamingizni kiriting ?"));

let humburger = document.querySelector(".humburger");
let navMenu = document.querySelector(".navbar");

humburger.addEventListener("click", function() {
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

let inMode = document.querySelector(".hero__btn");
let inBody = document.querySelector("body");

inMode.addEventListener("click", function() {
    inBody.classList.toggle("dark");
})