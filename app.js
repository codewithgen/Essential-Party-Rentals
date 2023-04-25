// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let date = document.getElementById("date")

date.innerHTML = new Date().getFullYear()

// ********** close links ************

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
})


// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }

})

// ********** smooth scroll ************
const scrollLinks =  document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function(e){
        // prevent default
        e.preventDefault();
        // navigate to specific section
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
// calculate the heights
const navHeight = navbar.getBoundingClientRect().height;
const containerHeight = linksContainer.getBoundingClientRect().height;
const fixedNav = navbar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        if (navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});
// select links


//********************************************* filtered menu */

const menu = [
    {
      id: 1,
      title: "Clear Acrylic Chairs",
      category: "Chairs",
      price: 8.99,
      img: "/images/clear-acrilic-chairs.png",
    },
    {
      id: 2,
      title: "Floating Candle Base",
      category: "Table Decor",
      price: 7.99,
      img: "/images/candle-holders.png",
    },
    {
      id: 3,
      title: "Pink Table Cloths",
      category: "Table Cloths",
      price: 10.99,
      img: "/images/tablecloth-pink.png",

    },
    {
      id: 4,
      title: "Woodden Chairs",
      category: "Chairs",
      price: 20.99,
      img: "/images/wodden-chairs.jpeg",
    },
    {
      id: 5,
      title: "Wine Glass (in pairs)",
      category: "Table Decor",
      price: 6.99,
      img: "/images/glass-wine-cups.png",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "White Polyester Table Cloth",
      category: "Table Cloths",
      price: 12.99,
      img: "/images/tablecloth1.png",

    },
    {
      id: 7,
      title: "Rustic Rose Gold Chairs",
      category: "Chairs",
      price: 13.99,
      img: "/images/rose-gold-metal-chairs.png",

    },
    {
      id: 8,
      title: "Clear and Gold Plates and Silverware",
      category: "Table Decor",
      price: 15.99,
      img: "/images/plate-rentals.png",
   
    },
    {
      id: 9,
      title: "Boho Set Up",
      category: "Furniture",
      price: 2445.99,
      img: "/images/boho-set-up.png",
    
    },
    {
      id: 10,
      title: "Vintage Furniture Set",
      category: "Furniture",
      price: 3500.99,
      img: "/images/vintage-furnature.png",

    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="btn-rentals" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".btn-rentals");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
  