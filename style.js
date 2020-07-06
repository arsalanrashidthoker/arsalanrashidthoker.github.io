$(function(){
    var i = 0;
    var j= 0;
    var m= 0;
    var txt = 'Design  Develop & Deliver'; /* The text */
    var speed = 100; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
      if(j < 7) {
        document.getElementById("work").innerHTML += txt.charAt(i);
        i++;
        j++;
        setTimeout(typeWriter, speed);
      }
      else if(j>6 && j< 15){
          if(j==7){$("span#work").append('<br>');}
         // document.getElementById("work").innerHTML -= innerHTML.charAt(5);
         var neww = 'Develop';
         var char = neww.charAt(m);
         $("span#work").append(char);
          i--;
          j++;
          m++;
          setTimeout(typeWriter, speed);
      }
      else if(j>14 && j<23){
          if(j==15){$("span#work").append('<br>');m=0;}
         // document.getElementById("work").innerHTML -= innerHTML.charAt(5);
         var neww = 'Deliver';
         var char = neww.charAt(m);
         $("span#work").append(char);
          i--;
          j++;
          m++;
          setTimeout(typeWriter, speed);
      }
    }
    /*$("span#work").mouseover(function(){
        typeWriter();
    });*/
    typeWriter();
    if(window.innerWidth < 900){
        $("li>a").hide();
    }
    $("li.menu").click(function(){
        $("li>a").slideToggle();
    });

});
