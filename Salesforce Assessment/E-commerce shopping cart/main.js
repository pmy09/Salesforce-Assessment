var cart = 0;

function addItem(id, name, image, description, price, link, moreInfo, container){
  let html= '';
  html += '<div class="item" data-id="' + id + '">';
  html += '<div class="name">'+ name + '</div>';
  html += `<img src=`+ image +`></img>`;
  html += '<div class="description">'+ description +'</div>';
  html += '<div class="price">'+'GHC '+ price +'</div>';
  // html += '<button class="item-add">Add to cart</button>';
  // html += '<button class="item-remove">Remove</button>';
  html += `<a href="`+ link +`"><span class="shop-name">View</span></a>`
  html += '<br/>';
  html += '<a class="more-info-link" href="#">More info</a>';
  html += '<div class="more-info">'+ moreInfo +'</div>';
  html += '</div>';

  $(container).prepend(html);
  // $('#container1').prepend(html);
  // $('#container2').prepend(html);
  // $('#container3').prepend(html);
}


$(document).ready(function() {
  $('#container1, #container2, #container3').on('click','.more-info-link', function(event){
    event.preventDefault();
    //$(this).parent().find('.more-info').toggle('fast');
    //$(this).parent().find('.more-info').fadeToggle('slow');
    $(this).parent().find('.more-info').slideToggle('slow');
    $(this).animate({"opacity": 0.5, "margin-left": 10}, 'fast').animate({"opacity": 1.0, "margin-left": 0}, 'fast');
  })

  $('#container1, #container2, #container3').on('click','.item-remove', function(){
    //console.log('Hello');
    $(this).parent().remove();
  });

  // $.ajax('data/item.json',{
  //   dataType: 'json',
  //   contentType: 'application/json',
  //   cache: false
  // }).done(function(response){
  //   console.log(response);
  //   let items = response.items1;
  //   let c1 = $('#container1')
  //   console.log(c1);
  //   items.forEach(function(item){
  //     //console.log(item);
  //     addItem(item.id, item.name, item.description, item.price, item.moreInfo, c1);

  //   });

  // }).fail(function(request, errorType, errorMessage){
  //   console.log(errorMessage);
  // }).always(function(){

  // });

  // $.ajax('data/item.json',{
  //   dataType: 'json',
  //   contentType: 'application/json',
  //   cache: false
  // }).done(function(response){
  //   //console.log(response);
  //   let items = response.items2;
  //   let c2 = $('#container2')
  //   //console.log(items);
  //   items.forEach(function(item){
  //     //console.log(item);
  //     addItem(item.id, item.name, item.description, item.price, item.moreInfo, c2);

  //   });

  // }).fail(function(request, errorType, errorMessage){
  //   console.log(errorMessage);
  // }).always(function(){

  // });

  // $.ajax('data/item.json',{
  //   dataType: 'json',
  //   contentType: 'application/json',
  //   cache: false
  // }).done(function(response){
  //   //console.log(response);
  //   let items = response.items3;
  //   let c3 = $('#container3')
  //   //console.log(items);
  //   items.forEach(function(item){
  //     //console.log(item);
  //     addItem(item.id, item.name, item.description, item.price, item.moreInfo, c3);

  //   });

  // }).fail(function(request, errorType, errorMessage){
  //   console.log(errorMessage);
  // }).always(function(){

  // });

  $.ajax('data/item.json',{
    dataType: 'json',
    contentType: 'application/json',
    cache: false
  }).done(function(response){
    console.log(response);
    let items1 = response.items1;
    console.log(items1)
    let items2 = response.items2;
    let items3 = response.items3;
    let c1 = $('#container1');
    let c2 = $('#container2');
    let c3 = $('#container3');
    items1.forEach(function(item){
      addItem(item.id, item.name, item.image, item.description, item.price, item.link, item.moreInfo, c1);
    });
    items2.forEach(function(item){
      addItem(item.id, item.name, item.image, item.description, item.price, item.link, item.moreInfo, c2);
    });
    items3.forEach(function(item){
      addItem(item.id, item.name, item.image, item.description, item.price, item.link, item.moreInfo, c3);
    });

  }).fail(function(request, errorType, errorMessage){
    console.log(errorMessage);
  }).always(function(){

  });

  // $('#same-as-billing').on('checked', function(){
  //   $('#fieldset-shipping').css('display', 'none');
  // });

  // if ($('#same-as-billing').isChecked()){
  //   $('#fieldset-shipping').css('display', 'none');
  // }

  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      $('#fieldset-shipping').css('display', 'none');
    }
    else if($(this).is(":not(:checked)")){
      $('#fieldset-shipping').css('display', 'block');
    }
  })

  $('body').on('click', '.check-btn', function(event){
    event.preventDefault();
  })



  // $('#container1, #container2, #container3').on('click', '.item-add', function(){
  //   let id = $(this).parent().data('id');
  //   console.log(id);
  //   $.ajax('data/addToCart.json', {
  //     type: 'get',
  //     data: {id: id },
  //     dataType: 'json',
  //     contentType: 'application/json'
  //   }).done(function(response){
  //     console.log(response);
  //     if (response.message === 'success'){
  //       let price = response.price;
  //       console.log(price);
  //       cart += price;

  //       $('#cart-container').text('$' + cart);
  //     }
  //   });
  // });

  // $('#container1, #container2, #container3').on('click', '.item-add', function(){
  //   let id = $(this).parent().data('id');
  //   if (id === 1000 || id === 1001 || id === 1002){
  //     let price = 1000;
  //     cart += price;
  //     $('#cart-container').text('$' + cart);
  //   }
  //   if (id === 1003 || id === 1004 || id === 1005){
  //     let price = 3000;
  //     cart += price;
  //     $('#cart-container').text('$' + cart);
  //   }
  //   if (id === 1006 || id === 1007 || id === 1008){
  //     let price = 100000;
  //     cart += price;
  //     $('#cart-container').text('$' + cart);
  //   }
  // });
  
  // $('#container1, #container2, #container3').on('click', '.item-add', function(){
  //   const cartInfo=document.getElementById('cart');
  //   const cart=document.getElementById('content');
  //   console.log(cart);
  //   cartInfo.addEventListener('click',function(){
  //     cart.classList.toggle('show-cart');
  //   });

  //   const cartBtn=document.querySelectorAll('item-add');
  //   cartBtn.forEach(function(btn){

  //     btn.addEventListener('click',function(event){
  //       console.log(event.target);
    //     if(event.target.parentElement.classList.contains('store-item-icon'))
    //       {
    //         let fullPath=(event.target.parentElement.previousElementSibling.src);
    //         let pos=fullPath.indexOf("img")+3;
    //         let partialPath=fullPath.slice(pos);
                    
    //         //console.log(partialPath);
                    
    //         const item={};
    //         item.img=`img-cart${partialPath}`;
    //         let name=event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
    //         item.name=name;
                    
    //         let price=event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
    //         let finalPrice=price.slice(1).trim();
    //         item.price=finalPrice
    //         //console.log(finalPrice);
                    
    //         //console.log(item);
                    
                    
    //         const cartItem=document.createElement('div');
    //         cartItem.classList.add('cart-item','d-flex','justify-content-between','text-capitalize','my-3');
                    
    //         cartItem.innerHTML=`
                    
    //         <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
    //           <div class="item-text">

    //             <p id="cart-item-title" class="font-weight-bold mb-0"> ${item.name}</p>
    //             <span>$</span>
    //             <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
    //           </div>
    //           <a href="#" id='cart-item-remove' class="cart-item-remove">
    //             <i class="fas fa-trash"></i>
    //           </a>
    //         </div>
    //         `;
                    
    //         //select cart
    //         const cart=document.getElementById('cart');
    //         const total=document.querySelector('.cart-total-container');
                    
    //         cart.insertBefore(cartItem,total);
    //         alert( `${item.name} added to cart`);
    //         //alert('Item added to cart')
    //         showTotals();
                    
    //             }

      // });
    // });

//  });

});
