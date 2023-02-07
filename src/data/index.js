import inProgress from "../assets/images/working.avif"

// menu image
import menu1 from "../assets/images/myMenu/item-1.jpeg"
import menu2 from "../assets/images/myMenu/item-2.jpeg"
import menu3 from "../assets/images/myMenu/item-3.jpeg"
import menu4 from "../assets/images/myMenu/item-4.jpeg"
import menu5 from "../assets/images/myMenu/item-5.jpeg"
import menu6 from "../assets/images/myMenu/item-6.jpeg"
import menu7 from "../assets/images/myMenu/item-7.jpeg"
import menu8 from "../assets/images/myMenu/item-8.jpeg"
import menu9 from "../assets/images/myMenu/item-9.jpeg"
import ourmenu from "../assets/images/myMenu/ourMenu.png"
import pagination from "../assets/images/pagination/paginationPage.png"

const navbar = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "My Menu",
    link: "/menuapp",
  },
  {
    name: "Pagination",
    link: "/paginationapp",
  },
  {
    name: "Hacker News",
    link: "/hackerapp",
  },
  {
    name: "Todo App",
    link: "/todoapp",
  },
]

const projects = [
  {
    id: 1,
    name: "My Menu",
    link: "/menuapp",
    image: ourmenu,
    desc: "You can check our menu and filter it ..",
  },
  {
    id: 2,
    name: "Pagination",
    link: "/paginationapp",
    image: pagination,
    desc: "github followers pagination app.",
  },
  {
    id: 3,
    name: "Project 3",
    link: "/project-3",
    image: inProgress,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    name: "Project 4",
    link: "/project-4",
    image: inProgress,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "Project 5",
    link: "/project-5",
    image: inProgress,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    name: "Project 6",
    link: "/project-6",
    image: inProgress,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    name: "Project 7",
    link: "/project-7",
    image: inProgress,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    name: "Project 18",
    link: "/project-8",
    image: inProgress,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

const items = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: menu1,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: menu2,
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: menu3,
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: menu4,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: menu5,
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: menu6,
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: menu7,
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: menu8,
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: menu9,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]
export { navbar, projects, items }
