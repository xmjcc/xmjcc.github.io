"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: 
      Date:   

      Filename: js05.js
*/

window.addEventListener("load", setupGallery);

function setupGallery() {
   let imageCount = imgFiles.length;
   let galleryBox = document.getElementById("lightbox");
   let currentSlide = 1;
   let runShow = true;
   let showRunning;
   let favoritepicNumber = 0;

   let galleryTitle = document.createElement("h1");
   galleryTitle.id = "galleryTitle";
   let slidesTitle = lightboxTitle; // TODO figure out title
   galleryTitle.textContent = slidesTitle;
   galleryBox.appendChild(galleryTitle);

   let slideCounter = document.createElement("div");
   slideCounter.id = "slideCounter";
   slideCounter.textContent = currentSlide + "/" + imageCount;
   galleryBox.appendChild(slideCounter);

   let leftBox = document.createElement("div");
   leftBox.id = "leftBox";
   leftBox.innerHTML = "&#9664;";
   leftBox.onclick = moveToLeft;
   galleryBox.appendChild(leftBox);

   let rightBox = document.createElement("div");
   rightBox.id = "rightBox";
   rightBox.innerHTML = "&#9654;";
   rightBox.onclick = moveToRight;
   galleryBox.appendChild(rightBox);

   let playPause = document.createElement("div");
   playPause.id = "playPause";
   playPause.innerHTML = "&#9199;";
   playPause.onclick = startStopShow;
   galleryBox.appendChild(playPause);

   let slideBox = document.createElement("div");
   slideBox.id = "slideBox";
   galleryBox.appendChild(slideBox);



   for (let i = 0; i < imageCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.id = "imageid";
      image.onclick = createModal;
      slideBox.appendChild(image);

   }

   // let favoriteImage = document.getElementById("favoritepics")

   // add favorite button


   // for (let i = 0; i < 4; i++) {
   // let image = document.createElement("img");
   // image.src = storedArray[i];
   // image.onclick = createModal;
   // favoriteImage.appendChild(image);

   // }




   function moveToRight() {
      let firstImage = slideBox.firstElementChild.cloneNode("true");
      firstImage.onclick = createModal;
      slideBox.appendChild(firstImage);
      slideBox.removeChild(slideBox.firstElementChild);
      currentSlide++;
      if (currentSlide > imageCount) {
         currentSlide = 1;
      }
      slideCounter.textContent = currentSlide + " / " + imageCount;
   }

   function moveToLeft() {
      let lastImage = slideBox.lastElementChild.cloneNode("true");
      lastImage.onclick = createModal;
      slideBox.removeChild(slideBox.lastElementChild);
      slideBox.insertBefore(lastImage, slideBox.firstElementChild);
      currentSlide--;
      if (currentSlide === 0) {
         currentSlide = imageCount;
      }
      slideCounter.textContent = currentSlide + " / " + imageCount;
   }

   function startStopShow() {
      if (runShow) {
         showRunning = window.setInterval(moveToRight, 1000);
         runShow = false;
      } else {
         window.clearInterval(showRunning);
         runShow = true;
      }
   }


   //add to favorite function






   function createModal() {
      let modalWindow = document.createElement("div");
      modalWindow.id = "lbOverlay";
      let figureBox = document.createElement("figure");
      modalWindow.appendChild(figureBox);

      let modalImage = this.cloneNode("true");
      figureBox.appendChild(modalImage);

      let figureCaption = document.createElement("figcaption");
      figureCaption.textContent = modalImage.alt;
      figureBox.appendChild(figureCaption);

      let closeBox = document.createElement("div");
      closeBox.id = "lbOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function () {
         document.body.removeChild(modalWindow);
      }

      let favButton = document.createElement("BUTTON");
      let buttoncontent = document.createTextNode("Add to Favorite");
      favButton.appendChild(buttoncontent);

      favButton.onclick = function addToFavarite() {

         let favoriteImage = document.getElementById("favoritepics")
         //let firstImage = slideBox.firstElementChild.cloneNode("true");
         if (favoritepicNumber >= 5) {
            window.alert("A maximum of 5 pics can be added to the favourites, one will be removed");
            favoriteImage.removeChild(favoriteImage.lastElementChild);
            favoritepicNumber--;

         }
         else {

            //check if the picture already in favorite, if not then add if alert msg

            let j = 0;
            for (let i = 0; i < favoritepicNumber; i++) {
               const imgSrc = modalImage.getAttribute('src');
               console.log(imgSrc)
               console.log(favoriteImages[i]);


               if (imgSrc == favoriteImages[i]) {
                  j++;
                  window.alert("already in favorite picture!");
               };
            }

            if (j == 0) {

               favoriteImage.appendChild(modalImage);
               modalImage.onclick = createModal;
               const imgSrc = modalImage.getAttribute('src');
               favoriteImages[favoritepicNumber] = imgSrc;
               favoritepicNumber++;
               console.log(favoritepicNumber);
               console.log(imgSrc);
               console.log(favoriteImages)

            }






            //favoriteImages[favoritepicNumber]=
         }

         //close widow once added
         document.body.removeChild(modalWindow);
         // localStorage.setItem('favoriteImages', JSON.stringify(favoriteImages));
         // const storedArray = JSON.parse(localStorage.getItem('favoriteImages'));



      }
      modalWindow.appendChild(favButton);




      modalWindow.appendChild(closeBox);

      document.body.appendChild(modalWindow);
   }

}