/* Lab:exp_9_Precise Traversing in a Duct using Pitot Tube
	 File name: graphplotly9.js
   Author:Prakriti Dhang
*/



var dataPointai =[];

var xArray9 = [];
var yArray9 = [];
var xValues9 = [];
var yValues9 = [];


 function showplot(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
        var rwe1 = otable.rows[tabrowindex].cells;
         
        //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
        xArray9.push(parseFloat(rwe1[3].innerHTML));
        yArray9.push(parseFloat(rwe1[2].innerHTML));
        //alert(rwe1[2].innerHTML);
        //alert(rwe1[1].innerHTML);
    }
   
    var data = [
        {x:xArray9, y:yArray9, mode:"markers"}
        
      ];
      
      var layout = {
        xaxis: {range: [0, 20],dtick: 2, title: "Velocity"},
        yaxis: {range: [0, 30],dtick: 5, title: "Velocity Pressure"},  
        title: "Velocity Vs Velocity Pressure"
      };
      
      Plotly.newPlot("myPlot9", data, layout);

 }




function showbestfitg(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
      var rwe1 = otable.rows[tabrowindex].cells;
       
      //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
      xArray9.push(parseFloat(rwe1[3].innerHTML));
      yArray9.push(parseFloat(rwe1[2].innerHTML));
  }
  var xSum = xArray9.reduce(function(a, b){return a + b;}, 0);
  var ySum = yArray9.reduce(function(a, b){return a + b;}, 0);
  var slope = ySum / xSum;
  
  // Generate values
  var xValues9 = [];
  var yValues9 = [];
  for (var x = 0; x <= 20; x += 1) {
    xValues9.push(x);
    yValues9.push(x * slope);
  }

var data = [
    {x:xArray9, y:yArray9, mode:"markers"},
    {x:xValues9, y:yValues9, mode:"line"}
  ];
  
  var layout = {
    
    xaxis: {range: [0, 20], dtick: 2, title: "Velocity"},
    yaxis: {range: [0, 30],  dtick: 5,  title: "Velocity Pressure"},  
    title: "Best Fit"
  };
  
  Plotly.newPlot("myPlot9", data, layout);
}