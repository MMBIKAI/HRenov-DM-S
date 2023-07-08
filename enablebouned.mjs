window.enablebox =()=> {//checkbox numbered in id
    if (document.getElementById("1").checked) {
        // If the checkbox with ID "1" is checked
        document.getElementById("percent").disabled = false;
        // Enable the input field with ID "percent"
      } else {
        // If the checkbox with ID "1" is not checked
        document.getElementById("percent").disabled = true;
        // Disable the input field with ID "percent"
      }
    if ( document.getElementById("2").checked ) {
        
        document.getElementById("pvheight").disabled = false;
   
    } else {
        document.getElementById("pvheight").disabled = true;
    }
    if ( document.getElementById("3").checked ) {
        
        document.getElementById("pvwid").disabled = false;
   
    } else {
        document.getElementById("pvwid").disabled = true;
    }
    if ( document.getElementById("4").checked ) {
        
        document.getElementById("avrad").disabled = false;
   
    } else {
        document.getElementById("avrad").disabled = true;
    }
    if ( document.getElementById("5").checked ) {
        
        document.getElementById("numsun").disabled = false;
   
    } else {
        document.getElementById("numsun").disabled = true;
    }
    if ( document.getElementById("6").checked ) {
        
        document.getElementById("caps").disabled = false;
   
    } else {
        document.getElementById("caps").disabled = true;
    }
    if ( document.getElementById("7").checked ) {
        
        document.getElementById("totacapacity").disabled = false;
   
    } else {
        document.getElementById("totacapacity").disabled = true;
    }
    if ( document.getElementById("8").checked ) {
        
        document.getElementById("laborcost").disabled = false;
   
    } else {
        document.getElementById("laborcost").disabled = true;
    }
    if ( document.getElementById("9").checked ) {
        
        document.getElementById("installationtime").disabled = false;
   
    } else {
        document.getElementById("installationtime").disabled = true;
    }
    if ( document.getElementById("10").checked ) {
        
        document.getElementById("costofeq").disabled = false;
   
    } else {
        document.getElementById("costofeq").disabled = true;
    }
    if ( document.getElementById("11").checked ) {
        
        document.getElementById("costmaint").disabled = false;
   
    } else {
        document.getElementById("costmaint").disabled = true;
    }
    if ( document.getElementById("12").checked ) {
        
        document.getElementById("costrep").disabled = false;
   
    } else {
        document.getElementById("costrep").disabled = true;
    }
    if ( document.getElementById("13").checked ) {
        
        document.getElementById("costofenrgypane").disabled = false;
   
    } else {
        document.getElementById("costofenrgypane").disabled = true;
    }
  }