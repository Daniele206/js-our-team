// Element
const listContainer = document.querySelector('.list_container');

const team = [
  {
    name: 'Wayne Barnet',
    assignament: 'Founder & CEO',
    img: "./assets/img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: 'Angela Caroll',
    assignament: 'Chief Editor',
    img: "./assets/img/angela-caroll-chief-editor.jpg",
  },
  {
    name: 'Walter Gordon',
    assignament: 'Office Manager',
    img: "./assets/img/walter-gordon-office-manager.jpg",
  },
  {
    name: 'Angela Lopez',
    assignament: 'Social Media Manager',
    img: "./assets/img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: 'Scott Estrada',
    assignament: 'Developper',
    img: "./assets/img/scott-estrada-developer.jpg",
  },
  {
    name: 'Barbara Ramos',
    assignament: 'Graphic Designer',
    img: "./assets/img/barbara-ramos-graphic-designer.jpg",
  },
];

for(let parter of team){
  listContainer.innerHTML += `
  <div class="card w-25 my_h mx-3 my-2" style="width: 18rem;">
    <img src="${parter.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title fw-bold text-center">${parter.name}</h4>
      <div class="card-text text-center">${parter.assignament}</div>
    </div>
  </div>
  `
}