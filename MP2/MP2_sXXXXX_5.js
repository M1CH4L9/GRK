function preload() {
  img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/astronaut.png");
}

function setup() {
  createCanvas(256, 256);
  // img.resize(256, 256);

  img.filter('gray');
  img.loadPixels();

  var histogram = new Array(256);
  histogram.fill(0);

  for (y=0;y<img.height;y++){
    for (x=0;x<img.width;x++){
      pos = 4*(y*img.width+x);

      clr = img.pixels[pos];
      histogram[clr]++;
    }
  }
  maxh = 0;

  for (i=0;i<256;i++){
    if (histogram[i] > maxh){
      maxh = histogram[i];
    }
  }

  background(255);
  stroke(0);

  for (i=0;i<256;i++){
    h = (histogram[i]/maxh)*height*10;
    line(i,height,i,height-h);
  }
}


