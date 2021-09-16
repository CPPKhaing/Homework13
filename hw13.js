$(document).ready(function(){
	
    //$(".card").hide();

    function click(){

    var itemChoice = $(".productName option:selected").text();
    var itemName   = $ ("#pItem").val();
    var stockPrice = $("#pPrice").val();
    var stockValue = $(".stockNo option:selected").text();

    if(itemChoice == bag){

        document.getElementsByClassName("card").style.position = "relative"; 
        $(".bagCard").show(2000);
        $("#bagName").text(itemName);
        $("#bagPrice").text(stockPrice);
        $("#bagStock").text(stockValue);
        $(".product").append();
    }

    if(itemChoice == shoe){

        document.getElementsByClassName("card").style.position = "relative"; 
        $(".shoeCard").show(2000);
        $("#shoeName").text(itemName);
        $("#shoePrice").text(stockPrice);
        $("#shoeStock").text(stockValue);
        $(".product").append();
    }

    if(itemChoice == shirt){

        document.getElementsByClassName("card").style.position = "relative"; 
        $(".shirtCard").show(2000);
        $("#shirtName").text(itemName);
        $("#shirtPrice").text(stockPrice);
        $("#shirtStock").text(stockValue);
        $(".product").append();
    }

    if(itemChoice == sunglasses){

        document.getElementsByClassName("card").style.position = "relative"; 
        $(".glassesCard").show(2000);
        $("#glassestName").text(itemName);
        $("#glassesPrice").text(stockPrice);
        $("#glassesStock").text(stockValue);
        $(".product").append();
    }

    $(".delete").click(function(){

        $(this).remove();
    });

    
    }
});





/*
var name = document.getElementsByClassName("pItem").value;
var catagory = document.getElementsByClassName("productName").value;
var price = document.getElementById("pPrice").value;
var stockNo = document.getElementsByClassName("stockNo").value;

$(document).ready(function(){
	
    $(".btn").click(function(){

        var stockVal = $(".stockNo option:selected").text();
        $("div.stock").text(stockVal);
        
        var stockPrice =  $("#pPrice").val();
        $("div.price").text(stockPrice);
    });

   

});
*/