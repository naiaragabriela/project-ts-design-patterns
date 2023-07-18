import { AbstractMeal } from "./abstract-meal";

export class Rice extends AbstractMeal {}

const rice = new Rice("Arroz", 50);
console.log(rice);
