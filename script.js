 const search = document.querySelector(".search input"),
   images = document.querySelectorAll(".imageBox");

 search.addEventListener("keyup", e => {
   if (e.key == "Enter") {
     let searcValue = search.value,
       value = searcValue.toLowerCase();

     images.forEach(image => {
       if (value === image.dataset.name) {
         return (image.style.display = "block");
       }

       image.style.display = "none";
     });
     // console.log(value1)
   }
 });
