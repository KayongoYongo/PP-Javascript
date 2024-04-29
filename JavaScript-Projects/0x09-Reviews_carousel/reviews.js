// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "Absolutely fantastic purchase! This product goes above and beyond in terms of quality, features, and affordability. I couldn't be happier with my decision to buy it. Definitely worth every penny!",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Driver',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: "Incredible find! This product not only met but surpassed all of my expectations. From its durability to its versatility, it's truly outstanding. I can't recommend it enough!",
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Product Manager',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: "Remarkable product! It delivers excellence in every way possible - from its craftsmanship to its performance. Buying this was one of the best decisions I've made. I highly endorse it to anyone looking for top-notch quality",
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'Backend Developer',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: "Outstanding buy! This product is a game-changer. Its superior quality, functionality, and unbeatable price make it a must-have for anyone in need. I'm thoroughly impressed and will certainly be buying from this brand again.",
    },
  ];

// Select items
let img = document.getElementById('person-img')
let author = document.getElementById('author');
let job = document.getElementById('job');
let info = document.getElementById('info');

let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let randomBtn = document.querySelector('.random-btn');

// Set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// Show next person
nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length -1) {
    currentItem = 0;
  };
  showPerson(currentItem);
});

// Show previous person
prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  };
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});