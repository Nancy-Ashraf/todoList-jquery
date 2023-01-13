$(document).ready(function () {
  
  $(".btn").click(function (event) {
    if (!$(".newGoal").val()) {
      event.preventDefault();
    } else {
      
      //create tds
      let tdEle1 = $("<td><input type='checkbox' class='check'></input></td>");
      let tdEle2 = $("<td></td>");
      let tdEle22 = $(tdEle2).text($(".newGoal").val());
      let tdEle3 = $(
        "<td><button class='delete'><img src='basket.png' width='30px' heigh='30px'/></button></td>"
        );
      let trEle = $("<tr></tr>");
      //create trs
      trEle.append(tdEle1);
      trEle.append(tdEle22);
      trEle.append(tdEle3);
      $(".goalsTable").append(trEle);
      
    } //end else
    
        //delete
        $(".delete").click(function () {
          $(this).parent().parent().hide(1000);   //x.hide(1000) X.show() X.toggle()   //x.fadeIn() x.fadeOut() x.fadeToggle()   //x.slideDown() slideUp() slideToggle    //animate({top:"100px",  width:"100px",});  //stop
    }); //end $(".delete").click
        
        //done
        $(".check").click(function () {
          /*
          //(tdEle22.text()).css("text-decoration","line-through");
          if ($(this).hasClass("checked")) {
            $(this).parent().parent().css("backgroundColor", "white");
            //$(this).removeClass("checked");
            console.log("yess");
        } else {
          */
         //$(this).addClass("checked");
         $(this).parent().parent().css("backgroundColor", "gray");
         console.log("nooo");
         //}
      }); //end $(".check").click
      
  }); //end addButton.click
}); //$(document).ready



/*
  $(".goalsTable").forEach(trEle => {
      });  //end $(".goalsTable").forEach
      */