/////////////////////////
// Functions
/////////////////////////

//Finds y value of given object
function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [curtop];
  }
}

/////////////////////////
// Commons
/////////////////////////
const scrollToMain = document.getElementById('scroll-to-main');
scrollToMain.addEventListener('click', (e) => {
  window.scroll(0, findPos(document.querySelector('main')));
});

/////////////////////////
// Components
/////////////////////////

// Landing Page Header
let landingPageContantNum = 0;
const playerContentHeadingOne = document.querySelector('.player__content__text .heading-1');
const playerContentHeadingThree = document.querySelector('.player__content__text .heading-3');
const playerContentVisual = document.querySelector('.player__content__visual img');
const playerControlsLeft = document.querySelector(
  '.player__controls .player__controls__btn--previous'
);
const playerControlsRight = document.querySelector(
  '.player__controls .player__controls__btn--next'
);
const playerControlsPlayerInfo = document.querySelector('.player__controls__player-info');
const landingPageHeaderContent = [
  {
    heading: 'SVIESA - The PMC Sliet',
    paragraph:
      'A group of creative people having a fire within themselves to improve self and each other.',
  },
  {
    heading: 'SVIESA - About',
    paragraph:
      'A group of creative people having a fire within themselves to improve self and each other.',
  },
];
console.log(landingPageHeaderContent[landingPageContantNum].heading);
function changeLeft() {}
playerControlsLeft.addEventListener('click');

// Teams Page
const memberContainer = document.querySelector('.member-container');
