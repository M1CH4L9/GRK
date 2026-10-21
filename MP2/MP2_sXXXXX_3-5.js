function preload() {
  img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/astronaut.png");

  img_h = createImage(256,256);
  img_s = createImage(256,256);
  img_v = createImage(256,256);
}

function setup() {
  createCanvas(512, 512);
  img.resize(256, 256);

  img.loadPixels();
  img_h.loadPixels();
  img_s.loadPixels();
  img_v.loadPixels();

  for (y=0;y<img.height;y++){
    for (x=0;x<img.width;x++){
      pos = 4*(y*img.width+x);

      r=img.pixels[pos]/255 //to jest wartość dla R
      g=img.pixels[pos+1]/255 //to jest wartość dla G
      b=img.pixels[pos+2]/255 //to jest wartość dla B

      cmax = Math.max(r,g,b);
      cmin = Math.min(r,g,b);

      v = cmax;

      img_v.set(x,y,255*v);
    }
  }

  //o co z tym chodzi?
  // x=(i/4)%256;//indeks kolumny wewnątrz wiersza
  // y=(i/4)/256;//indeks wiersza

  img_v.updatePixels();

  image(img_h,0,0);
  image(img_s,256,0);
  image(img_v,0,256);
  image(img,256,256);
}

