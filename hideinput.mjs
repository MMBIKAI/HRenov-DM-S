window.enableCreateUser =()=> {//enable input boxes for each variable when focused is selected
    if (document.getElementById("choice2").checked) {
        document.getElementById("1").disabled = false;
        document.getElementById("2").disabled = false;
        document.getElementById("3").disabled = false;
        document.getElementById("4").disabled = false;
        document.getElementById("5").disabled = false;
        document.getElementById("6").disabled = false;
        document.getElementById("7").disabled = false;
        document.getElementById("8").disabled = false;
        document.getElementById("9").disabled = false;
        document.getElementById("10").disabled = false;
        document.getElementById("11").disabled = false;
        document.getElementById("12").disabled = false;
        document.getElementById("13").disabled = false;

    
    } else {
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        document.getElementById("10").disabled = true;
        document.getElementById("11").disabled = true;
        document.getElementById("12").disabled = true;
        document.getElementById("13").disabled = true;


    
      }

     
  }