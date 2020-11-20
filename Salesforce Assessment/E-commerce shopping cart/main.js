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
  
}


$(document).ready(function() {
  $('#container1, #container2, #container3').on('click','.more-info-link', function(event){
    event.preventDefault();
    $(this).parent().find('.more-info').slideToggle('slow');
    $(this).animate({"opacity": 0.5, "margin-left": 10}, 'fast').animate({"opacity": 1.0, "margin-left": 0}, 'fast');
  })

  $('#container1, #container2, #container3').on('click','.item-remove', function(){
    //console.log('Hello');
    $(this).parent().remove();
  });

  

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


});
