const team = [
  {
    name: 'Wayne Barnet',
    assignament: 'Founder & CEO',
    img: "./assets/img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: 'Angela Caroll',
    assignament: 'Chief Editor',
    img: "./assets/img/angela-caroll-chieff-editor.jpg",
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
    img: "./assets/img/scott-estraqda-developper.jpg",
  },
  {
    name: 'Barbara Ramos',
    assignament: 'Graphic Designer',
    img: "./assets/img/barbara-ramos-graphic-designer.jpg",
  },
];

for(let parter of team){
  console.log(parter.name);
  console.log(parter.assignament);
  console.log(parter.img);
}