function Drop() {
  this.x = random(width);
  this.y = random(200, -200);
  this.z = random(1, 20);
  this.len = map(this.z, 1, 20, 10, 20);
  this.speed = 10;
  
  this.fall = () => {
    this.y += this.speed;
    
    this.x += wind * map(this.z, 0, 20, 0, 2); //membelokkan hujan ke kiri atau kanan ketika diklik

    if(this.y > height){
    this.y = random(-30);
  }
  
  }

  this.show = () => {
    stroke(100, 100, 255);
    line(this.x, this.y, this.x, this.y + this.len)
  }
}

  
