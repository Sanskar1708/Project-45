var background1;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30,w31,w32,w33,w34,w35,w36,w37,w38,w39,w40,w41,w42,w43,w44,w45,w46,w47,w48,w49,w50,w51,w52,w53,w54,w55,w56,w57,w58,w59,w60,w61,w62,w63,w64,w65,w66,w67,w68,w69,w70,w71,w72,w73,w74,w75,w76,w77,w78,w79,w80,w81,w82,w83,w84,w85,w86,w87,w88,w89,w90,w91,w92,w93,w94,w95,w96,w97,w98,w99,w100;
var player1;
var player,form,game;
var playerCount = 0;
var gameState = 0;
var wallGroup;
var database;
var allPlayers = [];

function preload() {
    background1 = loadImage("Images/Maze level 1.png")
    playerImage = loadImage("Images/Player 1.png");

}

function setup(){
    var canvas = createCanvas(2000,1500);
    
    wallGroup = new Group();
    
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
};

function draw(){
    background(255)
    
    if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
  

  // console.log("X : " + mouseX);
  // console.log("Y : " + mouseY);
  
  
}