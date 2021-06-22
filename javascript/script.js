var lineChartData={
  labels:["1","2","3","4","5","6","7","8","9","10","11","12"],
  datasets:[
    {
      fillColor:"rbga(255, 255, 255, 0)",
      strokeColor:"rbga(0, 0, 0, 1)",
      pointColor:""rgba(155,39,39,1);",
      pointStrokeColor:"#fff",
      pointHighlightFill:"#fff",
      pointHighlightStoke:"rgba(220,220,220,1)",
      data:[1,2,3,4,5,6,7,8,9,10,11,12]
    },
    {
      fillColor:"rgba(255,255,255,0)",
      strokeColor:"rbga(92, 184, 92, 1)",
      pointColor:""rgba(23,126,23,1);",
      pointStrokeColor:"#fff",
      pointHighlightFill:"#fff",
      pointHighlightStoke:"rgba(151,187,205,1)",
      data:[2,2,1,4,2,4,5,7,8,8,4,3]
    }
  ]

}

window.onload = function(){
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx).Line(lineChartData, {
    responsive:true;
  })
}