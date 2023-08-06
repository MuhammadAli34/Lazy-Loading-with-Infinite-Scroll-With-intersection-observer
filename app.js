"use strict";
// let container = document.querySelector(".container");
// const APIURL = "https://api.thecatapi.com/v1/images/search";

// async function GetPhotos() {
//   let res = await fetch(APIURL);
//   let resj = await res.json();
//   let newElem = document.createElement("img");
//   newElem.src = resj.url;
//   container.append(newElem);
//   console.log(resj);
// }

// GetPhotos();
let footer = document.querySelector("footer");
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.intersectionRatio) {
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const observer2 = new IntersectionObserver(
  function (entries) {
    GetPhotos();
  },
  { threshold: 0.6 }
);
observer2.observe(footer);
const APIURL = "https://dog.ceo/api/breeds/image/random/3 Fetch!";
let section = document.querySelector("section");
async function GetPhotos() {
  let res = await fetch(APIURL);
  let data = await res.json();
  data.message.forEach((element) => {
    let img = document.createElement("img");
    img.src = element;

    section.appendChild(img);
    observer.observe(img);
  });
  console.log(data);
}

//  bad code to scroll
// window.addEventListener("scroll",
//   if (
//     window.scrollY + window.innerHeight >=
//     window.document.body.offsetHeight - 200
//   ) {
//
//   }
// });

GetPhotos();
