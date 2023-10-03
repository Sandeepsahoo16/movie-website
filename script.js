var swiper = new Swiper(".popular-content ", {
    SlidesPerView:1,
    spaceBetween: 10,
    
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
     
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    breakpoints:{
        280: {
            SlidesPerView:1,
            spaceBetween: 10,
            
        },
        320: {
            SlidesPerView:2,
            spaceBetween: 10,
            
        },
        540: {
            SlidesPerView:2,
            spaceBetween: 10,
            
        },
        758: {
            SlidesPerView:3,
            spaceBetween: 15,
            
        },
        900: {
            SlidesPerView:4,
            spaceBetween: 20,
            
        },
    },
  });
  
  let playButton = document.querySelector('.play-movie');
  let video= document.querySelector('.video-container');
  let myvideo= document.querySelector('#myvideo');
  let closebtn = document.querySelector('.close-video');

  playButton.onclick = () => {
    video.classList.add("show-video");
    myvideo.play();
  };
  closebtn.onclick = () => {
    video.classList.remove("show-video");
    myvideo.pause();
  };