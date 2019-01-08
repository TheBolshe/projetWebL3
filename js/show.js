var debut = 0;
var fin = 0;

function showGraphxyz(d, a, sg, id) {
  //console.log(sg);
  var c = document.getElementById(id);
  $.getJSON(sg, function(jdata) {
    if (a == 0) {
      a = jdata.length;
    }
    var div = c.width / (jdata.length - d - (jdata.length - a));
    var ctx = c.getContext("2d")
    ctx.strokeStyle = "red";
    var i;

    for (i = d; i < a; i++) {
      //console.log(i);

      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].x) * 2));
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.strokeStyle = "green";



    for (i = d; i < a; i++) {
      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].y) * 2));
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.strokeStyle = "blue";


    for (i = d; i < a; i++) {
      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].z) * 2));
    }
    ctx.stroke();

  });
}

function showGraphabg(b, a, sg, id) {
  //console.log(sg);
  var graph2 = document.getElementById(id);
  $.getJSON(sg, function(jdata) {
    //console.log(jTest);
    if (a == 0) {
      a = jdata.length;
    }
    var div = graph2.width / (jdata.length - b-(jdata.length - a));
    var ctx = graph2.getContext("2d")
    ctx.strokeStyle = "red";
    var i;

    for (i = b; i < a; i++) {
      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].alpha) * 0.5));
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.strokeStyle = "green";



    for (i = b; i < a; i++) {
      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].beta) * 0.5));
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.strokeStyle = "blue";


    for (i = b; i < a; i++) {
      ctx.lineTo((jdata[i].date) * div, 200 - ((jdata[i].gamma) * 0.5));
    }
    ctx.stroke();
  });
}

function navshowGraph(file, id) {

  $("#"+id).replaceWith('<div id="' + id + '"><canvas id="' + 'xyz' + id + '" width="800" height="400"  style="border:1px solid#d3d3d3;" ></canvas><canvas id="' + 'abg' + id + '" width="800" height="400"  style="border:1px solid#d3d3d3;" ></canvas></div>');
  var foo = "b" + id;
  $("#"+foo).replaceWith('<li id="b' + id + '"><button>Hide</button><button>Delete</button>'</li>);
  showGraphabg(0, 0, file, 'abg' + id);
  showGraphxyz(0, 0, file, 'xyz' + id);

}

/*fonction navtaillegraph(){
  var taille =prompt("largeur de la fenetre","");
}*/
