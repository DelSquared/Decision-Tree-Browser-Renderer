let w = 2000;
let h = 1000;

function Tree(node_text){
  this.text = node_text;
  this.subnodes = [];
  this.add_subnode = function (node_text){
    this.subnodes.push(new Tree(node_text))
  }
  this.render = function(x, y){
    fill(255);
    stroke(0);
    rect(x-40, y-5, 60, 80);
    fill(0);
    textSize(16);
    text(this.text, x-30, y, 50, 60);
    if (this.subnodes.length > 0){
      line(x, y+55, x, y+65)

      if (this.subnodes.length == 1){
        line(x, y+55, x, y+80);
        this.subnodes[0].render(x, y+80)
      }
      else{
        line(x - 100*this.subnodes.length + 200, y+65, x + 100*this.subnodes.length, y+65)
        for (let i = 0; i < this.subnodes.length; i++){
          line(x - (i - 0.5*this.subnodes.length)*200, y+65,x - (i - 0.5*this.subnodes.length)*200, y+80);
          this.subnodes[i].render(x - (i - 0.5*this.subnodes.length)*200, y+80)
        }
      }

    }

  }
}

function setup() {
  createCanvas(w, h);
  fill(0);
  stroke(0);
  t = new Tree('test'); //example
  t.add_subnode('sub');
  t.add_subnode('sub');
  t.add_subnode('sub');
  t.add_subnode('sub');
  t.add_subnode('sub');
  t.add_subnode('sub');
  t.add_subnode('sub');
  t.add_subnode('sub');
  t.subnodes[0].add_subnode('subsub');
  t.subnodes[0].add_subnode('subsub');
  t.subnodes[0].add_subnode('subsub');
  t.subnodes[0].add_subnode('subsub');
  t.subnodes[0].add_subnode('subsub');
}

function draw() {
  background(255);
  t.render(w/2, 30);
}
