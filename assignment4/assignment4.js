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

   let percentage = 1;
   function progessbar(i){

      let picAraary = JSON.parse(xhr.responseText);
      let number = picAraary.length-1; 
      console.log("mynumber", i)
      percentage = i/number*100;
      var elem = document.getElementById("myBar");
      elem.style.width = percentage + "%";
   }


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


      let title = document.createElement("div");
      title.classList.add('title');
      title.textContent = y.title;
      figureBox.appendChild(title);


      let figureCaption = document.createElement("figcaption");
      figureCaption.textContent = y.description;
      figureBox.appendChild(figureCaption);

      const price = document.createElement('div');
      price.classList.add('price');
      price.innerText = "$"+y.price;
      figureBox.appendChild(price);




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

         let imgSrc = imageArray[i].src;
         let imgalt = imageArray[i].alt;
         let imgprice = "$"+imageArray[i].price;
         let imgdescription = imageArray[i].description;
         let imgactionLabel = imageArray[i].actionLabel;

         var img = document.createElement("IMG");
         img.setAttribute("src", imgSrc);


         const imageContainer = document.createElement('div');
         imageContainer.classList.add('image-container');

         imageContainer.appendChild(img);


         const title = document.createElement('div');
         title.classList.add('title');
         title.innerText = imgalt;
         imageContainer.appendChild(title);

         
         const price = document.createElement('div');
         price.classList.add('price');
         price.innerText = imgprice;
         imageContainer.appendChild(price);

         const description = document.createElement('div');
         description.classList.add('description');
         description.innerText = imgdescription;
         imageContainer.appendChild(description);

         if (imgactionLabel){ const actionLabel = document.createElement('div');
         actionLabel.classList.add('actionLabel');
         actionLabel.innerText = imgactionLabel;
         imageContainer.appendChild(actionLabel);
         actionLabel.addEventListener("click", myfetch);
}

        
         setTimeout(loadImage, 1000*i);
        

         function loadImage()
         {myElement.appendChild(imageContainer);
            progessbar(i);}
         

       


         img.addEventListener("click", myfetch);

         function myfetch()
         {
            if (imageArray[i].actionURL) {
               // console.log("actionURL is", imageArray[i].actionURL);
               fetch(imageArray[i].actionURL)
                  .then(x => x.json())
                  .then(y => openMymodal(y));

         }


      };


   };


}




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