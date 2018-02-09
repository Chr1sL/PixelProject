//Modified from P5 example at: https://p5js.org/examples/dom-video-capture.html by nataliefreed
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
//https://gist.github.com/getify/2926699#file-gistfile1-js-L14

var capture;
var tracker;
var w = 640,
  h = 480;

var img0;
var img1;
var colorR = [];
var colorG = [];
var colorB = [];
var temp;
var i;

function preload() {
  img0 = loadImage('images/sun.jpg');
  img1 = loadImage('images/snow.jpg');
}

https://p5js.org/examples/hello-p5-weather.html
function gotWeather(weather) {

  // Display as HTML elements
  temp = weather.current.temp_f;
  var temperatureDiv = createDiv(weather.current.temp_f + '&deg;');

}

function setup() {
  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  colorMode(HSB);

  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(capture.elt);

  var url = 'https://api.apixu.com/v1/current.json?key=95204028d02f4382a83170132180702&q=SF'
  loadJSON(url, gotWeather);
}

function draw() {
  image(capture, 0, 0, w, h);
  var positions = tracker.getCurrentPosition();

//projects different background depending on temperature
//makes orange tint face if warm (colors randomized 61x)
//makes blue tint face if cold (colors randomized 61x)
//or depending on skin tone, darker or lighter
  if (temp > 60) {
    background(img0);
    for (i = 0; i < 61; i++){
      //below is light skintone
      colorR.push(Math.floor(Math.random() * 255) + 204);
      colorG.push(Math.floor(Math.random() * 51));
      colorB.push(Math.floor(Math.random() * 51));
    }
  } else {
    background(img1);
    for (i = 0; i < 61; i++){
      colorB.push(Math.floor(Math.random() * 255) + 204);
      colorG.push(Math.floor(Math.random() * 51));
      colorR.push(Math.floor(Math.random() * 51));
    }
  }

  //to calculate the distance between points
  //point(positions[1][0],positions[1][1]);
  //var widthFace = positions[1][0] - positions[14][0];
  // var heightFace = Math.abs(positions[7][1] - positions[22][1])
  // heightFace = heightFace + (.5*heightFace)

  if (positions.length > 0) {
    // var mouthLeft = createVector(positions[44][0], positions[44][1]);
    // var mouthRight = createVector(positions[50][0], positions[50][1]);
    // var smile = mouthLeft.dist(mouthRight);
    noStroke();
    //colorful shapes

    fill(colorR[0], colorG[0], colorB[0], 5);
    quad(positions[3][0], positions[3][1],
      positions[23][0], positions[23][1],
      positions[1][0], positions[1][1], positions[2][0], positions[2][1]);

    fill(colorR[1], colorG[1], colorB[1], 5);
    triangle(positions[4][0], positions[4][1], positions[35][0], positions[35][1], positions[44][0], positions[44][1]);

    fill(colorR[2], colorG[2], colorB[2], 5);
    triangle(positions[0][0], positions[0][1],
      positions[22][0], positions[22][1],
      positions[1][0], positions[1][1]);

    //eyerbrows
    fill(49, 12, 12, 5);
    triangle(positions[19][0], positions[19][1],
      positions[20][0], positions[20][1],
      positions[22][0], positions[22][1]);

    fill(49, 12, 12, 5);
    triangle(positions[18][0], positions[18][1],
      positions[16][0], positions[16][1],
      positions[15][0], positions[15][1]);

      //rest of face
    fill(colorR[3], colorG[3], colorB[3], 5);
    triangle(positions[23][0], positions[23][1],
      positions[3][0], positions[3][1],
      positions[34][0], positions[34][1]);

    fill(colorR[4], colorG[4], colorB[4], 5);
    triangle(positions[22][0], positions[22][1],
      positions[33][0], positions[33][1],
      positions[18][0], positions[18][1]);

    fill(colorR[5], colorG[5], colorB[5], 5);
    triangle(positions[3][0], positions[3][1],
      positions[34][0], positions[34][1],
      positions[4][0], positions[4][1]);

    fill(colorR[6], colorG[6], colorB[6], 5);
    triangle(positions[5][0], positions[5][1],
      positions[44][0], positions[44][1],
      positions[4][0], positions[4][1]);

    fill(colorR[7], colorG[7], colorB[7], 5);
    triangle(positions[45][0], positions[45][1],
      positions[44][0], positions[44][1],
      positions[60][0], positions[60][1]);

    fill(colorR[8], colorG[8], colorB[8], 5);
    triangle(positions[44][0], positions[44][1],
      positions[5][0], positions[5][1],
      positions[6][0], positions[6][1]);

    fill(colorR[9], colorG[9], colorB[9], 5);
    triangle(positions[0][0], positions[0][1],
      positions[19][0], positions[19][1],
      positions[22][0], positions[22][1]);

    fill(colorR[10], colorG[10], colorB[10], 5);
    triangle(positions[0][0], positions[0][1],
      positions[19][0], positions[19][1],
      positions[22][0], positions[22][1]);

    fill(colorR[11], colorG[11], colorB[11], 5);
    quad(positions[6][0], positions[6][1],
      positions[7][0], positions[7][1],
      positions[54][0], positions[54][1], positions[55][0], positions[55][1]);

    fill(colorR[12], colorG[12], colorB[12], 5);
    quad(positions[8][0], positions[8][1],
      positions[7][0], positions[7][1],
      positions[54][0], positions[54][1],
      positions[53][0], positions[53][1]);

    fill(colorR[13], colorG[13], colorB[13], 5);
    triangle(positions[8][0], positions[8][1],
      positions[9][0], positions[9][1],
      positions[53][0], positions[53][1]);

    fill(colorR[14], colorG[14], colorB[14], 5);
    quad(positions[44][0], positions[44][1], positions[35][0], positions[35][1],
      positions[36][0], positions[36][1],
      positions[37][0], positions[37][1]);

    fill(colorR[15], colorG[15], colorB[15], 5);
    quad(positions[9][0], positions[9][1], positions[10][0], positions[10][1],
      positions[52][0], positions[52][1],
      positions[53][0], positions[53][1]);

    fill(colorR[16], colorG[16], colorB[16], 5);
    triangle(positions[11][0], positions[11][1], positions[10][0], positions[10][1],
      positions[52][0], positions[52][1],
      positions[51][0], positions[51][1]);

    fill(colorR[17], colorG[17], colorB[17], 5);
    quad(positions[11][0], positions[11][1], positions[12][0], positions[12][1],
      positions[52][0], positions[52][1],
      positions[51][0], positions[51][1]);

    fill(colorR[18], colorG[18], colorB[18], 5);
    triangle(positions[11][0], positions[11][1], positions[10][0], positions[10][1],
      positions[51][0], positions[51][1],
      positions[52][0], positions[52][1]);

    fill(colorR[19], colorG[19], colorB[19], 5);
    quad(positions[13][0], positions[13][1], positions[12][0], positions[12][1],
      positions[51][0], positions[51][1],
      positions[50][0], positions[50][1]);

    fill(colorR[20], colorG[20], colorB[20], 5);
    triangle(positions[13][0], positions[13][1],
      positions[49][0], positions[49][1],
      positions[50][0], positions[50][1]);

    fill(colorR[21], colorG[21], colorB[21], 5);
    triangle(positions[13][0], positions[13][1], positions[14][0], positions[14][1],
      positions[49][0], positions[49][1]);

    fill(colorR[22], colorG[22], colorB[22], 5);
    quad(positions[44][0], positions[44][1], positions[45][0], positions[45][1],
      positions[46][0], positions[46][1],
      positions[37][0], positions[37][1]);

    fill(colorR[23], colorG[23], colorB[23], 5);
    quad(positions[48][0], positions[48][1], positions[47][0], positions[47][1],
      positions[46][0], positions[46][1],
      positions[37][0], positions[37][1]);

    fill(colorR[24], colorG[24], colorB[24], 5);
    triangle(positions[37][0], positions[37][1],
      positions[48][0], positions[48][1],
      positions[49][0], positions[49][1]);

    fill(colorR[25], colorG[25], colorB[25], 5);
    quad(positions[37][0], positions[37][1], positions[38][0], positions[38][1],
      positions[49][0], positions[49][1],
      positions[48][0], positions[48][1]);

    fill(colorR[26], colorG[26], colorB[26], 5);
    quad(positions[38][0], positions[38][1],
      positions[49][0], positions[49][1],
      positions[31][0], positions[31][1],
      positions[39][0], positions[39][1]);

    fill(colorR[27], colorG[27], colorB[27], 5);
    quad(positions[31][0], positions[31][1],
      positions[70][0], positions[70][1],
      positions[14][0], positions[14][1],
      positions[49][0], positions[49][1]);

    fill(colorR[28], colorG[28], colorB[28], 5);
    quad(positions[34][0], positions[34][1],
      positions[35][0], positions[35][1],
      positions[36][0], positions[36][1],
      positions[41][0], positions[41][1]);

    fill(colorR[29], colorG[29], colorB[29], 5);
    triangle(positions[33][0], positions[33][1],
      positions[34][0], positions[34][1],
      positions[41][0], positions[41][1]);

    fill(colorR[30], colorG[30], colorB[30], 5);
    triangle(positions[36][0], positions[36][1],
      positions[37][0], positions[37][1],
      positions[62][0], positions[62][1]);

    fill(colorR[31], colorG[31], colorB[31], 5);
    triangle(positions[41][0], positions[41][1],
      positions[42][0], positions[42][1],
      positions[62][0], positions[62][1]);

    fill(colorR[32], colorG[32], colorB[32], 5);
    triangle(positions[40][0], positions[40][1],
      positions[41][0], positions[41][1],
      positions[62][0], positions[62][1]);

    fill(colorR[33], colorG[33], colorB[33], 5);
    quad(positions[40][0], positions[40][1],
      positions[43][0], positions[43][1],
      positions[37][0], positions[37][1],
      positions[62][0], positions[62][1]);

    fill(colorR[34], colorG[34], colorB[34], 5);
    quad(positions[40][0], positions[40][1],
      positions[43][0], positions[43][1],
      positions[38][0], positions[38][1],
      positions[39][0], positions[39][1]);

    fill(colorR[35], colorG[35], colorB[35], 5);
    triangle(positions[39][0], positions[39][1],
      positions[40][0], positions[40][1],
      positions[31][0], positions[31][1]);

    fill(colorR[36], colorG[36], colorB[36], 5);
    triangle(positions[31][0], positions[31][1],
      positions[69][0], positions[69][1],
      positions[40][0], positions[40][1]);

    fill(colorR[37], colorG[37], colorB[37], 5);
    triangle(positions[40][0], positions[40][1],
      positions[41][0], positions[41][1],
      positions[33][0], positions[33][1]);

    fill(colorR[38], colorG[38], colorB[38], 5);
    quad(positions[22][0], positions[22][1],
      positions[24][0], positions[24][1],
      positions[64][0], positions[64][1],
      positions[33][0], positions[33][1]);

    fill(colorR[39], colorG[39], colorB[39], 5);
    triangle(positions[64][0], positions[64][1],
      positions[25][0], positions[25][1],
      positions[33][0], positions[33][1]);

    fill(colorR[40], colorG[40], colorB[40], 5);
    quad(positions[33][0], positions[33][1],
      positions[25][0], positions[25][1],
      positions[65][0], positions[65][1],
      positions[34][0], positions[34][1]);

    fill(colorR[41], colorG[41], colorB[41], 5);
    quad(positions[23][0], positions[23][1],
      positions[26][0], positions[26][1],
      positions[65][0], positions[65][1],
      positions[34][0], positions[34][1]);

    fill(colorR[42], colorG[42], colorB[42], 5);
    quad(positions[14][0], positions[14][1],
      positions[28][0], positions[28][1],
      positions[29][0], positions[29][1],
      positions[15][0], positions[15][1]);

    fill(colorR[43], colorG[43], colorB[43], 5);
    quad(positions[15][0], positions[15][1],
      positions[18][0], positions[18][1],
      positions[68][0], positions[68][1],
      positions[29][0], positions[29][1]);

    fill(colorR[44], colorG[44], colorB[44], 5);
    quad(positions[18][0], positions[18][1],
      positions[68][0], positions[68][1],
      positions[30][0], positions[30][1],
      positions[33][0], positions[33][1]);

    fill(colorR[45], colorG[45], colorB[45], 5);
    quad(positions[33][0], positions[33][1],
      positions[30][0], positions[30][1],
      positions[69][0], positions[69][1],
      positions[40][0], positions[40][1]);

    fill(colorR[46], colorG[46], colorB[46], 5);
    triangle(positions[55][0], positions[55][1],
      positions[44][0], positions[44][1],
      positions[6][0], positions[6][1]);

    //lips
    fill(20, 20, 500, 5);
    triangle(positions[45][0], positions[45][1],
      positions[46][0], positions[46][1],
      positions[60][0], positions[60][1]);

    fill(0, 85, 200, 5);
    triangle(positions[44][0], positions[44][1],
      positions[45][0], positions[45][1],
      positions[60][0], positions[60][1]);

    fill(0, 85, 40, 5);
    quad(positions[46][0], positions[46][1],
      positions[47][0], positions[47][1],
      positions[48][0], positions[48][1],
      positions[60][0], positions[60][1]);

    fill(0, 85, 100, 5);
    triangle(positions[48][0], positions[48][1],
      positions[49][0], positions[49][1],
      positions[60][0], positions[60][1]);

    fill(0, 85, 65, 5);
    quad(positions[49][0], positions[49][1],
      positions[50][0], positions[50][1],
      positions[59][0], positions[59][1],
      positions[60][0], positions[60][1]);

    fill(20, 20, 40, 5);
    quad(positions[50][0], positions[50][1],
      positions[58][0], positions[58][1],
      positions[52][0], positions[52][1],
      positions[51][0], positions[51][1]);

    fill(0, 85, 150, 5);
    quad(positions[50][0], positions[50][1],
      positions[58][0], positions[58][1],
      positions[52][0], positions[52][1],
      positions[51][0], positions[51][1]);

    fill(20, 20, 30, 5);
    triangle(positions[52][0], positions[52][1],
      positions[58][0], positions[58][1],
      positions[53][0], positions[53][1]);

    fill(0, 58, 82, 5);
    triangle(positions[53][0], positions[53][1],
      positions[57][0], positions[57][1],
      positions[58][0], positions[58][1]);

    fill(20, 40, 100, 5);
    triangle(positions[53][0], positions[53][1],
      positions[57][0], positions[57][1],
      positions[56][0], positions[56][1]);

    fill(0, 85, 75, 5);
    quad(positions[55][0], positions[55][1],
      positions[56][0], positions[56][1],
      positions[53][0], positions[53][1],
      positions[54][0], positions[54][1]);

    fill(20, 20, 500, 5);
    triangle(positions[44][0], positions[44][1],
      positions[55][0], positions[55][1],
      positions[56][0], positions[56][1]);
  }

  }
