//Create variables here

function preload()
{
	dog1Img=loadImage("images/dogImg.png")
  dog2Img=loadImage("images/dogImg1.png")
  //load images here
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
   foodStock=database.ref('food')
    foodStock.on("value",readStock) 
    dog = createSprite(250, 250, 50, 50); 
    dog.addImage(dog1Img) 
    dog.scale=0.1;                             
}


function draw() {  
background("green")
  if(keyWentDown(UP_ARROW)){ 
    foodS=foodS-1 
    writeStock(foodS) 
    dog.addImage(dog2Img) 
  } 
     drawSprites();
  text("Note: Press UP_ARROW Key To Feed The Drago Milk",100, 100)

  //add styles here

}
function readStock(data){ 
  foodS=data.val(); 
  console.log(foodS) }
   function writeStock(x){ 
     database.ref('/').update({
        food:x 
      })
     }




