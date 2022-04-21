var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const btnProfile = document.querySelector('aside');
  
  btnProfile.addEventListener('click',function(){
    this.classList.toggle('active');
  });

  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('header nav');
  burger.addEventListener('click',function(){
    this.classList.toggle('active');
    nav.classList.toggle('active');

  });

  const btnTest = document.getElementById('about');  

  btnTest.addEventListener('click',function(){  

    let current = btnProfile.className.includes('active')
    
    if(current){
      btnProfile.classList.remove('class', 'active')
    }else {
      btnProfile.classList.add('class', 'active')      
    }
  })
