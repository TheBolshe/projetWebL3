var c = document.getElementById("graphxyz");
var graph2 = document.getElementById("t");

function showGraphxyz(d, a, sg) {
  $.getJSON(sg, function(jdata) {
    //console.log(jTest);
    if (a = 0) {
      a = jdata.length;
    }
    var div = c.width / jdata.length;
    var ctx = c.getContext("2d")
    ctx.strokeStyle = "red";
    var i;

    for (i = d; i < a; i++) {
      //console.log(i);

      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].x) * 2));
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(d, 0);
    ctx.strokeStyle = "green";



    for (i = d; i < a; i++) {
      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].y) * 2));
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(d, 0);
    ctx.strokeStyle = "blue";


    for (i = d; i < a; i++) {
      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].z) * 2));
    }
    ctx.stroke();

  });
}

function showGraphabg(b, a, sg) {
  $.getJSON(sg, function(jdata) {
    //console.log(jTest);
    if (a = 0) {
      a = jdata.length;
    }
    var div = c.width / jdata.length;
    var ctx = graph2.getContext("2d")
    ctx.strokeStyle = "red";
    var i;

    for (i = b; i < a; i++) {
      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].alpha) * 0.5));
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(b, 0);
    ctx.strokeStyle = "green";



    for (i = b; i < a; i++) {
      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].beta) * 0.5));
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(b, 0);
    ctx.strokeStyle = "blue";


    for (i = b; i < a; i++) {
      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].gamma) * 0.5));
    }
    ctx.stroke();
  });
}
<<<<<<< HEAD
showGraphabg(0, 0, "data/recordings/yoyo/caca.json");
showGraphxyz(0, 0, "data/recordings/yoyo/caca.json");
=======
function navshowGraph() {
  var name = prompt("Donnée le nom du fichier que vous vouler afficher sous forme nomdossier/nomfichier", "");
  
  if (name != null && name != "") {
  showGraphabg(0,0,"data/recordings/"+name+".json");
  showGraphxyz(0,0,"data/recordings/"+name+".json");

  }
}
>>>>>>> 75331f98b1702f668f93ba5c4893423be983407a
