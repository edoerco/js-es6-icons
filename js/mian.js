const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];


const colors = [
    'blue',
    'orange',
    'purple'
]

// // arrow function
// // le arrow function vanno effettuate prima del richiamo altrimenti non viene eseguita
// const print = (array, container) => {
//     container.innerHTML = '';      // <-- serve per 'ripulire' la pagina, non lo avessi messo si sarebbero sommate le scelte
    
//     array.forEach((element) => {
//         const {name, family, prefix, color } = element;
//         container.innerHTML += 
//         `
//         <div>
//         <i class="${family} ${prefix + name}" style="color: ${color}"></i>
//         <div class="title">${name.toUpperCase()}</div>
//         </div>
//         `;
//     });
// };

// const colorIcons = (array, colors) => {
//     const types = getTypes(array);

//     const coloredArray = array.map((element) => {
//         const indexType = types.indexOf(element.type); // index restituisce l'indice (0 animal, 1 vegetable, 2 user)
//         //aggiungiamo al nostro element il colore
//         element.color = colors[indexType]; //se in posizione 0 blue, 1 orange, 2 purple 
//         return element;
//     })
//     return coloredArray;
// };

// const getTypes = (array) => {     //array --> icons
//     const types =[];

//     array.forEach((element) => {
//         if (types.includes(element.type) == false) {    //modo alternativo per scriverlo  '!=is not' --> (!types.includes(icons.type)) 
//             types.push(element.type);
//         } 
//     })
//     return types;
// };

// const printOptions = (array, select) => {
//     array.forEach((element) => {
//         select.innerHTML += 
//         `
//         <option value="${element}">${element}</option>
//         `
//     });
// };

// const filterValues = (array, type) => {
//     const filteredIcons = array.filter((element) => {
//         if (element.type === type) {
//             return true
//         }
//         return false;
//     });
//     // nel caso venga messo all, dovranno tornare tutti quanti gli items (target è una stringa vuota)
//     if (type === "") {
//         return array;
//     }
//     return filteredIcons;
// };

// fine arrow function



const iconsContainer = document.getElementById('items');

const coloredArray = colorIcons(icons, colors)

print(coloredArray, iconsContainer);

const types = getTypes(coloredArray);
const select = document.getElementById('type');
//passiamo i parametri da inserire 'type' e il posto 'select'
printOptions(types, select);


// aggiungiamo un evento per selezionare le categorie usando un metodo collegato al select   (object.onchange)
// AL CHANGE MOSTRARE SOLO LE ICONE FILTRATE

select.onchange = function(element) {
   const filtered = filterValues(icons, element.target.value);
   console.log(filtered);
    // stampiamo le scelte
   print(filtered, iconsContainer);
};


// funzioni
// funzione per stampare sulla pagina i div popolati dall'array
function print(array, container) {
    container.innerHTML = '';      // <-- serve per 'ripulire' la pagina, non lo avessi messo si sarebbero sommate le scelte
    
    array.forEach((element) => {
        const {name, family, prefix, color } = element;
        container.innerHTML += 
        `
        <div>
        <i class="${family} ${prefix + name}" style="color: ${color}"></i>
        <div class="title">${name.toUpperCase()}</div>
        </div>
        `;
    });
};

// funzione per colorare le icone...
function colorIcons(array, colors) {
    const types = getTypes(array);

    const coloredArray = array.map((element) => {
        const indexType = types.indexOf(element.type); // index restituisce l'indice (0 animal, 1 vegetable, 2 user)
        //aggiungiamo al nostro element il colore
        element.color = colors[indexType]; //se in posizione 0 blue, 1 orange, 2 purple 
        return element;
    })
    return coloredArray;
};
        
// ... per tipologia (type)
function getTypes(array) {     //array --> icons
    const types =[];

    array.forEach((element) => {
        if (types.includes(element.type) == false) {    //modo alternativo per scriverlo  '!=is not' --> (!types.includes(icons.type)) 
            types.push(element.type);
        } 
    })
    return types;
};


// funzione per aggiungere le 'categorie' di scelta 
function printOptions(array, select) {
    array.forEach((element) => {
        select.innerHTML += 
        `
        <option value="${element}">${element}</option>
        `
    });
};

// funzione per filtrare le scelte dell'utente
function filterValues(array, type) {
    const filteredIcons = array.filter((element) => {
        if (element.type === type) {
            return true
        }
        return false;
    });
    // nel caso venga messo all, dovranno tornare tutti quanti gli items (target è una stringa vuota)
    if (type === "") {
        return array;
    }
    return filteredIcons;
};
                
                
                
                
                
                
                
                
                
                