document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelector('.items');
    async function fetchItems(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();

            for (let j = 0; j < response.length; j++) {
                let description = response[j].description;
                let title = response[j].title;
                items.innerHTML += `
       <div class="item">
           <img src="${response[j].images[1]}" alt="${
          response[j].category.name
        }" class="item-img">
           <div class="item-content">
           <h2 class="item-title">${
             title.length > 18 ? title.substring(0, 18).concat(' ...') : title
           }</h2>
           <h4 class="item-category">${response[j].category.name}</h4>
           <p class="item-page">${
             description.length > 80
               ? description.substring(0, 80).concat(' ...more')
               : description
           }</p>
           <div class="item-cost-space">
               <h3 class="item-cost">$${response[j].price}</h3>
               <a href="#!" data-itemId="${
                 response[j].id
               }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
           </div>
           </div>
          
       </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchItems('https://api.escuelajs.co/api/v1/products');
});