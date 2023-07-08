window.display =()=> {
// which graph is displayed
    var showChart3 = document.getElementById("scatterplotmatrix").checked;
    var showBody = document.getElementById("scatter plot").checked;
    
    if (showChart3) {
      // If the value of `showChart3` is truthy (e.g., true)
    
      document.getElementById("chart3").style.display = "inline-block";
      // Set the display style of the element with ID "chart3" to "inline-block"
    
      document.getElementById("scatter").style.display = "none";
      // Set the display style of the element with ID "scatter" to "none"
    } else {
      // If the value of `showChart3` is falsy (e.g., false)
    
      document.getElementById("chart3").style.display = "none";
      // Set the display style of the element with ID "chart3" to "none"
    
      document.getElementById("scatter").style.display = "none";
      // Set the display style of the element with ID "scatter" to "none"
    }
    
    
    if (showBody) {
      document.getElementById("scatter").style.display = "inline-block";
      document.getElementById("chart3").style.display = "none";
    } else {
      document.getElementById("body").style.display = "none";
      document.getElementById("chart3").style.display = "none";
    }
  
    if(showBody && showChart3){
        document.getElementById("chart3").style.display = "inline-block";
        document.getElementById("scatter").style.display = "inline-block";
    }else{
        document.getElementById("chart3").style.display = "none";
        document.getElementById("scatter").style.display = "none";
    }
}