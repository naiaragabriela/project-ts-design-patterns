import { MainDishBuilder } from "./class/main-dish-builder";
import { MealBox } from "./class/meal-box";
import { Beans } from "./class/meals";
import { Rice } from "./class/rice";
import { VeganDishBuilder } from "./class/vegan-dish-builder";

const rice = new Rice("Arroz", 5);
const beans = new Beans("Feijão", 5);
const mealBox = new MealBox();
mealBox.add(rice, beans);
console.log(mealBox);
console.log(mealBox.getPrice());

console.log("**************************");

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getMeal().getPrice());

mainDishBuilder.reset();

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
