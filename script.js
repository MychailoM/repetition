// const resturant = {
//     name: "Caffe",
//     cuisine: "Ukrainian",
//     address: "Lviv Zelena 30",
//     rating: 4,

//     change(newAddress, newRating){
//         this.address = newAddress;
//         this.rating = newRating;
//         console.log(resturant)
//     }
// }

// console.log(resturant.change( "Lutsk Miry 25", 4.5))

// // Працюємо з колекцією товарів в кошику:
// // Написати методи вказані нижче в коді
// // { name: '🍎', price: 50 }
// // { name: '🍇', price: 70 }
// // { name: '🍋', price: 60 }
// // { name: '🍓', price: 110 }

// const cart = {
//     items: [],
//     getItems() {
//         return this.items
//     },
//     add(product) {
//         const findProduct = this.items.find(item => item.name === product.name);
//         if(findProduct){
//             findProduct.quantity ++
//         } else {
//             this.items.push({...product, quantity: 1});
//         }
//     },
//     remove(productName) {
//         const findProduct = this.items.filter(item => item.name !== productName);
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         this.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
//     },
//     increaseQuantity(productName) {
//         const findProduct = this.items.find(item => item.name === productName);
//         if(findProduct){
//             findProduct.quantity ++
//         }
//     },
//     decreaseQuantity(productName) {
//         const findProduct = this.items.find(item => item.name === productName);
//         if(findProduct){
//             if(findProduct.quantity <= 0){
//                 this.remove(productName)
//             }
//             findProduct.quantity --
//         }
//     },
//   };

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍇', price: 70 });

// console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// cart.decreaseQuantity('🍇');

// console.log(cart.countTotalPrice());

// const user = {
//     name: "Bob",
//     age: 83
// }

// for(const key in user){
//     console.log('key -', key )
// }

// const movies = [
//   {
//     title: "Inception",
//     director: "Christopher Nolan",
//     year: 2010,
//     genre: "Sci-Fi",
//   },
//   { title: "Titanic", director: "James Cameron", year: 1997, genre: "Drama" },
//   {
//     title: "Interstellar",
//     director: "Christopher Nolan",
//     year: 2014,
//     genre: "Sci-Fi",
//   },
//   {
//     title: "The Dark Knight",
//     director: "Christopher Nolan",
//     year: 2008,
//     genre: "Action",
//   },
//   {
//     title: "The Notebook",
//     director: "Nick Cassavetes",
//     year: 2004,
//     genre: "Drama",
//   },
// ];

// const movie = {
//     title: "Inception",
//     director: "Christopher Nolan",
//     year: 2010,
//     genre: "Sci-Fi",
//   }

//   const one = Object.keys(movie);
//   console.log(one)

// const filterMovies = (movies, genre) => {
//     const filteredMovies = movies.filter(movie => movie.genre === genre);
//     return [...filteredMovies]
// }

// const dramaMovie = filterMovies(movies, 'Drama')
// console.log(dramaMovie)

// const movie = {
//     title: "Inception",
//     director: "Christopher Nolan",
//     year: 2010,
//     genre: "Sci-Fi",
//   }

//   const {title = 'name', director, year, genre} = movie;

// const arr = [4, 5, 6];
// const [numOne, numTwo, numThree] = arr;



// Створіть клас Calculator, який буде мати наступні методи: add(), subtract(), multiply(), divide(). 
// Кожен метод приймає два аргументи - числа, які необхідно обробити. Результатом кожного методу має бути результат відповідної 
// математичної операції.
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); // На нуль ділити не можна

// class Calculator {
//     add(a, b){return a + b};
//     subtract(a, b){return a - b};
//     multiply(a, b){return a * b};
//     divide(a, b){
//         if(b === 0){
//             return 'Error'
//         } return a / b
//     }
// }

// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); // На нуль ділити не можна


// Створіть клас Animal, який має властивість name. Створіть клас Dog, який наслідується від Animal і має властивість breed.
//  Створіть об'єкт myDog класу Dog з ім'ям Buddy і породою Labrador Retriever.
// const myDog = new Dog('Buddy', 'Labrador Retriever');
// console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }

// class Animal {
//     constructor(name){
//         this.name = name
//     }
// }

// class Dog extends Animal{
//     constructor(breed, name){
//         super(name)
//         this.breed = breed
//     }
// }

// const myDog = new Dog('Jessy', 'Labrador Retriever');
// console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }


// class Shape{
//     constructor(color){
//         this.color = color
//     }

//     draw(){}
// }

// class Circle extends Shape{
//     constructor(color, radius){
//         super(color)
//         this.radius = radius
//         }
//     draw(){
//         console.log(`Drawing a circle with radius ${this.radius}`)
//     }
// }

// const myCircle = new Circle('red', 5);
// myCircle.draw(); // Drawing a circle with radius 5
// console.log(myCircle.color); // "red"


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Employee extends Person{
//     constructor(name, age, position){
//         super(name, age)
//         this.position = position
//     }

//     getInfo(){
//         return `${this.name} is a ${this.position} and is ${this.age} years old`
//     }
// }

// const john = new Employee("John", 32, "programmer");
// console.log(john.getInfo()); // "John is a programmer and is 32 years old"




// // Створіть форму з двома текстовими полями та кнопкою "Додати", 
// // яка додає новий елемент li в ul, що містить текст, який введено в першому полі.


// const inp = document.getElementById('inp-one');
// const btn = document.getElementById('btn');
// const list = document.getElementById('list');

// // btn.addEventListener('click', () => {
// //     list.innerHTML = `<li> ${inp.value} </li>`;
// //     inp.value = '';
// // })

// btn.addEventListener('click', () => {
//     const li = document.createElement('li');
//     list.appendChild(li);
    
//     li.innerHTML = `
//     <p> ${inp.value} </p>
//     <p> ${inp.value} </p>
//     `;
//     inp.value = '';
// })




// // В HTML є пустий список ul#ingredients.

// // 
// // В JS є масив рядків.

// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];

// const list = document.getElementById('ingredients');

// const fragment = document.createDocumentFragment();
// ingredients.map(ingredient => {
//     const li = document.createElement('li');
//     li.textContent = ingredient;
//     fragment.appendChild(li);
// });

// list.appendChild(fragment);

// // Напиши скрипт, який для кожного елемента масиву
// //  ingredients створить окремий li, після чого вставить всі li за одну 
// //  операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().





// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// const decrement = document.querySelector('[data-action="decrement"]');
// const increment = document.querySelector('[data-action="increment"]');
// const span = document.getElementById('value');

// let count = 0;

// decrement.addEventListener('click', () => {
//     count -= 1;
//     span.textContent = count;
// });

// increment.addEventListener('click', () => {
//     count += 1;
//     span.textContent = count;
// });




// Змінити фон елементу з id="box" на жовтий, 
// якщо користувач натискає клавішу y, та на зелений, якщо 
// користувач натискає клавішу g, під час події keydown.

// const box = document.getElementById('box');

// document.addEventListener('keydown', (e) => {
//     if(e.key === 'y'){
//         box.style.backgroundColor = 'yellow';
//     }else if(e.key === 'g'){
//         box.style.backgroundColor = 'green';
//     }
// })



// Перемістити елемент з id="box" наліво, якщо користувач натискає стрілку вліво,
//  та направо, якщо користувач натискає стрілку вправо, під час події keydown.
// <div id="box"></div>
// #box {
//   width: 50px;
//   height: 50px;
//   background-color: red;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// }


// let position = 50;

// const box = document.getElementById('box');

// document.addEventListener('keydown', (e) => {
//     if(e.key === 'ArrowLeft'){
//         position -= 1;
//     } else if(e.key === 'ArrowRight'){
//         position += 1;
//     }

//     box.style.left = position + '%'
// })



// document.addEventListener('keydown', (e) => {
//     console.log(e.code)
// })


// const input = document.getElementById('input');
// const message = document.getElementById('message');

// document.addEventListener('keypress', (e) => {
//     message.textContent = input.value
// })


// Написати програму яка буде за допомогою миші рухати блок на екрані.
//  Цей код повинен прослуховати подію mousemove на документі та рухати блок на відстань, 
//  яку миша змістилася відносно центру блоку. Якщо вам потрібно рухати саме центр блоку, 
//  ви можете додати до відстані половину ширини та висоти блоку. Можна використати код та підказки нижче 👇

// const block = document.querySelector('.block');

// // Додаємо обробник події 'mousemove' на документ
// document.addEventListener('mousemove', e => {
//    // Отримуємо координати миші на екрані
//   const y = e.clientY;
//   const x = e.clientX; 
//   // Отримуємо координати центра блоку
//   const rect = block.getBoundingClientRect();
//   const centrX = rect.left + rect.width/2;
//   const centrY = rect.top + rect.height/2;
//   // Обчислюємо відстань від миші до центру блоку
//   const deltaX = x - centrX;
//   const deltaY = y - centrY;
//   // Рухаємо блок на відстань, яку миша змістилася відносно центру блоку
//   block.style.left = block.offsetLeft + deltaX + 'px';
//   block.style.top = block.offsetTop + deltaY + 'px';
//  });




// Створи веб-сторінку, де:
// Користувач клікає в будь-яке місце сторінки.
// При кожному кліку:
// Виводяться координати кліку (X і Y).
// На місці кліку з’являється маленька точка (div).

// info
// const p = document.querySelector('.info');

// document.addEventListener('click', (e) => {
//   const x = e.clientX;
//   const y = e.clientY;
//   p.textContent = `${x}:${y}`
//   const dot = document.createElement('div');
//   dot.classList.add('dot');
//   dot.style.left = x + 'px';
//   dot.style.top = y + 'px';
//   document.body.appendChild(dot);
// })


// Написати програму яка буде робити підсвічування активного елементу навігації 
// при кліці. Коли користувач натискає на кнопку вона повинна змінювати колір, 
// якщо при цьому вже була обрана інша, вона повинна повернутися в початковий стан. 
// Тобто активна (підсвічена) кнопка повинна бути лише одна.
// index.html:


// const list = document.querySelector('.js-nav');
// list.addEventListener('click', (e)=>{
//   e.preventDefault();
//   if(e.target.classList.contains('btn')){
//     const active = list.querySelector('.active');
//     if(active){
//       active.classList.remove('active');
//     } e.target.classList.add('active');
//   }
// })

// Створіть об'єкт JSON з інформацією про книгу. Книга повинна мати наступні поля:
// назва книги автор книги рік видання жанр 
// Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().




// const book = `[
//   {
//     "name": "Кобзар",
//     "author": "Т.Шевченко",
//     "year": 1840,
//     "genre": "Поезія"
//   },
//   {
//     "name": "Портрет Доріана Грея",
//     "author": "О.Уальд",
//     "year": 1890,
//     "genre": "Роман"
//   }  
// ]`;

// const object = {
//     name: "Свідок обвинувачення",
//     author: "Агата Крісті",
//     year: 1948,
//     genre: "Оповідання"
//   }

// const string = JSON.stringify(object);
// const parse = JSON.parse(book);

// parse.push(object)

// const update = JSON.stringify(parse)

// // string.join(parse)

// console.log(update)
// console.log(string)



// const dishes = `[
// {
// "name": "pasta",
// "describe": "delicious",
// "price": 321
// },
// {
// "name": "pizza",
// "descripe": "perfecto mama la paperoni",
// "price": 123
// }
// ]`;

// const parse = JSON.parse(dishes);
// console.log(parse);



// const btn = document.querySelector('.save');
// const val = document.querySelector('.val');


// btn.addEventListener('click', () => {
//   localStorage.setItem("text", val.value);
// })


// const form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const user = {
//     name: document.querySelector('.name').value,
//     email: document.querySelector('.email').value,
//     pass: document.querySelector('.pass').value,
//   }
//   localStorage.setItem('user', JSON.stringify(user));
//   form.reset()
// })



// Задача: Потрібно забезпечити плавне переміщення 
// об'єкту при русі мишкою. Рішення: Використовуйте 
// метод debounce з бібліотеки lodash. Встановіть час 
// затримки в мілісекундах, наприклад 100мс, і передайте 
// функцію, яка буде виконуватися при переміщенні мишкою

import debounce from 'https://cdn.jsdelivr.net/npm/lodash.debounce@4.0.8/+esm';

const item = document.getElementById('box');

const moveBox = debounce((e) => {
  item.style.left = e.clientX + 'px';
  item.style.top = e.clientY + 'px';
}, 10);

document.addEventListener('mousemove', moveBox);


const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');

const STORAGE_KEY = 'favorites';

function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveFavorites(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function render() {
  const items = getFavorites();

  list.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;

    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.addEventListener('click', () => removeItem(index));

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function removeItem(index) {
  const items = getFavorites();
  items.splice(index, 1);

  saveFavorites(items);
  render();
}

addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) return;

  const items = getFavorites();
  items.push(value);

  saveFavorites(items);
  render();

  input.value = '';
});

render();


start.addEventListener('click', () => {
  const delay = Number(time.value) * 1000;

  setTimeout(() => {
    text.textContent = `Після нажаття кнопки пройшло ${time.value} секунд`;
  }, delay);
});