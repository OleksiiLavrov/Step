
// consts which are used for header dropdown
const headerDropdown = document.querySelector('.header_dropdown-menu'); // dropdown block
const headerDropdownToggler = document.querySelector('.header_dropdown-toggle'); // button to toggle dropdown open/closed
const headerDropdownClose = document.querySelector('.header_dropdown-close'); // button just to close dropdown
const headerNavList = document.querySelector('.header_nav-list');
const headerNav = document.querySelector('.header_nav');

// const which is used for burger toggling
const burger = document.querySelector('.burger'); // button to toggle nav-list and color of the theme

// consts which are used for toggling color of the theme
const logo = document.querySelector('.logo');
const logoDark = document.querySelector('.logo.dark');
const logoContent = document.querySelectorAll('.logo-content');

// consts which are used for choosing tabs in courses block
let coursesTab = document.querySelectorAll(".courses_tab");
let coursesTabPane = document.querySelectorAll(".courses_tab-pane");

// consts which are used for counters
let counters = document.querySelectorAll('.counter-value');
let counterSpeed = 1000; // counter's speed

const counterContent = document.querySelector('.counter_content');

// const of swiper and it's settings
const swiper = new Swiper('.comments_swiper', {
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },

   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },

   spaceBetween: 20,

   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 0,
      },
      450: {
         slidesPerView: 1.5,
         spaceBetween: 20,
      },
      500: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      600: {
         slidesPerView: 2.5,
         spaceBetween: 20,
      },
      700: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      900: {
         slidesPerView: 3.5,
         spaceBetween: 20,
      },

      950: {
         slidesPerView: 4,
         spaceBetween: 20,
      },

      1100: {
         slidesPerView: 4.5,
         spaceBetween: 20,
      },
      1200: {
         slidesPerView: 5,
         spaceBetween: 20,
      }
   },
});

// lets of comments section giving them innerHTML
let commentsCounter = document.getElementsByClassName('comments_ swiper-slide').length;
let commentsCardName = document.querySelectorAll('.comments_card-name');
let commentsCardProf = document.querySelectorAll('.comments_card-text');
let commentsCardImg = document.querySelectorAll('.comments_card-img');
let commentsCardRate = document.querySelectorAll('.comments_card-rate');
// array with objects of date about user's comments
let infoComments = [
   {
      name: 'Ксения Фролова',
      prof: 'Графический Дизайнер',
      img: './img/photo-female-1.png',
      rate: 3,
   },
   {
      name: 'Елизавета Моисеева',
      prof: 'Студент курса «WEB-разработчик»',
      img: './img/photo-female-2.png',
      rate: 5,
   },
   {
      name: 'Ульяна Абрамова',
      prof: 'FrontEnd Developer',
      img: './img/photo-female-3.png',
      rate: 2,
   },
   {
      name: 'Аглая Иванова',
      prof: 'BackEnd Developer',
      img: './img/photo-female-4.png',
      rate: 1,
   },
   {
      name: 'Алиса Смирнова',
      prof: 'Диджитал маркетолог',
      img: './img/photo-female-5.png',
      rate: 5,
   },
   {
      name: 'София Самойлова',
      prof: 'Генеральный директор ООО Лесное',
      img: './img/photo-female-2.png',
      rate: 5,
   },
   {
      name: 'Светлана Корнилова',
      prof: 'Студент курса «WEB-разработчик»',
      img: './img/photo-female-3.png',
      rate: 4,
   },
   {
      name: 'Мария Климова',
      prof: 'WEB-Дизайнер',
      img: './img/photo-female-5.png',
      rate: 5,
   },
]

// consts which are needed for making form validation
const contactForm = document.querySelector('.contact_form');
const contactFormName = document.querySelector('.contact_form-name');
const contactFormPhone = document.querySelector('.contact_form-phone');
const contactFormEmail = document.querySelector('.contact_form-email');

//*************************************************************************!
//!-------------  THE END OF DECLARING VARIALEBLES  -----------------------
//*************************************************************************!

// adding EventListeners for dropdown toggling button and for closing button
headerDropdownToggler.addEventListener('click', function () {
   headerDropdown.classList.toggle('_active');
})

headerDropdownClose.addEventListener('click', function () {
   headerDropdown.classList.remove('_active');
})

// adding function for closing the dropdown when the "burger" element has display: block
// and closing burger menu and changinh theme back while when the "burger" element has display: none

function checkFormat() {
   if (window.getComputedStyle(burger, null).display === 'block') {
      headerDropdown.classList.remove('_active');
   } else {
      burger.classList.remove('_active');
      headerNavList.classList.remove('_open');
      logo.classList.remove('_inactive');
      logoDark.classList.remove('_active');

      headerNav.classList.remove('_dark');
      logoContent.forEach(element => {
         element.classList.remove('_dark');
      });
   }
}
// browser is updating info about css property display of the "burger" element
setInterval(checkFormat, 3000)

// adding EventListeners for toggling burger with navigation list in mobile format
// and toggling the color of theme with opening of the nav list

burger.addEventListener('click', function () {
   burger.classList.toggle('_active');
   headerNavList.classList.toggle('_open');
   logo.classList.toggle('_inactive');
   logoDark.classList.toggle('_active');
   document.body.classList.toggle('scroll-lock');

   headerNav.classList.toggle('_dark');
   logoContent.forEach(element => {
      element.classList.toggle('_dark');
   });
});

//*****************************************************************
//*-------------  THE END OF "HEADER" CODE  -----------------------
//*****************************************************************


// function for opening tabs 
for (let i = 0; i < coursesTab.length; i++) {

   coursesTab[i].addEventListener("click", function (e) {
      e.preventDefault();
      let activeTabAttr = this.getAttribute("data-tab");

      // using "this." because it is needed to click on the "<a>" tag with dataAttr
      // which is parent element

      for (let j = 0; j < coursesTab.length; j++) {

         // finding the tab-pane with correct dataAttr
         let contentAttr = coursesTabPane[j].getAttribute("data-tab-content");

         // toggling the "_active" class for tab and tab-pane
         if (activeTabAttr === contentAttr) {
            coursesTab[j].classList.add("_active");
            coursesTabPane[j].classList.add("_active");
         } else {
            coursesTab[j].classList.remove("_active");
            coursesTabPane[j].classList.remove("_active");
         }
      };
   });
};

//*****************************************************************
//*-------------  THE END OF "TABS" CODE  -------------------------
//*****************************************************************

// adding Listener on window by scrolling to check it's offsetTop
// by reaching of animationPoint animateCounter() starts working

window.onscroll = function () {

   let animationPoint = counterContent.offsetTop +
      counterContent.offsetHeight -
      document.documentElement.clientHeight;

   // comparing offsetTop with animationPoint
   if (scrollY >= animationPoint) {

      counters.forEach(counter => {
         const animateCounter = () => {
            const counterValue = +counter.getAttribute('data-counter-value');
            const counterData = +counter.innerText;
            const time = counterValue / counterSpeed;
            if (counterData < counterValue) {
               counter.innerText = Math.ceil(counterData + time);
               setTimeout(animateCounter, 10);
            } else {
               counter.innerText = counterValue;
            }
         }
         animateCounter();
      });

   }
}

//*****************************************************************
//*-------------  THE END OF "COUNTER" CODE  ----------------------
//*****************************************************************

// function for using data from array of objects

// checking if the comments amount is equal to array length
if (commentsCounter == infoComments.length) {
   for (let i = 0; i < commentsCounter; i++) {
      commentsCardName[i].innerHTML = infoComments[i].name;
      commentsCardProf[i].innerHTML = infoComments[i].prof;
      commentsCardImg[i].src = infoComments[i].img;

      for (let j = 0; j < infoComments[i].rate - 1; j++) { // one is already placed in html
         const node = commentsCardRate[i].childNodes[1];
         const clone = node.cloneNode(true);
         commentsCardRate[i].appendChild(clone);
      }

   }
}

//*****************************************************************
//*-------------  THE END OF "COMMENTS" CODE  ---------------------
//*****************************************************************

// function of form validation 

contactForm.addEventListener('submit', e => {
   e.preventDefault();

   if (validateForm()) {
      location.href = 'https://google.com/search';
   };
});

function validateForm() {
   let contactFormNameValue = contactFormName.value.trim();
   let contactFormPhoneValue = contactFormPhone.value.trim();
   let contactFormEmailValue = contactFormEmail.value.trim();
   let formErrors = [];

   if (contactFormNameValue === '') {
      setErrorFor(contactFormName, 'Username cannot be blank');
      formErrors.push('Error-1');
   } else {
      setSuccessFor(contactFormName);
   }

   if (contactFormPhoneValue === '') {
      setErrorFor(contactFormPhone, 'Phone cannot be blank');
      formErrors.push('Error-2');
   }
   else if (!isNumber(contactFormPhoneValue)) {
      setErrorFor(contactFormPhone, 'Phone must have only numbers');
      formErrors.push('Error-2');
   } else {
      setSuccessFor(contactFormPhone);
   }

   if (contactFormEmailValue === '') {
      setErrorFor(contactFormEmail, 'Email cannot be blank');
      formErrors.push('Error-3');
   } else if (!isEmail(contactFormEmailValue)) {
      setErrorFor(contactFormEmail, 'Not a valid email');
      formErrors.push('Error-3');
   } else {
      setSuccessFor(contactFormEmail);
   }

   if (formErrors.length > 0) {
      return false;
   } else {
      contactFormNameValue = '';
      contactFormPhoneValue = '';
      contactFormEmailValue = '';
      return true;
   }

}

function isEmail(email) {
   return String(email)
      .toLowerCase()
      .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

function isNumber(string) {
   let phoneNumber = Number(string);
   if (typeof phoneNumber === 'number') {
      return phoneNumber;
   }
}

function setErrorFor(input, message) {
   input.value = '';
   input.classList.add('_error');
   input.placeholder = message;
}

function setSuccessFor(input) {
   input.classList.add('_success');
}

//*****************************************************************
//*----------------  THE END OF "FORM" CODE  ----------------------
//*****************************************************************

function findVideos() {
   let videos = document.querySelectorAll('.video_wrapper');

   for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
   }
}

function setupVideo(video) {
   let link = video.querySelector('.video_link');
   let media = video.querySelector('.video_media');
   let button = video.querySelector('.video_btn');
   let id = parseMediaURL(media);

   video.addEventListener('click', function () {

      let iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
   });

   link.removeAttribute('href');
   video.classList.add('_enabled');
}

function parseMediaURL(media) {
   let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
   let url = media.src;
   let match = url.match(regexp);

   return match[1];
}

function createIframe(id) {
   let iframe = document.createElement('iframe');

   iframe.setAttribute('allowfullscreen', '');
   iframe.setAttribute('allow', 'autoplay');
   iframe.setAttribute('src', generateURL(id));
   iframe.classList.add('video_media');

   return iframe;
}

function generateURL(id) {
   let query = '?rel=0&showinfo=0&autoplay=1';

   return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

//*****************************************************************
//*----------------  THE END OF "VIDEO" CODE  ----------------------
//*****************************************************************