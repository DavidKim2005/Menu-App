import hamburgerImg from './assets/hamburger.png';
import pizzaImg from './assets/pizza.png';
import sodaImg from './assets/soda.png';
import riceImg from './assets/cooking.png';
import noodleImg from './assets/chinese-food.png';
import cakeImg from './assets/cheese.png';

type Menu = {
    name: string,
    price: number,
    image: string,
    count: number
};

export const PRODUCTS: Menu[] = [
    { name: 'Hamburger', price: 120, image: hamburgerImg, count: 0 },
    { name: 'Pizza', price: 400, image: pizzaImg, count: 0 },
    { name: 'Soda', price: 80, image: sodaImg, count: 0 },
    { name: 'Rice', price: 240, image: riceImg, count: 0 },
    { name: 'Noodle', price: 200, image: noodleImg, count: 0 },
    { name: 'CheeseCake', price: 150, image: cakeImg, count: 0 }
];