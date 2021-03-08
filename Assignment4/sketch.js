let table;
let headers = [];
let entries = [];


function preload(){
  table = loadTable('assets/data.csv', 'csv', 'header' );
  headers=[table.columns[1], table.columns[2], table.columns[3], table.columns[4]]
}

function setup(){
  createCanvas(1400,1400);
  for (var rowCount= 0; rowCount<table.getRowCount(); rowCount++){
    for (var colCount = 0; colCount <table.getColumnCount()-1; colCount++){
      if(table.getString(rowCount, 3)=="Pop/ Alt" || table.getString(rowCount, 3) =="Hip Hop/ Rap/ Lofi"){
        entries.push(new Taste(random(100,500), random(100,500), table.getString(rowCount, 2),table.getString(rowCount, 1),   this.col = (color(178,132,190))));
      }
      else{
        entries.push(new Taste(random(100,500), random(100, 500), table.getString(rowCount, 2), table.getString(rowCount, 1), this.col = (color(55,114,190))));
      }

    }
  }
}

function draw(){
  background (255);
  for (var i =0; i<entries.length; i++){
    entries[i].display();
  }




}
class Taste {
  constructor (x, y, name, s, color ){
    this.posX = x;
    this.posY = y;
    this.name = name;
    this.size = int(s);
    this.col = color;
  }
  display(){
    fill(this.col);
    square(this.posX, this.posY, this.size*7);
    textSize(this.size*.75);
    fill(0);
    text(this.name, this.posX +(this.size/2), this.posY+(this.size*2),this.posX+this.size/2, this.posY+this.size/2);
  }

}


class Popular extends Taste{
  constructor (x,y, name,s){
    super();
    this.col = (color(178,132,190));
  }


}

class UnderGround extends Taste{
  constructor(x,y,name,s){
    super();
    this.col = (color(178,132,190));
  }
  display(){
    fill(this.col);
    square(this.posX, this.posY, this.size);
  }
}
