// import React from "react";

// challenge1

const num = [1,2,3,4,5];
console.log(num);
const newarr=num.map((items,array)=>{
    return array = items*items;
})
console.log(newarr);

// challenge2

const names = ["alice","bob","mary","njeri"];

const newarr2 = names.map((name)=>{
const first = name[0].toUpperCase();
const rest = name.slice(1).toLowerCase();
    return first+ rest;
})

console.log(newarr2);

const pokemon = ["john","copia","sofia","mary"];
const newarr3 = pokemon.map((nam)=>{
return `<p>${nam}</p>`;
})
console.log(newarr3);