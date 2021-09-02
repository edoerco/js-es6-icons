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

const iconsContainer = document.getElementById('items');

const coloredArray = colorIcons(icons, colors)

print(coloredArray, iconsContainer);


// funzioni

function print(array, container) {
    container.innerHTML = '';      // <-- serve per 'ripulire' la pagina  
    
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
        
// colorare le icone per tipologia (type)
function getTypes(array) {     //array --> icons
    const types =[];

    array.forEach((element) => {
        if (types.includes(element.type) == false) {    //modo alternativo per scriverlo  '!=is not' --> (!types.includes(icons.type)) 
            types.push(element.type);
        } 
    })
    return types;
};
                
                
                
                
                
                
                
                
                
                
                
// icons.forEach((element) => {
//     const { name, prefix, type, family } = element;
//     items.innerHTML +=  
//     `
//     <div>
//         <i class="${family} ${prefix + name}" style="color: blue;"></i>
//         <div class="title">${name.toUpperCase()}</div>
//     </div>
//     `;
// });