var intervalID;
var time = 0;
//variable pour stoquer toutes les données relevées
var data = [];
//buffer changé en temps réeel qui contient les valeurs
var buffer = {};


/*
  réinitialise toutes les variables.
*/
function clear() {
  time = 0;
  data = [];
  buffer = {};
  //document.getElementById("test2").innerHTML = "";
}

/*
  orientation() et motion() mettent a jour les valeurs de la structure de
  données qui contient les données des capteurs. Elles sont appélées a chaque
  activation des detecteurs correspondant
*/
function orientation(event) {
  buffer.alpha = event.alpha;
  buffer.beta = event.beta;
  buffer.gamma = event.gamma;
}

function motion(event) {
  buffer.x = event.acceleration.x;
  buffer.y = event.acceleration.y;
  buffer.z = event.acceleration.z;
}

/*
  startCapture() attache les emenements d'orientation et d'acceleration a la
  fenetre et lance ensuite la fonction d'enregistrement des valeurs qui
  s'executera a intervalles réguliers
*/
function startCapture() {
  document.getElementById("main").innerHTML = '<button id="button" onclick="stopCapture()" >Stop</button>';
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
  }, 50);
}

/*
  stopCapture() detache les evénements d'orientation et d'acceleration de la
  fenetre et stoppe la fonction d'enregistrement des valeurs
*/
function stopCapture() {
  document.getElementById("main").innerHTML = '<button id="button" onclick="startCapture()" >Start</button>';
  window.removeEventListener("devicemotion", motion);
  window.removeEventListener("deviceorientation", orientation);
  window.clearInterval(intervalID);
  intervalID = 0;
  sendData();
  clear();
}

function name() {
  return prompt("Name it !", "");
}

function sendData() {
  var jData = JSON.stringify(data, null, "\t");
  //document.getElementById('test1').innerHTML = jData;
  //console.log(typeof jData);
  var mouvement = name();
  if (mouvement != null && mouvement != "") {
    $.post("php/write.php", toto = {
      data: jData,
      name: mouvement
    });
  }
}

/*
  copyStruct() est une fonction qui renvoie une vraie copie de la structure de
  buffer, car essayer de le copier dans une nouvelle variable creeait juste un
  pointeur vers la structure. Il y a sans doute des methodes plus élégantes de
  faire du deep copying dans JavaScript, sur lequelles nous nous pencherons
  dans le futur
*/
function copyStruct(input) {
  var out = {};
  out.date = input.date;
  out.x = input.x;
  out.y = input.y;
  out.z = input.z;
  out.alpha = input.alpha;
  out.beta = input.beta;
  out.gamma = input.gamma;
  return out;
}

/*
  record() est une fonction appelée a intervalles réguliers. Elle "date" le
  buffer actuel et en rajoute une copie a la fin du tableau de données. Proceder
  comme ça nous permet de centraliser toutes les données au meme endroit tout
  en s'assurant que les données entre les deux senseurs sont bien synchronisées.
  De plus la taille de la structure de données est ainsi réduite car les
  senseurs se déclenches beaucoup trop souvent ce qui amène a des fichiers de
  plusieurs dizaines de mégas en quelques secondes de capture. Pour s'assurer
  que les valeurs sont utiles elle s'assure qu'aucune d'entre elle n'est
  strictement egale a 0 ou null (il est peut etre possible de reduire cette
  condition)
*/
function record() {
  if (!(buffer.x == 0 || buffer.y == 0 || buffer.z == 0 || buffer.alpha == 0 || buffer.beta == 0 || buffer.gamma == 0 || buffer.x == null || buffer.y == null || buffer.z == null || buffer.alpha == null || buffer.beta == null || buffer.gamma == null)) {
    buffer.date = time;
    time++;
    data.push(copyStruct(buffer));
    //document.getElementById("test2").innerHTML = "<ul><li>Date : " + buffer.date + "</li><li>Alpha : " + buffer.alpha + "</li><li>Beta : " + buffer.beta + "</li><li>Gamma : " + buffer.gamma + "</li><li>X : " + buffer.x + "</li><li>Y : " + buffer.y + "</li><li>Z : " + buffer.z + "</li></ul>";
  }
}
