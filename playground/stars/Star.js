function Star(){
   this.x = random(-width, width);
   this.y = random(-height , height);
   this.z = random(width);

   this.update = function(){
       this.z = this.z-speed;

       //come back for reset
       if(this.z < 0){
           this.z = width;
           this.x = random(-width, width);
           this.y = random(-height, height);
       }
   }

this.show = function(){
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    fill(255);
    noStroke();
    ellipse(sx, sy, 8, 8);
}
// Star ist eine Classe. 
}
//veränderung von  x und y position = update