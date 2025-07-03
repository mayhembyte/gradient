let t = 0;
let cols = [];

function setup() {
  createCanvas(1265, 500);
  pixelDensity(1);
  noStroke();

  cols[0] = color('#27537C'); // azul
  cols[1] = color('#37827B'); // verde
  cols[2] = color(0);         // preto
}

function draw() {
  loadPixels();

  let scale = 0.005;
  let speed = 0.01;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let nx = x * scale;
      let ny = y * scale;
      let n = noise(nx, ny, t);

      let c1 = lerpColor(cols[0], cols[1], n);
      let finalCol = lerpColor(c1, cols[2], n);

      let index = (x + y * width) * 4;
      pixels[index] = red(finalCol);
      pixels[index + 1] = green(finalCol);
      pixels[index + 2] = blue(finalCol);
      pixels[index + 3] = 255;
    }
  }

  updatePixels();
  t += speed;
}

