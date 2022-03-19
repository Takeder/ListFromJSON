// По клику на картинку, она менялась на другую, а при повторном клике менялась обратно на первую

// 1 вариант

let value = document.querySelector('.image');
let oldValue = value.src;
let newValue = 'Img/Cats.jpg';

value.addEventListener('click', () => {
    if (value.src == oldValue) {
        value.src = newValue;
    } else {
        value.src = oldValue;
    }
})


// 2 вариант

// let value = document.querySelector('.image');
// console.log(value.src)
// console.log(value.src.indexOf('Car.jpg'))
// value.addEventListener('click', () => {
//     if (value.src.indexOf('Car.jpg') > 0) {
//         value.src = 'Img/Cats.jpg';
//         console.log(value.src);
//     } else {
//         value.src = 'Img/Car.jpg';
//         console.log(value.src);
//     }    
// })

// _______________________________________________________________

// Добавление параграфа по двойному клику на картинку

let paragraf = document.createElement('p');
let text = document.createTextNode('Hello!');
paragraf.appendChild(text);
value.addEventListener('dblclick', () => {
    value.parentNode.insertBefore(paragraf, value);
    value.parentNode.removeChild(value);
})

// ________________________________________________________________

// Добавление списка LI с названиями из JSON в OL 

fetch('http://127.0.0.1:5500/list.json').then(async (res) => {
    let data = await res.json();
    console.log(data)
    let ol = document.querySelector('.list');

    // Через FOR

    // for (let i=0; i<data.length; i++) {
    //     let item = data[i];
    //     let li = document.createElement('li');
    //     li.appendChild(document.createTextNode(`${item.name}`));
    //     ol.appendChild(li);
    // }

    // Через FOREACH

    data.forEach(item => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${item.name}`));
        ol.appendChild(li);
    })
})


// ________________________________________________________________________________________________




