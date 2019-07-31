function changecolor(){
    var getText=document.getElementById("myschool");
    if(getText.style.color=="white"){
        getText.style.color="red";
    }
    else {
        getText.style.color="white";
    }

}

function changetoitalic(){
var x =document.getElementById("textStyle");
if(x.style.fontStyle=="italic"){
    x.style.fontStyle="normal";
}
else {
    x.style.fontStyle="italic";
}
}


function changetounder(){
var x =document.getElementById("textStyle");
if(x.style.textDecoration=="underline"){
    x.style.textDecoration="normal";
}
else {
    x.style.textDecoration="underline";
}
}


function changetounder(){
    var x =document.getElementById("textStyle");
    if(x.style.textDecoration=="underline"){
        x.style.textDecoration="normal";
    }
    else {
        x.style.textDecoration="underline";
    }
    }
    



        // function changefonction(){
        //     var x =document.getElementById("textStyle");
        //     if(x.style.fontSize=="20px"){
        //         x.style.fontSize="normal";
        //     }
        //     else {
        //         x.style.fontSize="20px";
        //     }
        //     }
            


function changesize(){
    document.getElementById("textStyle").style.fontSize = document.getElementById("optionSelect").value  
}


function changearial(){
    document.getElementById("textStyle").style.fontFamily = document.getElementById("fontStyle").value  
}



$( document ).ready(function() {
    $("#ind").mouseenter(function(){
            $('#ind-btn').show()
            $("#ind").css("opacity","0.5")
        })  
        $("#ind").mouseleave(function(){
            $('#ind-btn').hide()
            $("#ind").css("opacity","1")
        
    })
})
$( document ).ready(function() {
    $("#web").mouseenter(function(){
            $('#ben').show()
            $("#web").css("opacity","0.5")
        })  
        $("#web").mouseleave(function(){
            $('#ben').hide()
             $("#web").css("opacity","1")
        });
    })
    $( document ).ready(function() {

    })
        $("#intr").mouseenter(function(){
                $('#ho').show()
                $("#intr").css("opacity","0.5")
               

            })  
            $("#intr").mouseleave(function(){
                $('#ho').hide()
                $("#intr").css("opacity","1")
            });
      
       


   