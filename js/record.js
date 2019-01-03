var intervalID;
var time = 0;

var data = {
  array: []
};

var buffer = {
  date: 0,
  x: 0,
  y: 0,
  z: 0,
  alpha: 0,
  beta: 0,
  gamma: 0
}

function orientation(event) {
  buffer.alpha = event.alpha;
  buffer.beta = event.beta;
  buffer.gamma = event.gamma;
  //document.getElementById("test2").innerHTML = "<ul><li>Alpha : " + buffer.alpha + "</li><li>Beta : " + buffer.beta + "</li><li>Gamma : " + buffer.gamma + "</li></ul>";
}

function motion(event) {
  buffer.x = event.acceleration.x;
  buffer.y = event.acceleration.y;
  buffer.z = event.acceleration.z;
  //document.getElementById("test1").innerHTML = "<ul><li>X : " + buffer.x + "</li><li>Y : " + buffer.y + "</li><li>Z : " + buffer.z + "</li></ul>";
}

function startCapture() {
  document.getElementById("bouton").innerHTML = '<button onclick="stopCapture()" >Stop</button>';
  if (window.DeviceMotionEvent)
    window.addEventListener('devicemotion', motion, false);
  else
    console.log("DeviceMotionEvent is not supported");
  if (window.DeviceOrientationEvent)
    window.addEventListener('deviceorientation', orientation, false);
  else
    console.log("DeviceOrientationEvent is not supported");
  intervalID = window.setInterval(function() {
    record()
  }, 100);
}

function stopCapture() {
  document.getElementById("bouton").innerHTML = '<button onclick="startCapture()" >Start</button>';
  window.removeEventListener('devicemotion', motion);
  window.removeEventListener('deviceorientation', orientation);
  window.clearInterval(intervalID);
  intervalID = 0;
  var jData = JSON.stringify(data, null, "\t");
  //document.getElementById('test1').innerHTML = jData;
  $.post("",jData);
}

function record() {
  var b = {};
  buffer.date = time;
  b.date = buffer.date;
  b.x = buffer.x;
  b.y = buffer.y;
  b.z = buffer.z;
  b.alpha = buffer.alpha;
  b.beta = buffer.beta;
  b.gamma = buffer.gamma;
  time++;
  data.array[buffer.date] = b;
  document.getElementById("test2").innerHTML = "<ul><li>Date : " + buffer.date + "</li><li>Alpha : " + buffer.alpha + "</li><li>Beta : " + buffer.beta + "</li><li>Gamma : " + buffer.gamma + "</li><li>X : " + buffer.x + "</li><li>Y : " + buffer.y + "</li><li>Z : " + buffer.z + "</li></ul>";
}
