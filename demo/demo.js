$(document).ready(function(){
    var productData = [];
    var categoriesSet = new Set(); 
    $.get("demo.json", function(product) {
        productData = product;
    
      (function() {
            for (var product of productData) {
              categoriesSet.add(product.category);
            }
            var parentListItem = document.getElementById("navTabs");
            for (var item of categoriesSet) {
              var childListItem = document.createElement("li");
              childListItem.innerHTML = item;
              parentListItem.appendChild(childListItem);
            }
          }());
        });
});



