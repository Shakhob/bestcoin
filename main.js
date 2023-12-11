window.onload = function(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 28,
    slidesPerView: 5,
    // freeMode: true,
    // watchSlidesProgress: true,
    breakpoints: {
      0: {
        spaceBetween: 15,
      },
      1024: {
        spaceBetween: 28,
      },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 1,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  let favoriteBtn = document.querySelector('.favorites .favorite_button');
  let favoriteList = document.querySelector('.favorite_list');
  let basketList = document.querySelector('.basket_list');
  favoriteBtn.addEventListener('click',function(e){
    e.preventDefault();
    favoriteList.classList.toggle('show')
    basketList.classList.remove('show')
  })

  let basketBtn = document.querySelector('.basket_button');
  basketBtn.addEventListener('click',function(e){
    e.preventDefault();
    basketList.classList.toggle('show')
    favoriteList.classList.remove('show')
  })

  let add_favorite = document.querySelector('.add_favorite')
  add_favorite.addEventListener('click',function(e){
    e.preventDefault();
    add_favorite.classList.toggle('c-black')
  });

  let countElement = document.getElementById('count');
  let count = parseInt(countElement.innerText);

  function updateCounter() {
    countElement.innerText = count;
  }

  function increment() {
    count++;
    updateCounter();
  }

  function decrement() {
    if (count > 0) {
      count--;
      updateCounter();
    }
  }
  let minusBtn = document.querySelector('.minus');
  minusBtn.addEventListener('click',function(e){
    decrement();
  })
  let plusBtn = document.querySelector('.plus');
  plusBtn.addEventListener('click',function(e){
    increment();
  })
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');

  function openTab(index) {
      // Hide all tabs
      tabs.forEach(tab => {
        tab.style.display = 'none';
      });

      // Remove the 'selected' class from all buttons
      buttons.forEach(btn => {
        btn.classList.remove('selected');
      });

      // Show the selected tab
      tabs[index].style.display = 'flex';

      // Add the 'selected' class to the clicked button
      buttons[index].classList.add('selected');
  }

  buttons.forEach((button, index) => {
      button.addEventListener('click', function () {
      openTab(index);
      });
  });
  let StockMenuOpener = document.querySelector('.mobile_menu .opener_navlink')
  let stockMenu = document.querySelector('.mobile_menu .global_prices')
  StockMenuOpener.addEventListener('click',function(e){
    e.preventDefault();
    stockMenu.classList.toggle('show')
    StockMenuOpener.classList.toggle('active')
  });

  let topMenuOpener = document.querySelector('.mobile_top_nav .top_nav_btn')
  let topMenu = document.querySelector('.mobile_top_nav ul')
  topMenuOpener.addEventListener('click',function(e){
    e.preventDefault();
    topMenu.classList.toggle('show')
    topMenuOpener.classList.toggle('active')
  })
  document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
    document.querySelector('.header_mobile_menu nav').classList.toggle('show')
  });
  
}