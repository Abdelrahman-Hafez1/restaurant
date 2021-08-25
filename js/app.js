var US_cont=document.querySelector(".US-cont");
var US=document.querySelectorAll(".US");


US_cont.addEventListener('click',function(e){
    var mark =event.target;
    console.log(mark);
    if(mark.classList.contains('US')){
        US.forEach(function(f){
            f.classList.remove("active");
            mark.classList.add("active");
        
        });
    }
    
});


// menue
var menu_ul=document.querySelector(".menu ul");
var lis=document.querySelectorAll(".menu ul li");
var img=document.querySelectorAll(".img-conta");

menu_ul.addEventListener('click',function(s){
    var mark1=event.target;
    var mark=event.target.dataset.mark;
    if(mark){
        lis.forEach(function(l){
          l.classList.remove("active");
          mark1.classList.add("active");
        });
        img.forEach(function(im){
            im.classList.remove("row");
            im.classList.add("d-none");
            var act=document.getElementById(mark);
            act.classList.add("row")
            act.classList.remove("d-none")
        })
        
    }
});

//buttons
var btn_Right=document.querySelector(".fa-arrow-alt-circle-right");
var btn_Left=document.querySelector(".fa-arrow-alt-circle-left");

var ids=['BreakFast','Lunch','Dinner','Dessert','Soups','Drinks'];

counter=1;

btn_Right.addEventListener('click',function(){
    counter++;
    if(counter==ids.length-1){
        btn_Right.classList.add("d-none")
    }
    btn_Left.classList.remove('d-none');
    var current=document.getElementById(ids[counter]);
    var currentClass=document.querySelector('.'+ids[counter])
    lis.forEach(function(l){
        l.classList.remove("active");
        var act=currentClass;
        act.classList.add("active")
        
      });
    img.forEach(function(im){
        im.classList.remove("row");
         im.classList.add("d-none");
         var act=current;
        
         act.classList.add("row");
         act.classList.remove("d-none");
    })
});
btn_Left.addEventListener('click',function(){
    counter--;
    if(counter==0){
        btn_Left.classList.add("d-none")
    }
    btn_Right.classList.remove('d-none');
    var current=document.getElementById(ids[counter]);
    var currentClass=document.querySelector('.'+ids[counter])
    lis.forEach(function(l){
        l.classList.remove("active");
        var act=currentClass;
        act.classList.add("active")
        
      });
    img.forEach(function(im){
        im.classList.remove("row");
         im.classList.add("d-none");
         var act=current;
        
         act.classList.add("row");
         act.classList.remove("d-none");
    })
});
