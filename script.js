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

// import debounce from 'https://cdn.jsdelivr.net/npm/lodash.debounce@4.0.8/+esm';

// const item = document.getElementById('box');

// const moveBox = debounce((e) => {
//   item.style.left = e.clientX + 'px';
//   item.style.top = e.clientY + 'px';
// }, 10);

// document.addEventListener('mousemove', moveBox);

// const input = document.getElementById('input');
// const addBtn = document.getElementById('addBtn');
// const list = document.getElementById('list');

// const STORAGE_KEY = 'favorites';

// function getFavorites() {
//   return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// }

// function saveFavorites(data) {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// }

// function render() {
//   const items = getFavorites();

//   list.innerHTML = '';

//   items.forEach((item, index) => {
//     const li = document.createElement('li');
//     li.textContent = item;

//     const btn = document.createElement('button');
//     btn.textContent = 'X';
//     btn.addEventListener('click', () => removeItem(index));

//     li.appendChild(btn);
//     list.appendChild(li);
//   });
// }

// function removeItem(index) {
//   const items = getFavorites();
//   items.splice(index, 1);

//   saveFavorites(items);
//   render();
// }

// addBtn.addEventListener('click', () => {
//   const value = input.value.trim();
//   if (!value) return;

//   const items = getFavorites();
//   items.push(value);

//   saveFavorites(items);
//   render();

//   input.value = '';
// });

// render();

// start.addEventListener('click', () => {
//   const delay = Number(time.value) * 1000;

//   setTimeout(() => {
//     text.textContent = `Після нажаття кнопки пройшло ${time.value} секунд`;
//   }, delay);
// });

// Створити таймер, який буде починати відлік з 10 секунд та зменшувати час кожну мілісекунду.
// При досягненні 5 секунд, таймер повинен змінювати колір фону сторінки на червоний.

// const timerBox = document.querySelector('.timer');

// let timerStart = 10000;

// const timer = setInterval(() => {
//   timerStart -= 1;
//   timerBox.textContent = timerStart/1000;
//   if(timerStart === 5000){
//     timerBox.style.backgroundColor = 'red';
//   }

//   if(timerStart === 0){
//   clearInterval(timer);
//   timerBox.textContent = 'Час вийшов';

// }
// }, 1);

// Реалізуйте годинник, який показує поточний час у форматі "години:хвилини:секунди".
//  Оновлюйте годинник кожну секунду без використання вбудованих функцій для отримання поточного часу.

// const clock = document.querySelector('.clock');

// const updateTime = () => {
//   const now = new Date();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();

//   hours = hours.toString().padStart(2, "0");
//   minutes = minutes.toString().padStart(2, "0");
//   seconds = seconds.toString().padStart(2, "0");

//   clock.textContent = `${hours}:${minutes}:${seconds}`;
// };

// setInterval(updateTime, 1000);

// Напишіть функцію, яка обчислює скільки днів залишилося до
// наступного Дня народження на основі заданої дати народження.

// function birthday(day, month){
//   const now = new Date();
//   const currentYear = now.getFullYear();

//   let nextBirthday = new Date(currentYear, month - 1, day);
//   if(nextBirthday < now){
//     nextBirthday = new Date(currentYear + 1, month - 1, day);
//   }

//   const diferentTime = nextBirthday - now;
//   const diferentDays = Math.ceil(diferentTime / (1000 * 3600 * 24 ));
//   return diferentDays
// }

// console.log(birthday(5, 6))

// const input = document.querySelector('.value');
// const save = document.querySelector('.save');

// const list = document.querySelector('.list');

// let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// const saveToStorage = () => {
//   localStorage.setItem('favorites', JSON.stringify(favorites));
// };

// const renderList = () => {
//   list.innerHTML = '';

//   favorites.forEach((item, index) => {
//     const li = document.createElement('li');
//     li.textContent = item;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = "x";
//     deleteBtn.onclick = () => removeItem(index);

//     li.appendChild(deleteBtn);
//     list.appendChild(li);
//   });
// }

// renderList()

// const addItem = () => {
//   const value = input.value.trim();
//   if(value === ''){return};
//   favorites.push(value);
//   saveToStorage()
//   renderList();

//   input.value = '';
// }

// function removeItem(index) {
//   favorites.splice(index, 1);
//   saveToStorage();
//   renderList();
// }

// save.addEventListener('click', addItem);

// const start = document.querySelector('#start');
// const time = document.querySelector('#time');
// const text = document.querySelector('#text');

// start.addEventListener('click', () => {
//   const delay = Number(time.value) * 1000;

//   setTimeout(() => {
//     text.textContent = `Після нажаття кнопки пройшло ${time.value} секунд`;
//   }, delay);
// });

// Налаштування профілю користувача
// Створити форму, де користувач може налаштувати свій “віртуальний профіль”, а всі зміни одразу відображаються на сторінці.
// 1. Вимоги до форми:
// Ім’я (text input)
// Вік (number input)
// Стать (radio buttons)
// -Чоловіча
// -Жіноча
// -Інше
// Інтереси (checkbox) (можна вибрати кілька)
// -Спорт
// -Музика
// -Ігри
// -Подорожі
// Улюблений колір (color input)
// -цей колір має змінювати фон профілю
// Рівень досвіду (range input) (від 0 до 100) відображати значення у %
// Мова інтерфейсу (select)
// -Українська
// -English
// -Deutsch

// 2. Завдання JavaScript:
// При натисканні кнопки “Зберегти”:
// зчитати всі значення з форми
// вивести їх у блок “Профіль користувача”
// Реалізувати:
// -зміна фону блоку через color input
// -оновлення значення range в реальному часі
// - зібрати всі вибрані чекбокси в список
// - визначити обраний radio

// const nameInp = document.getElementById('name');
// const ageInp = document.getElementById('age');
// const color = document.getElementById('color');
// const range = document.getElementById('range');
// const rangeValue = document.getElementById('rangeValue');
// const lang = document.getElementById('language');

// const save = document.getElementById('saveBtn');
// const profileOutput = document.getElementById('profileOutput');

// range.addEventListener('input', () => {
//   rangeValue.textContent = range.value+'%';
// })

// color.addEventListener('input', () => {
//   const colorVal = color.value;
//   profileOutput.style.backgroundColor = colorVal;
// })

// save.addEventListener('click', () => {
//   const name = nameInp.value;
//   const age = ageInp.value;

//   const gender = document.querySelector('input[name="gender"]:checked');
//   const genderValue = gender ? gender.value:'Не обрано';

//   const actives = document.querySelectorAll('input[type="checkbox"]:checked');
//   const activesArr = [];
//   actives.forEach(active => activesArr.push(active.value));

//   const language = lang.value;

//   if(name.trim() === ''){
//     alert("Ви не ввели ім'я");
//     return
//   }

//   if(age.trim() === ''){
//     alert("Ви не вказали вік");
//     return
//   }

//   if(!name || !age){
//     alert("введіть ім'я та вік");
//     return
//   }

//   profileOutput.innerHTML = `
//   <p>Ім'я: ${name}</p>
//   <p>Вік: ${age}</p>
//   <p>Стать: ${genderValue}</p>
//   <p>Хоббі:${activesArr.join(', ')}</p>
//   <p>Мова: ${language}</p>
//   <p>Рівень мови: ${range.value}</p>
//   `;

//   localStorage.setItem('profile', JSON.stringify({
//   name,
//   age,
//   genderValue,
//   activesArr,
//   language,
//   range: range.value,
//   color: color.value
// }));

// })

// window.addEventListener('DOMContentLoaded', () => {
//   const saved = JSON.parse(localStorage.getItem('profile'));
//   if(!saved) return;

//   nameInp.value = saved.name;
//   ageInp.value = saved.age;
//   lang.value = saved.language;
//   range.value = saved.range;
//   rangeValue.textContent = saved.range + '%';
//   profileOutput.style.backgroundColor = saved.color;

//   profileOutput.innerHTML = `
//     <p>Ім'я: ${saved.name}</p>
//     <p>Вік: ${saved.age}</p>
//     <p>Стать: ${saved.genderValue}</p>
//     <p>Хоббі: ${saved.activesArr.join(', ')}</p>
//     <p>Мова: ${saved.language}</p>
//     <p>Рівень мови: ${saved.range}%</p>
//   `;
// });

// 3. Додаткові ускладнення:
// Зберігати дані в localStorage, щоб після перезавантаження вони не зникали
// Якщо користувач нічого не ввів — показати повідомлення про помилку
// Додати кнопку “Скинути”

// Завдання JavaScript:
// При натисканні кнопки отримати:
// - обрану дату
// - назву завантаженого фото
// - назву файлу
// - чи відмічений чекбокс
// Якщо чекбокс не обраний - показати помилку
// Якщо все ок - вивести результат у блок:
// Дата: 2026-05-01
// Фото: avatar.png
// Файл: resume.pdf
// Статус: Підтверджено

// const dateInp = document.querySelector('.date');
// const imgInp = document.querySelector('.img');
// const fileInp = document.querySelector('.file');
// const checkInp = document.querySelector('.check');
// const saveBtn = document.querySelector('.save');
// const box = document.querySelector('.block')

// let checkState = false;
// let fileName = null;
// let imgName = null;

// fileInp.addEventListener('change', () => {
//   fileName = fileInp.files[0];
// });

// imgInp.addEventListener('change', () => {
//   imgName = imgInp.files[0];
// });

// checkInp.addEventListener('change', () => {
//   if(checkInp.checked){
//     checkState = true;
//   } else {
//     alert('Погодьтесь з правилами');
//   }
// });

// saveBtn.addEventListener('click', (e) => {
//   e.preventDefault()
//   box.innerHTML = `
//   <p>Дата: ${dateInp.value}</p>
//   <p>Назва фото: ${imgName.name}</p>
//   <p>Назва файлу: ${fileName.name}</p>
//   `
// })

// function numbers (arr){
//   return new Promise((resolve, reject) => {
//     const hasOdd = arr.some(num => num%2 !== 0);
//     if(hasOdd){
//       reject('Є непарні числа')
//     } else {
//       resolve('Непарних чисел немає')
//     }
//   })
// }

// numbers([2, 4, 6, 2, 8])
// .then(console.log)
// .catch(console.error);

// numbers([3, 4, 6, 2, 8])
// .then(console.log)
// .catch(console.error);

// Напишіть функцію, яка отримує масив об'єктів
// і повертає проміс, який виконується з масивом імен, відсортованих за алфавітом.

// const people = [
//     { name: "John", age: 25 },
//     { name: "Anna", age: 30 },
//     { name: "Peter", age: 40 },
//     { name: "Mary", age: 35 },
//   ];

//   function sort(people){
//     return new Promise((resolve, reject) => {
//       const peopleName = people.map(person => person.name)
//       .sort((a, b) => a.localeCompare(b));
//       resolve(peopleName);

//       if(!people){
//         reject('Данних немає');
//       }
//     })
//   }

//   sort(people)
//   .then(console.log)
//   .catch(console.error)

// // Напишіть функцію rejectWithError, яка приймає
// // повідомлення про помилку і повертає Promise, який відхиляється з вказаною помилкою.
// function rejectWithError (errorMessage){
//   return Promise.reject(errorMessage)
// }

// const errorMessage = 'Something went wrong';
// rejectWithError(errorMessage)
//   .catch((error) => {
//     console.error(error);
//    }) // Помилка "Something went wrong"

// // Використовуючи Promise.all, створіть Promise, який об'єднує результати з трьох інших Promise.

// const promise1 = Promise.resolve('Hello world');
// const promise2 = 3;
// const promise3 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('результат')
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3])
// .then(console.log)
// .catch(console.error)

// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('результат1')
//   }, 3001);
// });
// const promise2 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('результат2')
//   }, 3000);
// });

// Promise.race([promise1, promise2])
// .then(console.log)
// .catch(console.error)

// Напишіть функцію raceTimeout,
// яка приймає Promise і таймаут (у мілісекундах)
// і повертає Promise, який вирішується, якщо початковий
// Promise вирішується до закінчення таймауту, або відхиляється,
// якщо таймаут закінчується перед вирішенням початкового Promise.
// const fetchDataPromise = fetch("https://dog.ceo/api/breeds/image/random");
// const timeout = 5000;

// function raceTimeout(promise, timeout) {
//   const timeoutPromise = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("час вийшов"));
//     }, timeout);
//   });
//   return Promise.race([promise, timeoutPromise]);
// }

// raceTimeout(fetchDataPromise, timeout)
//   .then((data) => {
//     console.log(data); // Результат початкового Promise,
//     // якщо він вирішується до закінчення таймауту
//   })
//   .catch((error) => {
//     console.error(error);
//   }); // Помилка "Timeout", якщо таймаут
// // закінчився перед вирішенням початкового Promise

// Напишіть функцію firstSuccessful, яка приймає масив промісів і повертає новий проміс:
// - виконується (resolve) з результатом першого успішного промісу
// - якщо всі проміси відхилені (reject) — повертає помилку "Всі проміси завершились з помилкою"

// function firstSuccessful(promises) {
//     return Promise.any(promises)
//         .catch(() => {
//             throw new Error('Всі проміси завершились з помилкою');
//         });
// }

// const promise1 = Promise.reject('error 1');
// const promise2 = Promise.resolve('Hello world');
// const promise3 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('результат');
//     }, 3000);
// });

// firstSuccessful([promise1, promise2, promise3])
//     .then(result => {
//         console.log('Результат:', result);
//     })
//     .catch(error => {
//         console.error('Помилка:', error.message);
//     });

// const example1 = Promise.reject('err1');
// const example2 = Promise.reject('err2');

// firstSuccessful([example1, example2])
//     .then(result => {
//         console.log('Результат:', result);
//     })
//     .catch(error => {
//         console.error('Помилка:', error.message);
//     });

// https://dog.ceo/api/breeds/image/random

// Створіть просту HTML-сторінку з кнопкою та ділянкою для відображення результату запиту.

// async function fetchApi (){
//     // const breed = document.querySelector('.dog-breed').value.trim();
//     // let url = 'https://dog.ceo/api/breeds/image/random';
//     // if(breed !== ""){
//     //     url = `https://dog.ceo/api/breed/${breed}/images/random`;
//     // }
//     // fetch(url)
//     try{
//         const response = await fetch('https://dog.ceo/api/breeds/image/random');
//         const data = await response.json();
//         const imageUrl = data.message
//         const parts = imageUrl.split('/');
//         const breedName = parts[4];
//         document.querySelector('.dog-img').src=imageUrl;
//         document.querySelector('.dog-name').textContent=breedName;
//     }
//     catch(error){
//         document.querySelector('.dog-name').textContent='Error';
//         console.error(error)
//     }
// }

// const save = document.querySelector('.search-dog').addEventListener('click', fetchApi)

// function fetchWeather() {
//   const city = document.querySelector(".city").value.trim();
//   const apiKey = "5ec584e7cf36ca20d779b522aa3500d3";
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   if (city === "") {
//     alert("ви не ввели назву міста");
//     return;
//   }
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       let cityWeather = `
//             <h2>${data.name}</h2>
//             <p>Температура: ${data.main.temp}°C</p>
//             <p>Погода: ${data.weather[0].description}</p>
//             <p>Швидкість вітру: ${data.wind.speed}m/s</p>
//             <p>Вологість: ${data.main.humidity}%</p>
//         `;

//       const cityWeatherCard = document.querySelector(".weather-window");
//       cityWeatherCard.innerHTML = cityWeather;
//     })
//     .catch((error) => console.error(error));
// }

// document
//   .querySelector(".search-weather")
//   .addEventListener("click", fetchWeather);

let categoryList = [];
let productsList = [];
let keyWord = "";

function getCategories() {
  const categoriesBox = document.querySelector(".categories-box");
  fetch("https://dummyjson.com/products/category-list")
    .then((res) => res.json())
    .then((data) => {
      categoryList = data;

      let categoryBtns = `
    <div class="category-wrap">
      ${categoryList.map((category) => `<button class="category-btn">${category}</button>`).join("")}
    </div>
  `;

      categoriesBox.innerHTML = categoryBtns;

      const categoryButtons = document.querySelectorAll(".category-btn");

      categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          keyWord = btn.textContent;
          getProducts(keyWord)
        });
      });
    });
}
getCategories();


function getProducts (keyWord){
  const productsBox = document.querySelector('.products-box');
  const product = document.querySelector('.product');

  fetch(`https://dummyjson.com/products/category/${keyWord}`)
  .then(res => res.json())
  .then(data => {
    productsList = data.products;

    let productBtns = `
      <div class="product-wrap">
      ${productsList.map((product) => `<button class="product-btn">${product.title}</button>`).join("")}
    </div>
    `
    productsBox.innerHTML = productBtns;

    const productBtn = document.querySelectorAll('.product-btn');
    productBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        fetch(`https://dummyjson.com/products/search?q=${btn.textContent}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          let productHTML = `
            <img src="${data.products[0].images[0]}" alt="product">
            <h2>${data.products[0].title}</h2>
            <h3>${data.products[0].brand}</h3>
            <h2>${data.products[0].price}$</h2>`
          product.innerHTML = productHTML
        });
      })
    })
  })
}



















// https://dummyjson.com/recipes/search?q=Margherita
// https://dummyjson.com/recipes

// function getRecipes() {
//   const keyWord = document.querySelector(".key-word").value;
//   let recipes = [];

//   if (keyWord.trim() === "") {
//     fetch("https://dummyjson.com/recipes")
//       .then((res) => res.json())
//       .then((data) => (recipes = data.recipes));
//   } else {
//     fetch(`https://dummyjson.com/recipes/search?q=${keyWord}`)
//       .then((res) => res.json())
//       .then((data) => {
//         let recipe = `
//       <img src="" alt="recipe">
//       <h2></h2>
//       <p></p>
//       <p></p>
//       <p></p>
//       <p></p>
//       `;
//       });
//   }
// }

// getRecipes();
