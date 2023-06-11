const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


// created all button 
let btnAll = document.createElement("button");
btnAll.type = "button";
btnAll.classList.add("btn-item", "btn" ,"btn-light", "me-2", "border");
btnAll.textContent = "ALL";
btnAll.id = "all";


let container1 = document.querySelector(".btn-container");
container1.appendChild(btnAll);



// created korea button 
let btnKorea = document.createElement("button");
btnKorea.type = "button";
btnKorea.classList.add("btn-item", "btn" ,"btn-light", "me-2", "border");
btnKorea.textContent = "Korea";
btnKorea.id = "korea";

let container2 = document.querySelector(".btn-container");
container2.appendChild(btnKorea);



// created japan button 
let btnJapan = document.createElement("button");
btnJapan.type = "button";
btnJapan.classList.add("btn-item", "btn" ,"btn-light", "me-2", "border");
btnJapan.textContent = "Japan";
btnJapan.id = "japan";

let container3 = document.querySelector(".btn-container");
container3.appendChild(btnJapan);



// created china button 
let btnChina = document.createElement("button");
btnChina.type = "button";
btnChina.classList.add("btn-item", "btn" ,"btn-light", "border");
btnChina.textContent = "China";
btnChina.id = "china";

let container4 = document.querySelector(".btn-container");
container4.appendChild(btnChina);



// All button Menu
let menu1 = document.querySelector(".section-center");

let allBtn = document.querySelector("#all");
allBtn.addEventListener("click", menuShow);

function menuShow() {
  console.log("all btn calisiyor...")
  let menuItems = '';

  menu.forEach(item => {
    menuItems += `
      <div class="col-sm-4 mb-5">
        <div class="card rounded-3 border border-dark">
          <img src="https://picsum.photos/400/400" class="rounded-3" style="width: 100%; height: 100%;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.price}$</p>
          </div>
        </div>
      </div>
    `;
  });

  menu1.innerHTML = `
    <div class="container">
      <div class="row">
        ${menuItems}
      </div>
    </div>
  `;
};

menuShow();






// Korea button Menu
let menu2 = document.querySelector(".section-center");

let koreaBtn = document.querySelector("#korea");
koreaBtn.addEventListener("click", koreaShow);

function koreaShow() {
  console.log("korea btn calisiyor...")
  let menuItems = '';

  menu.forEach(item => {
    if(item.category == "Korea") {
      menuItems += `
      <div class="col-sm-4 mb-5">
        <div class="card rounded-3 border border-dark">
          <img src="https://picsum.photos/400/400" class="rounded-3" style="width: 100%; height: 100%;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.price}$</p>
          </div>
        </div>
      </div>
    `;
    }
  });

  menu2.innerHTML = `
    <div class="container">
      <div class="row">
        ${menuItems}
      </div>
    </div>
  `;
};





// Japan button Menu
let menu3 = document.querySelector(".section-center");

let japanBtn = document.querySelector("#japan");
japanBtn.addEventListener("click", japanShow);

function japanShow() {
  console.log("japan btn calisiyor...")
  let menuItems = '';

  menu.forEach(item => {
    if(item.category == "Japan") {
      menuItems += `
      <div class="col-sm-4 mb-5">
        <div class="card rounded-3 border border-dark">
          <img src="https://picsum.photos/400/400" class="rounded-3" style="width: 100%; height: 100%;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.price}$</p>
          </div>
        </div>
      </div>
    `;
    }
  });

  menu3.innerHTML = `
    <div class="container">
      <div class="row">
        ${menuItems}
      </div>
    </div>
  `;
};







// China button Menu
let menu4 = document.querySelector(".section-center");

let chinaBtn = document.querySelector("#china");
chinaBtn.addEventListener("click", chinaShow);

function chinaShow() {
  console.log("china btn calisiyor...")
  let menuItems = '';

  menu.forEach(item => {
    if(item.category == "China") {
      menuItems += `
      <div class="col-sm-4 mb-5">
        <div class="card rounded-3 border border-dark">
          <img src="https://picsum.photos/400/400" class="rounded-3" style="width: 100%; height: 100%;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.price}$</p>
          </div>
        </div>
      </div>
    `;
    }
  });

  menu4.innerHTML = `
    <div class="container">
      <div class="row">
        ${menuItems}
      </div>
    </div>
  `;
};








// function menuShow () { 
//   let menuItems = menu.map(item => { 
//     return `
//     <div class="row mb-5" >

//       <div class="col-sm-2">
//           <div class="card rounded-3 border border-dark ms-5">
//               <img src="https://picsum.photos/340/340" class="rounded-3" style="width: 100%; height: 100%;">
//           </div>
//       </div>
  
//       <div class="col-sm-3">
//           <div class="row border-bottom border-dark">
//               <div class="col-sm-8">
//                   <span class="list-inline-item border-dark fs-4">${item.title}</span>
//               </div>

//               <div class="col-sm-4">
//                   <span class="list-inline-item ms-3 fs-4">${item.price}$</span>
//               </div>
//           </div>
//       </div>

//     </div>  
//     `  
//   });
//   menu1.innerHTML = menuItems 
// };

// menuShow();




