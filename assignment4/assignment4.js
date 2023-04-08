"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Chapter Case

   Author:   
   Date:     

   Filename: js11.js


*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   // let stories = document.getElementById("stories");

   function openMymodal(y){

      // console.log("x", x);
      console.log("y", y);

      let modalWindow = document.createElement("div");
      modalWindow.id = "lbOverlay";
      let figureBox = document.createElement("figure");
      modalWindow.appendChild(figureBox);

      let modalImage = document.createElement("img");
      modalImage.src = y.src;
      figureBox.appendChild(modalImage);

      let figureCaption = document.createElement("figcaption");
      figureCaption.textContent = y.alt;
      figureBox.appendChild(figureCaption);

      let closeBox = document.createElement("div");
      closeBox.id = "lbOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function () {
         document.body.removeChild(modalWindow);
      }

   


      modalWindow.appendChild(closeBox);


      const rootNode = closeBox.getRootNode();
      console.log('ssss', rootNode);

      document.body.appendChild(modalWindow);
      //close widow once added


   }


   // Create a request object
   const xhr = new XMLHttpRequest();

   function displayMyImages(responseData) {
      // console.log("llll", responseData);
      let imageArray = JSON.parse(responseData);
      // console.log(imageArray[0])

      

      for (let i = 0; i < imageArray.length; i++) {

         const myElement = document.getElementById("myImage");
         let figureBox = document.createElement("figure");

         myElement.appendChild(figureBox);

       
         let imgSrc = imageArray[i].src;

         let img = document.createElement("IMG");
         img.setAttribute("src", imgSrc);
         figureBox.appendChild(img);

        

      
        

         // let figureCaption = document.createElement("figcaption");
         // figureCaption.textContent = imageArray[i].alt;
         // figureBox.appendChild(figureCaption);


        





         img.addEventListener("click", () => {

            if (imageArray[i].actionURL) {
               console.log("actionURL is", imageArray[i].actionURL);
               fetch(imageArray[i].actionURL)
                  .then(x => x.json())
                  .then(y => openMymodal(y));


            }


         });
         myElement.appendChild(img);



      };


   };





   // Handle the changing request state
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         if (xhr.status >= 200 && xhr.status < 300) {
            // Manage the response
            // console.log("this is a test");
            // console.log("this is a test", xhr.responseText);
            // console.log(xhr.response);
            // console.log(JSON.parse(xhr.response));
            // console.log(JSON.parse(xhr.responseText));


            // let resData = JSON.parse(xhr.responseText);
            // console.log(resData);
            // console.log("1122211", resData[0].src);

            displayMyImages(xhr.responseText)



            // stories.innerHTML = xhr.responseText;

         } else {
            console.log("Request failed: " + xhr.statusText);
         }
      }
   }

   // Open the request and send it
   xhr.open("get", "items.json", true);
   xhr.send();

}