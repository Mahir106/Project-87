var canvas = new fabric.Canvas("My_Canvas");
ctx = canvas.getContext("2d");

player_X = 10;
player_Y = 10;

block_img_width = 30;
block_img_height = 30;
var player_Object = "";
var block_img_object = "";

function player_Update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_Object = Img;
        player_Object.scaleToWidth(150);
        player_Object.scaleToHeight(150);
        player_Object.set({
            top: player_Y,
            left: player_X
        });
        canvas.add(player_Object);
    })
}

function new_Image(get_Image) {
    fabric.Image.fromURL(get_Image, function (Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_Y,
            left: player_X
        });
        canvas.add(block_img_object);
    })
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){ 
    keyPressed = e.keyCode;
    console.log(keyPressed);
   if(e.shiftKey == true && keyPressed== "80"){
       console.log("shiftkey and p pressed together");
       block_img_width=block_img_width+10;
       block_img_height=block_img_height+10;
       document.getElementById("current_width").innerHTML= block_img_width;
       document.getElementById("current_height").innerHTML= block_img_height;
   }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("shiftkey and m pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(keyPressed == "70"){
        new_Image("ironman_face.png");
        console.log("f");
    }
    if(keyPressed == "66"){
        new_Image("spiderman_body.png");
        console.log("b");
    }
    if(keyPressed == "76"){
        new_Image("hulk_legs.png");
        console.log("l");
    }
    if(keyPressed == "82"){
        new_Image("thor_right_hand.png");
        console.log("r");
    }
    if(keyPressed == "72"){
        new_Image("captain_america_left_hand.png");
        console.log("h");
    }
    if(keyPressed == "38"){
       up();
       console.log("up");
    }
    if(keyPressed == "40"){
        down();
        console.log("down");
     }
     if(keyPressed == "37"){
        left();
        console.log("left");
     }
     if(keyPressed == "39"){
        right();
        console.log("right");
     }
}