var cart = 0;

function addItem(id, name, image, description, price, moreInfo, container){
  let html= '';
  html += '<div class="item" data-id="' + id + '">';
  html += '<div class="name">'+ name + '</div>';
  html += `<img src=`+ image +`></img>`;
  html += '<div class="description">'+ description +'</div>';
  html += '<div class="price">'+ price +'</div>';
  html += '<button class="item-add">Add to cart</button>';
  html += '<button class="item-remove">Remove</button>';
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
    $(this).parent().remove();
  });

  $.ajax('data/item.json',{
    dataType: 'json',
    contentType: 'application/json',
    cache: false
  }).done(function(response){
    console.log(response);
    let items1 = response.items1;
    let items2 = response.items2;
    let items3 = response.items3;
    let c1 = $('#container1');
    let c2 = $('#container2');
    let c3 = $('#container3');
    items1.forEach(function(item){
      addItem(item.id, item.name, item.image, item.description, item.price, item.moreInfo, c1);
    });
    items2.forEach(function(item){
      addItem(item.id, item.name, item.image, item.description, item.price, item.moreInfo, c2);
    });
    items3.forEach(function(item){
      addItem(item.id, item.name, item.image, item.description, item.price, item.moreInfo, c3);
    });

  }).fail(function(request, errorType, errorMessage){
    console.log(errorMessage);
  }).always(function(){
});


  $('#container1, #container2, #container3').on('click', '.item-add', function(){
    let id = $(this).parent().data('id');
    if (id === 1000 || id === 1001 || id === 1002){
      let price = 1000;
      cart += price;
      $('#cart-container').text('$' + cart);
    }
    if (id === 1003 || id === 1004 || id === 1005){
      let price = 3000;
      cart += price;
      $('#cart-container').text('$' + cart);
    }
    if (id === 1006 || id === 1007 || id === 1008){
      let price = 100000;
      cart += price;
      $('#cart-container').text('$' + cart);
    }
  });


  $('#sign-up').on('click', function(){
    $('#cart-form').fadeIn();
  })


  $('.check-out').on('click', function(){
    let total = $('#cart-container').text();
    alert('Your total charge is ' + total);
  });


  $('#newsletter-checkbox').on('change', function(){
    if ($(this).is(':checked')) {
      console.log('Yes');
      $('#newsletter-frequency').fadeIn();
    }
    else {
      console.log('No');
      $('#newsletter-frequency').fadeOut();
    }
  });
  $('#newsletter-checkbox').trigger('change');


  $('#cart-form').on('submit', function(event){
    event.preventDefault();

    let data = {form: $(this).serialize(), price: cart }

    console.log(data.form);
    console.log(data.price);

    $.ajax($(this).attr('action'), {
      type: 'get',
      data: data
    }).done(function(response){
      alert(data.form + ': ' + response.message);
    })
    $('#cart-form').fadeOut();
  });
});
