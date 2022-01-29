const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "img/1.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "img/2.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "img/3.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "img/4.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "img/5.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "img/6.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "img/7.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "img/8.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "img/9.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


let buttonDOM = document.querySelector(".btn-container")
let menuContainerDOM = document.querySelector(".section-center")


function createButton(btnName) {
  let btn = `<button class="btn btn-outline-dark btn-item" id="${btnName}">${btnName}</button>` 
  return btn
}

function addButton(){
  buttonDOM.innerHTML = 
    `
    ${createButton("All")} 
    ${createButton("Korea")} 
    ${createButton("Japan")} 
    ${createButton("China")} 
    `

    document.querySelector('#All').addEventListener("click", allFoods)
    document.querySelector('#Korea').addEventListener("click", koreaFoods)
    document.querySelector('#Japan').addEventListener("click", japanFoods)
    document.querySelector('#China').addEventListener("click", chinaFoods)
}
addButton()

function allFoods(){
  let allMenu = "" 
  menu.map(menu => { 
    allMenu += createFood(menu) 
  })
  menuContainerDOM.innerHTML = allMenu
}

//Korea yemekleri
function koreaFoods(){
  let allMenu = "" 
  menu.map(menu => { 
    if (menu.category === "Korea"){ 
      allMenu += createFood(menu)
    }
  })
  menuContainerDOM.innerHTML = allMenu
}
//Japan yemekleri
function japanFoods(){
  let allMenu = "" 
  menu.map(menu => { 
    if (menu.category === "Japan"){
      allMenu += createFood(menu)
    }
  })
  menuContainerDOM.innerHTML = allMenu
}
//China yemekleri
function chinaFoods(){
  let allMenu = "" 
  menu.map(menu => { 
    if (menu.category === "China"){
      allMenu += createFood(menu)
    }
  })
  menuContainerDOM.innerHTML = allMenu
}


function createFood (food) {
  let item = `
  <div class="menu-items col-lg-6 col-sm-12">
  <img src="${food.img}" alt="${food.title}" class="photo">
  <div class="menu-info">
              <div class="menu-title">
                <h4>${food.title}</h4>
                <h4 class="price">${food.price}</h4>
              </div>
              <div class="menu-text">
              ${food.desc}
              </div>
            </div>
          </div>
        `
        return item
}

allFoods()