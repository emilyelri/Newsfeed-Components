/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.
  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.
*/
let menuOut;

function createMenu(arr) {
  // define new elements
  
  const menu = document.createElement('div');
  const unorderedList = document.createElement('ul');
  const articles = document.querySelector('.articles');

  // forEach to create element, set textContent, and appendChild for each item in arr
  arr.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    unorderedList.appendChild(li);
  });

  // add classes
  menu.classList.add('menu');

  // structure articles
  menu.appendChild(unorderedList);

  // add event listener
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', (e) => {
    if (menuOut === true) {
      TweenMax.to('.menu', 1, {width: 0});
      TweenMax.to('.menu ul li', 1, {fontSize: 10});
      TweenMax.to(articles, 1, {paddingLeft: 0});
      menuOut = false;
    } else {
      menu.classList.toggle ("menu--open");
      TweenMax.to('.menu', 1, {width: 350});
      TweenMax.to('.menu ul li', 1, {fontSize: 32});
      TweenMax.to(articles, 1, {paddingLeft: 350});
      menuOut = true;
    }
  });
  // return menu
  return menu;
};



const header = document.querySelector('.header');
header.appendChild(createMenu(menuItems));