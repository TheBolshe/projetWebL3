var data [];
var buffer1 = {};
var jtdata = JSON.parse(data);
var c = document.getElementById("graphxyz");
var graph2 = document.getElementById("t");
function showGraphxyz(d,a,jdata) {

  var div=c.width/jdata.length ;
  var ctx = c.getContext("2d")
  ctx.strokeStyle="red";
  var i;

  for (i = d; i < a; i++) {
    console.log(i);
    buffer1 = jdata[i];
    ctx.lineTo((buffer1.date)*div,200-((buffer1.x) * 2));
  }
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(d,0);
  ctx.strokeStyle="green";



  for (i = d; i < a; i++) {
    buffer1 = jdata[i];
    ctx.lineTo((buffer1.date)*div,200-((buffer1.y) * 2));
  }
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(d,0);
  ctx.strokeStyle="blue";


  for (i = d; i <a; i++) {
    buffer1 = jdata[i];
    ctx.lineTo((buffer1.date)*div,200-((buffer1.z) * 2));
  }
  ctx.stroke();

}
function showGraphabg(b,a,jdata) {

  var div=c.width/jdata.length;
  var ctx = graph2.getContext("2d")
  ctx.strokeStyle="red";
  var i;

  for (i = b; i < a; i++) {
    buffer1 = jdata[i];
    ctx.lineTo((buffer1.date)*div,200-((buffer1.alpha) *0.5));
  }
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(b,0);
  ctx.strokeStyle="green";



  for (i=b; i < a; i++) {
    buffer1 = jdata[i];
    ctx.lineTo((buffer1.date)*div,200-((buffer1.beta) * 0.5));
  }
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(b,0);
  ctx.strokeStyle="blue";


  for (i=b; i < a; i++) {
    buffer1 = jdata[i];
    ctx.lineTo((buffer1.date)*div,200-((buffer1.gamma) *  0.5));
  }
  ctx.stroke();

}
showGraphabg(0,jdata.length,jtdata);
showGraphxyz(0,jdata.length,jtdata);
