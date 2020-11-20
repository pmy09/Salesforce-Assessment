

$(document).ready(function() {
    $(document).on('click','.more-info-link', function(event){
      event.preventDefault();
      //$(this).parent().find('.more-info').toggle('fast');
      //$(this).parent().find('.more-info').fadeToggle('slow');
      $(this).parent().find('.more-info').slideToggle('slow');
      $(this).animate({"opacity": 0.5, "margin-left": 10}, 'fast').animate({"opacity": 1.0, "margin-left": 0}, 'fast');
    })

    $('body').on('click', '.item-add', function(){
      alert('added to cart')
      
      let pics = $(this).parent().data('pic');
      let pic = `<img src=`+'"'+pics+'"'+`></img>`;
      // let pic = 'a';
      var name = $(this).parent().children().first().data('name');
      var data = $("#data").val();
      let price = $(this).parent().children().first().next().next().data('price');
      let value = price * data;
      // console.log(pic, name, data, value);
      
      localStorage.setItem('pic', pic);
      localStorage.setItem('name', name);
      localStorage.setItem('data', data);
      localStorage.setItem('value', value);
      console.log(localStorage.getItem('name1'));
      console.log(localStorage)
      doShowAll();
    });

    $('body').on('click', '.item-add1', function(){
      alert('added to cart')
      
      let pics = $(this).parent().data('pic');
      let pic1 = `<img src=`+'"'+pics+'"'+`></img>`;
      // let pic = 'a';
      var name1 = $(this).parent().children().first().data('name');
      var data1 = $("#data").val();
      let price1 = $(this).parent().children().first().next().next().data('price');
      let value1 = price1 * data1;
      // console.log(pic, name, data, value);
      
      localStorage.setItem('pic1', pic1);
      localStorage.setItem('name1', name1);
      localStorage.setItem('data1', data1);
      localStorage.setItem('value1', value1);
      
      console.log(localStorage)
      doShowAll();
    });

    $('body').on('click', '.item-add2', function(){
      alert('added to cart')
      
      let pics = $(this).parent().data('pic');
      let pic2 = `<img src=`+'"'+pics+'"'+`></img>`;
      // let pic = 'a';
      var name2 = $(this).parent().children().first().data('name');
      var data2 = $("#data").val();
      let price2 = $(this).parent().children().first().next().next().data('price');
      let value2 = price2 * data2;
      // console.log(pic, name, data, value);
      
      localStorage.setItem('pic2', pic2);
      localStorage.setItem('name2', name2);
      localStorage.setItem('data2', data2);
      localStorage.setItem('value2', value2);
      
      console.log(localStorage)
      doShowAll();
    });

    $('body').on('click', '.item-add3', function(){
      alert('added to cart')
      
      let pics = $(this).parent().data('pic');
      let pic3 = `<img src=`+'"'+pics+'"'+`></img>`;
      // let pic = 'a';
      var name3 = $(this).parent().children().first().data('name');
      var data3 = $("#data").val();
      let price3 = $(this).parent().children().first().next().next().data('price');
      let value3 = price3 * data3;
      // console.log(pic, name, data, value);
      
      localStorage.setItem('pic3', pic3);
      localStorage.setItem('name3', name3);
      localStorage.setItem('data3', data3);
      localStorage.setItem('value3', value3);
      doShowAll();
    });

    $('body').on('click', '.item-add4', function(){
      alert('added to cart')
      
      let pics = $(this).parent().data('pic');
      let pic4 = `<img src=`+'"'+pics+'"'+`></img>`;
      // let pic = 'a';
      var name4 = $(this).parent().children().first().data('name');
      var data4 = $("#data").val();
      let price4 = $(this).parent().children().first().next().next().data('price');
      let value4 = price4 * data4;
      // console.log(pic, name, data, value);
      
      localStorage.setItem('pic4', pic4);
      localStorage.setItem('name4', name4);
      localStorage.setItem('data4', data4);
      localStorage.setItem('value4', value4);
      doShowAll();
    });

    $('body').on('click', '.item-add5', function(){
      alert('added to cart')
      
      let pics = $(this).parent().data('pic');
      let pic5 = `<img src=`+'"'+pics+'"'+`></img>`;
      // let pic = 'a';
      var name5 = $(this).parent().children().first().data('name');
      var data5 = $("#data").val();
      let price5 = $(this).parent().children().first().next().next().data('price');
      let value5 = price5 * data5;
      // console.log(pic, name, data, value);
      
      localStorage.setItem('pic5', pic5);
      localStorage.setItem('name5', name5);
      localStorage.setItem('data5', data5);
      localStorage.setItem('value5', value5);
      doShowAll();
    });

    $('body').on('click', '.item-add6', function(){
      alert('added to cart')
      
      let pics = $(this).parent().data('pic');
      let pic6 = `<img src=`+'"'+pics+'"'+`></img>`;
      // let pic = 'a';
      var name6 = $(this).parent().children().first().data('name');
      var data6 = $("#data").val();
      let price6 = $(this).parent().children().first().next().next().data('price');
      let value6 = price6 * data6;
      // console.log(pic, name, data, value);
      
      localStorage.setItem('pic6', pic6);
      localStorage.setItem('name6', name6);
      localStorage.setItem('data6', data6);
      localStorage.setItem('value6', value6);
      doShowAll();
    });

    $('body').on('click', '.item-add7', function(){
      alert('added to cart')
      
      let pics = $(this).parent().data('pic');
      let pic7 = `<img src=`+'"'+pics+'"'+`></img>`;
      // let pic = 'a';
      var name7 = $(this).parent().children().first().data('name');
      var data7 = $("#data").val();
      let price7 = $(this).parent().children().first().next().next().data('price');
      let value7 = price7 * data7;
      // console.log(pic, name, data, value);
      
      localStorage.setItem('pic7', pic7);
      localStorage.setItem('name7', name7);
      localStorage.setItem('data7', data7);
      localStorage.setItem('value7', value7);
      doShowAll();
    });

    $('body').on('click', '.item-add8', function(){
      alert('added to cart')
      
      let pics = $(this).parent().data('pic');
      let pic8 = `<img src=`+'"'+pics+'"'+`></img>`;
      // let pic = 'a';
      var name8 = $(this).parent().children().first().data('name');
      var data8 = $("#data").val();
      let price8 = $(this).parent().children().first().next().next().data('price');
      let value8 = price8 * data8;
      // console.log(pic, name, data, value);
      
      localStorage.setItem('pic8', pic8);
      localStorage.setItem('name8', name8);
      localStorage.setItem('data8', data8);
      localStorage.setItem('value8', value8);
      doShowAll();
    });


    

    // $('body').on('click', '.item-add', function(){
    //   let pic = $(this).parent().data('pic');
    //   // let id = $(this).parent().children().first().data('name');
    //   let name = $(this).parent().children().first().data('name');
    //   let price = $(this).parent().children().first().next().next().data('price');
    //   // let pic = $(this).parent().siblings().children().children().first().data('pic');
    //   let value = price;
    //   console.log(name, price, pic);
    //   // console.log(id)

    //   let html= '';
    //   html += '<div class="item" data-id="id">';
    //   html += '<div class="name">'+name+'</div>';
    //   html += `<img src=`+'"'+pic+'"'+`></img>`;
    //   html += '<div class="description">description</div>';
    //   html += '<div class="price">'+'GHC '+ price +'</div>';
    //   html += '<label for="product-quantity-select">Quantity</label>';
    //   html += '<input type="number" id="product-quantity-select" name="products[0395][quantity]" size="3" min="0" value="1">';
     

    //   localStorage.setItem((name, value),(pic));
    //   // $('.cash').prepend(html);
    //   console.log(localStorage);
      
      
    // });
})

// function SaveItem() {
//   alert('saved')
//   let pic = $(this).parent().data('pic');
//   var name = $(this).parent().children().first().data('name');
//   var data = $("#data").val();
//   let price = $(this).parent().children().first().next().next().data('price');
//   let value = price;
//   // console.log(pic, name, data, value);
//   localStorage.setItem(pic, name, data, value);
//   doShowAll();
// }


// $('body').on('click', '.item-add', function(){
//   var name = $(".name").val();
//   var data = $("#data").val();
//   console.log(name, data);
//   localStorage.setItem(name, data);
//   doShowAll();
// });








// var list = "<tr><th>Item</th><th>Value</th></tr>\n";

// $(window).load(function() {
//   doShowAll();
// });

// window.load=doShowAll();

function CheckBrowser() {
  if ('localStorage' in window && window['localStorage'] !== null) {
      // We can use localStorage object to store data.
      return true;
  } else {
          return false;
  }
}

function doShowAll() {
  if (CheckBrowser()) {
      // var key = "";
      var list = "<tr><th>Item</th><th>Name</th><th>Quantity</th><th>Value</th></tr>\n";
      
      var i = 0;
      //For a more advanced feature, you can set a cap on max items in the cart.
      // for (i = 0; i <= localStorage.length-1; i++) {
          var pic = localStorage.getItem('pic');
          var name = localStorage.getItem('name');
          var quantity = localStorage.getItem('data');
          var value = localStorage.getItem('value');

          var pic1 = localStorage.getItem('pic1');
          var name1 = localStorage.getItem('name1');
          var quantity1 = localStorage.getItem('data1');
          var value1 = localStorage.getItem('value1');
          
          var pic2 = localStorage.getItem('pic2');
          var name2 = localStorage.getItem('name2');
          var quantity2 = localStorage.getItem('data2');
          var value2 = localStorage.getItem('value2');

          var pic3 = localStorage.getItem('pic3');
          var name3 = localStorage.getItem('name3');
          var quantity3 = localStorage.getItem('data3');
          var value3 = localStorage.getItem('value3');

          var pic4 = localStorage.getItem('pic4');
          var name4 = localStorage.getItem('name4');
          var quantity4 = localStorage.getItem('data4');
          var value4 = localStorage.getItem('value4');

          var pic5 = localStorage.getItem('pic5');
          var name5 = localStorage.getItem('name5');
          var quantity5 = localStorage.getItem('data5');
          var value5 = localStorage.getItem('value5');

          var pic6 = localStorage.getItem('pic6');
          var name6 = localStorage.getItem('name6');
          var quantity6 = localStorage.getItem('data6');
          var value6 = localStorage.getItem('value6');

          var pic7 = localStorage.getItem('pic7');
          var name7 = localStorage.getItem('name7');
          var quantity7 = localStorage.getItem('data7');
          var value7 = localStorage.getItem('value7');

          var pic8 = localStorage.getItem('pic8');
          var name8 = localStorage.getItem('name8');
          var quantity8 = localStorage.getItem('data8');
          var value8 = localStorage.getItem('value8');


          // list += "<tr><td>" + pic + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
          list += "<tr><td>" + pic + "</td>\n<td>" + name + "</td>\n<td>" + quantity + "</td>\n<td>" + value +"</td></tr>\n";
          // console.log(key,data)
      // }
      //If no item exists in the cart.
      if (list == "<tr><th>Item</th><th>Name</th><th>Quantity</th><th>Value</th></tr>\n") {
          list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
      }
      if (list !== "<tr><th>Item</th><th>Name</th><th>Quantity</th><th>Value</th></tr>\n") {
          list += "<tr><td>" + pic1 + "</td>\n<td>" + name1 + "</td>\n<td>" + quantity1 + "</td>\n<td>" + value1 +"</td></tr>\n";
      }
      if (list !== "<tr><th>Item</th><th>Name</th><th>Quantity</th><th>Value</th></tr>\n") {
        list += "<tr><td>" + pic2 + "</td>\n<td>" + name2 + "</td>\n<td>" + quantity2 + "</td>\n<td>" + value2 +"</td></tr>\n";
      }
      if (list !== "<tr><th>Item</th><th>Name</th><th>Quantity</th><th>Value</th></tr>\n") {
        list += "<tr><td>" + pic3 + "</td>\n<td>" + name3 + "</td>\n<td>" + quantity3 + "</td>\n<td>" + value3 +"</td></tr>\n";
      }
      if (list !== "<tr><th>Item</th><th>Name</th><th>Quantity</th><th>Value</th></tr>\n") {
        list += "<tr><td>" + pic4 + "</td>\n<td>" + name4 + "</td>\n<td>" + quantity4 + "</td>\n<td>" + value4 +"</td></tr>\n";
      }
      if (list !== "<tr><th>Item</th><th>Name</th><th>Quantity</th><th>Value</th></tr>\n") {
        list += "<tr><td>" + pic5 + "</td>\n<td>" + name5 + "</td>\n<td>" + quantity5 + "</td>\n<td>" + value5 +"</td></tr>\n";
      }
      if (list !== "<tr><th>Item</th><th>Name</th><th>Quantity</th><th>Value</th></tr>\n") {
        list += "<tr><td>" + pic6 + "</td>\n<td>" + name6 + "</td>\n<td>" + quantity6 + "</td>\n<td>" + value6 +"</td></tr>\n";
      }
      if (list !== "<tr><th>Item</th><th>Name</th><th>Quantity</th><th>Value</th></tr>\n") {
        list += "<tr><td>" + pic7 + "</td>\n<td>" + name7 + "</td>\n<td>" + quantity7 + "</td>\n<td>" + value7 +"</td></tr>\n";
      }
      if (list !== "<tr><th>Item</th><th>Name</th><th>Quantity</th><th>Value</th></tr>\n") {
        list += "<tr><td>" + pic8 + "</td>\n<td>" + name8 + "</td>\n<td>" + quantity8 + "</td>\n<td>" + value8 +"</td></tr>\n";
      }

      let Vals = [value, value1, value2, value3, value4, value5, value6, value7, value8];
      let total = 0;
      for (i = 0; i <= Vals.length-1; i++) {
        var val = Vals[i];
        if (val != null){
          total += parseInt(val)
        }
      }
      $('#cart-total').html(total.toFixed(2));
      // console.log(total);
      //Bind the data to HTML table.
      //You can use jQuery, too.
      document.getElementById('list').innerHTML= list;
  } else {
      alert('Cannot save shopping list as your browser does not support HTML 5');
  }


  $('.promo-code-cta').click(function() {
    var promoPrice;
    promoCode = $('#promo-code').val();
    var tot = document.getElementById('cart-total').innerHTML;

    if (promoCode == 'mch50' || promoCode == 'MCH50') {
      //If promoPrice has no value, set it as 10 for the 10OFF promocode
      if (!promoPrice) {
        promoPrice = 10;
        revTotal = tot * 0.5;
        $('#cart-total').html(revTotal.toFixed(2));
      } else if (promoCode) {
        promoPrice = 1;
      }
    } else if (promoCode != '') {
      alert("Invalid Promo Code");
      promoPrice = 1;
    }
    
    $('.promo-code-cta').attr('disabled','disabled');
    
  })

}

// function SaveItem() {
//   var name = $("#name").val();
//   var data = $("#data").val();
//   localStorage.setItem(name, data);
//   doShowAll();
// }

// function ModifyItem() {
//   let pics = $(this).parent().data('pic');
//   let pic1= `<img src=`+'"'+pics+'"'+`></img>`;
//   var name1 = $(this).parent().children().first().data('name');
//   var data1 = $("#data").val();
//   let price1 = $(this).parent().children().first().next().next().data('price');
//   let value1 = price1 * data1;
//   //Check if name already exists.
// //Check if key exists.
//        if (localStorage.getItem('name1') ==null)
//        {
//          //update
//         localStorage.setItem('pic1', pic1);
//         localStorage.setItem('name1', name1);
//         localStorage.setItem('data1', data1);
//         localStorage.setItem('value1', value1);
//         //  var new_info=localStorage.getItem(name1);
//         //  $("#data").val(new_info);
//         var pic = localStorage.getItem('pic1');
//         var name = localStorage.getItem('name1');
//         var quantity = localStorage.getItem('data1');
//         var value = localStorage.getItem('value1');
//         list += "<tr><td>" + pic + "</td>\n<td>" + name + "</td>\n<td>" + quantity + "</td>\n<td>" + value +"</td></tr>\n";
//         document.getElementById('list').innerHTML= list
//        }

//   doShowAll();
// }









function RemoveItem() {
  var name1 = $("#name").val();
  var new_info=localStorage.removeItem(name1);
  $("#data").val(new_info);
  doShowAll();
}

function ClearAll() {
  localStorage.clear();
  doShowAll();
}





