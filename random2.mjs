let combinedArraycapacity = [];
let combinedcostpanel = [];
let combinedlaborcost = [];
let combinedinstime = [];
let combinedeqcost = [];
let combinedmaintenancecost = [];
let combinedrepcost = [];
let combinedpanelcostenergy = [];
let combinedfreepercent = [];
let combinedavrad = [];
let combinedpvheight =[];
let combinedpvwidth = [];
let combinedsunhour = [];

var costpanell;
var costpanelh;

var totacapacityl;
var totacapacityh;

var  laborcostl;
var laborcosth;

var installationtimel;
var installationtimeh;

var costofeql;
var costofeqh;

var costmaintl;
var costmainth;

var costrepl;
var costreph;

var lifespan = 25;

var costofenrgypanel;
var costofenrgypaneh;
var height;
var wid;
var arrcostpanel = [];
var arrtotacapacity = [];
var arrlaborcost = [];
var arrinstallationtime = [];
var arrcostofeq = [];
var arrcostmaint = [];
var arrcostrep = [];
var arrcostofenrgypane = [];
var energysaving = [];

var capl;
var caph;

var costperunith;
var costperunitl;

var installationcosth;
var installationcostl;

var civilworksh;
var civilworksl;

var lifetime_of_pvh;
var lifetime_of_pvl;

var annual_inflation_rateh;
var annual_inflation_ratel;

var annual_interest_rateh;
var annual_interest_ratel;

var lifetime_of_convh;
var lifetime_of_convl;

var initialcostkh;
var initialcostkl;

/*var ppvh;
var ppvl;

var ploadh;
var ploadl;*/

//Energy cost
let consh;
let consl; // uilding consumption per year

var cons ;

let yearh;
let yearl ; // numbers of years
let year ;

let costenergyh ;
let costenergyl ;

//solar annual energy production (KWh/year)
//total available area 
let heighth ;
let heightl ;


let widh ;
let widl ;


let percenth ;
let percentl ;


// average daily solar radiation in KWh/m²/day
let totalradh ;
let totalradl ;


let numdaysh ;
let numdaysl ;


let avradh ; //kWh/m²/day
let avradl ;


// number of pv modules 
let pvheighth ;
let pvheightl ;


let pvwidh ;
let pvwidl ;


let numsunh ;
let numsunl ;

let eff1;

var init_costl;
var init_costh;

var lossprobl;
var lossprobh;

var popsize=15;

var totareal;
var totareah;
var totpvareal;
var totpvareah;
var numbpvl;
var numbpbh;
var enerprodl;
var enerprodh;
var initialcl;
var initialch;
var maintcl;
var maintch;
var repcl;
var repch;
var rcostkl;
var rcostkh;

var energysavingh;
var energysavingl;

var main_costl;
var main_costh;
var a;
var aa;
var sum =0;
var sumh = 0;
var lccl;
var lppl;
var lpph;
var init_costh;
var lcch;

var arrcap = [];
var capp =[];

var arrcostperunit = [];
var ccostpu =[];

var arrinstallationcost =[];
var cinstcost =[];

var arrcivilcost =[];
var civilp = [];

var arrinflation = [];
var infp = [];

var arrinterest = [];
var intp = [];

var arrlifepv =[];
var lifepvp = [];

var arrinitcostk = [];
var initckp = [];

var arrlifeconv = [];
var lifeconvp = [];

var arrppv =[];
var ppvp =[];

var arrpload = [];
var ploadp = [];

var initialcostf = [];
var maintenancecostf = [];
var lifecyclecostff =[];
var lifecyclecostf =[];
var summirizef = [];
var repf= [];
var lossprobaf =[];
var arrf1 = [];
var arrf2 = [];
var parent = [];
var arrgolbal = [];
var ayr =[];
var matrixparameter =[];

var arrcons = [];
var consp =[];

var arrnyear = [];
var yearp = [];

var arrcosten = [];
var costenp = [];

var arrheight = [];
var heightp = [];


var arrwid = [];
var widp = [];

var arrpercent = [];
var percentp =[];

var arrtotalrad = [];
var arrnumdays = [];
var arrpvheight =[];
var pvheightp =[];

var arrpvwid = [];
var pvwidp =[];

var arrnumsun =[];
var numsunp =[];

var arravrad =[];
var avradp = [];

var totalareaf = [];
var pvareaf = [];
var numberpvf = [];
var averageradf = [];
var energycostmutation = [];
var energycostcross = [];
var energycostf = [];
var solarenergy = [];
var libre = [];
var arravrad = [];

const kr = 0.01; // constant refers to the maintenace cost as a percentage of the initial capital cost of the rth component ( here pv so r = 1)
var nr = 2 ; //the number of component replacements ober the life of the system

window.randomnumbers =() =>{
  //matrixparameter.shift();
  
/* arrgolbal = [];
arrf1 = [];
arrf2 = [];
parent = [];*/

//disscrete variable the PV technlogy type
if (document.getElementById("choice3").checked){
   eff1 = 17.5;
}else if (document.getElementById("choice4").checked){
   eff1 = 14;
}else if (document.getElementById("choice5").checked){
   eff1 = 8.5;
}else if (document.getElementById("choice16").checked){
  eff1 = 25;
}
else{
  alert("PV technology is not selected")
}
//input data by users for each variable
cons = parseFloat( document.getElementById("cons").value);
year = parseFloat( document.getElementById("year").value);

 costpanell =parseFloat( document.getElementById("capls").value);
 costpanelh =parseFloat( document.getElementById("caphs").value);

 totacapacityl =parseFloat( document.getElementById("totacapacityl").value);
 totacapacityh =parseFloat( document.getElementById("totacapacityh").value);

  laborcostl =parseFloat( document.getElementById("laborcostl").value);
  laborcosth =parseFloat( document.getElementById("laborcosth").value);

installationtimel=parseFloat( document.getElementById("installationtimel").value);
installationtimeh=parseFloat( document.getElementById("installationtimeh").value);

costofeql = parseFloat( document.getElementById("costofeql").value);
costofeqh = parseFloat( document.getElementById("costofeqh").value);

costmaintl =parseFloat( document.getElementById("costmaintl").value);
costmainth =parseFloat( document.getElementById("costmainth").value);

costrepl = parseFloat( document.getElementById("costrepl").value);
costreph = parseFloat( document.getElementById("costreph").value);

costofenrgypanel = parseFloat( document.getElementById("costofenrgypanel").value);
costofenrgypaneh = parseFloat( document.getElementById("costofenrgypaneh").value);

percenth = parseFloat( document.getElementById("percenth").value);
percentl = parseFloat( document.getElementById("percentl").value);

pvheighth = parseFloat( document.getElementById("pvheighth").value);
pvheightl = parseFloat( document.getElementById("pvheightl").value);

pvwidh = parseFloat( document.getElementById("pvwidh").value);
pvwidl = parseFloat( document.getElementById("pvwidl").value);

numsunh = parseFloat( document.getElementById("numsunh").value);
numsunl = parseFloat( document.getElementById("numsunl").value);

avradh = parseFloat( document.getElementById("avradh").value);
avradl = parseFloat( document.getElementById("avradl").value);

//console.log(pvheightl)
//console.log(consl)
height =parseFloat( document.getElementById("height").value);
//var year = parseFloat( document.getElementById("year").value);
wid = parseFloat( document.getElementById("wid").value);
console.log(avradl)
console.log(numsunl)
//--------------------------------OBJ1---------------------------------------------------------------------

   //available area
   function totalareal () {
    totareal =  (height * wid) * (1 - (percenth*0.01));
    return totareal;
}

//pv module area
function pvareal () {
    totpvareal= (pvheightl * pvwidl);
    return totpvareal;
}

//number of pv modules
function numberpvl () {
    numbpvl= (totalareal()/pvareal());
    return numbpvl;
}

// soalr annual energy production
function energyproductionl () {
    enerprodl= (365 * avradl * pvareal() * numberpvl() * numsunl * eff1 * 0.01 * year);
    return enerprodl; 
}
//los of load probability
function lossprobl (){
    lppl = (Math.abs( (cons ) - energyproductionl())/(cons ));
    return lppl;
}
console.log(' low total avaiable area ',totalareal())
console.log('low pv area ',pvareal())
console.log('low number of PV module ',numberpvl())
console.log('low ebergy production ',energyproductionl())
console.log('low loss pf probability ',lossprobl())
//------------------------------------OBJ2-----------------------------------------------------------------------------
function initial_instl (){
  initialcl =  (costpanell * totacapacityl) + (laborcostl * installationtimel) + costofeql;
  return initialcl;
}
function Maintenance_repl (){
  main_costl = ( (costmaintl * year) + (costrepl * (year/10)))* year;
  return main_costl;
}
function energy_savingsl (){
  energysavingl = energyproductionl() * (costofenrgypanel) * year;
  return energysavingl;
}
function lifecyclecostl(){
  lccl = initial_instl() + Maintenance_repl() + energy_savingsl();
  return lccl;
}

//---------------------------------------------------------------------------------------------------------
//objectives of higer bounds
//OBJ1-----------------------------------------------------------------------------------
    //available area
    function totalareah () {
        totareah = (height * wid) * (1 - (percentl * 0.01));
        return totareah;
    }

    //pv module area
    function pvareah () {
        totpvareah =  (pvheighth * pvwidh);
        return totpvareah;
    }

    //number of pv modules
    function numberpvh () {
        numbpbh =  (totalareah()/pvareah());
        return numbpbh;
    }

    //average daily soalr radiation 
  /*  function avegradh () {
        return (totalradh/numdaysh);
    }*/

    // soalr annual energy production
    function energyproductionh () {
        enerprodh =  (365 * avradh * totalareah() * numsunh * eff1 * 0.01 * year); 
        return enerprodh;
    }

    function lossprobh (){
        lpph =  (Math.abs( (cons) - energyproductionh())/(cons ));
        return lpph;
    }
console.log('high total available area',totalareah())
    console.log('high energy production',energyproductionh())
    console.log('high PV module area', pvareah())
console.log('high number of Pv module',numberpvh())
console.log('high loss of load probability',lossprobh())
//objective function 2---------------------------------------------------------------------
    function initial_insth (){
      initialch =  (costpanelh * totacapacityh) + (laborcosth * installationtimeh) + costofeqh;
      return initialch;
    }
    function Maintenance_reph (){
      main_costh = ( (costmainth * year) + (costreph * (year/10)))* year;
      return main_costh;
    }
    function energy_savingsh (){
      energysavingh = energyproductionh() * (costofenrgypaneh) * year;
      return energysavingh;
    }
    function lifecyclecosth(){
      lcch = initial_insth() + Maintenance_reph() + energy_savingsh();
      return lcch;
    }
  
    //PARENT CALCULARION------------------------------------------------------------------------------------------------------------------------------
    
    for (var i = 0; i<popsize; i++){

      //select random variables
      var random = Math.random()*0.2;
        //capacity
        var randomcostpanel;
        function rcap1(min = costpanell, max = costpanelh) { // min and max included 
          return Math.floor(Math.random() * (max - min + 1) + min)
        }
        function rcap2(min = costpanell, max = costpanelh) { // min and max included 
          return Math.floor(Math.random() * (max - min + 1) + min)
        }
        if(document.getElementById("choice2").checked && document.getElementById("6").checked){//Focused method selected
          var costpanel = parseFloat( document.getElementById("caps").value);
         
         randomcostpanel = costpanel - ((random)*(rcap1() - rcap2()));

        }else{
    
      function rcap3(min = costpanell, max = costpanelh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
     randomcostpanel = rcap3() - ((random)*(rcap1() - rcap2()));
        }
    //limit it in the boundry
    if(randomcostpanel > costpanelh){
        arrcostpanel[i] = costpanelh;
    }else if(randomcostpanel < costpanell){
        arrcostpanel[i] = costpanell;
    }else{
        arrcostpanel[i] = randomcostpanel;
    }  
    arrcostpanel = arrcostpanel.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
    

///---------------------------------------------------------------------------------------
//total capacity 
    var randomtotacapacity;
    function rtota1(min = totacapacityl, max = totacapacityh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      function rtota2(min = totacapacityl, max = totacapacityh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      if(document.getElementById("choice2").checked && document.getElementById("7").checked){//focused method slected

        var totacapacity = parseFloat( document.getElementById("totacapacity").value);
         
        randomtotacapacity = totacapacity + ((random)*(rtota1() - rtota2()));

      }else{
        function rtota3(min = totacapacityl, max = totacapacityh) { // min and max included 
          return Math.floor(Math.random() * (max - min + 1) + min)
        }
       randomtotacapacity = rtota3() + ((random)*(rtota1() - rtota2()));
      }
   //limit it in the boundary   
   if(randomtotacapacity > totacapacityh){
        arrtotacapacity[i] = totacapacityh;
    }else if(randomtotacapacity < totacapacityl){
        arrtotacapacity[i] = totacapacityl;
    }else{
        arrtotacapacity[i] = randomtotacapacity;
    } 
    arrtotacapacity = arrtotacapacity.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));


    ///---------------------------------------------------------------------------------
//labor cost
    var randomlaborcost;
    function rlabor1(min = laborcostl, max = laborcosth) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      function rlabor2(min = laborcostl, max = laborcosth) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      if(document.getElementById("choice2").checked && document.getElementById("8").checked){//focused method selected
        
        var laborcost =parseFloat( document.getElementById("laborcost").value);
        randomlaborcost = laborcost - ((random)*(rlabor1() - rlabor2()));

      }else{
      function rlabor3(min = laborcostl, max = laborcosth) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
     randomlaborcost = rlabor3() - ((random)*(rlabor1() - rlabor2()));
      }
      //limit boundary
    if(randomlaborcost > laborcosth){
        arrlaborcost[i] = laborcosth;
    }else if(randomlaborcost < laborcostl){
        arrlaborcost[i] = laborcostl;
    }else{
        arrlaborcost[i] = randomlaborcost;
    } 
arrlaborcost = arrlaborcost.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

///--------------------------------------------------------------------------------------
//installation time
    var randominstallationtime;
    function rinstt1(min = installationtimel, max = installationtimeh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      function rinstt2(min = installationtimel, max = installationtimeh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      if(document.getElementById("choice2").checked && document.getElementById("9").checked){//focused method selected

        var installationtime =parseFloat( document.getElementById("installationtime").value);
        randominstallationtime = installationtime - ((random)*(rinstt1() - rinstt2()));

      }else{
      
      function rinstt3(min = installationtimel, max = installationtimeh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
     randominstallationtime = rinstt3() - ((random)*(rinstt1() - rinstt2()));
      }
      //limit boundary
    if(randominstallationtime > installationcosth){
        arrinstallationtime[i] = installationcosth;
    }else if(randominstallationtime < installationtimel){
        arrinstallationtime[i] = installationtimel;
    }else{
        arrinstallationtime[i] = randominstallationtime;
    }
    arrinstallationtime = arrinstallationtime.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

    ///---------------------------------------------------------------------------------
//equipment cost
    var randomcostofeq;
    function req1(min = costofeql, max = costofeqh) { // min and max included 
        
        return (Math.random() * (max - min + 1) + min);
      }
      function req2(min = costofeql, max = costofeqh) { // min and max included 
        return (Math.random() * (max - min + 1) + min);
      }
      if(document.getElementById("choice2").checked && document.getElementById("10").checked){//focused method selected

        var costofeq =parseFloat( document.getElementById("costofeq").value);
        randomcostofeq= costofeq + ((random)*(req1() - req2()));

      }else{
      function req3() { // min and max included 
        return (Math.random() * (costofeqh - costofeql + 1) + costofeql);
      }
      
     randomcostofeq = req3() + ((random)*(req1() - req2()));
      }
      //limit boundary
    if(randomcostofeq > costofeqh){
        arrcostofeq[i] = costofeqh;
    }else if(randomcostofeq < costofeql){
        arrcostofeq[i] = costofeql;
    }else{
        arrcostofeq[i] = randomcostofeq;
    }
    arrcostofeq = arrcostofeq.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));   

    ///---------------------------------------------------------------------------------
//maintenance cost 
    var randomcostmaint;
    function rmaint1(min = costmaintl, max = costmainth) { // min and max included 
        return (Math.random() * (max - min + 1) + min)
      }
      function rmaint2(min = costmaintl, max = costmainth) { // min and max included 
        return (Math.random() * (max - min + 1) + min)
      }

      if(document.getElementById("choice2").checked && document.getElementById("11").checked){//focused method selected

        var costmaint =parseFloat( document.getElementById("costmaint").value);
        randomcostmaint = costmaint + ((random)*(rmaint1()- rmaint2()));

      }else{
      function rmaint3(min = costmaintl, max = costmainth) { // min and max included 
        return (Math.random() * (max - min + 1) + min)
      }
     randomcostmaint = rmaint3() + ((random)*(rmaint1() - rmaint2()));
      }
      //limit boundary
    if(randomcostmaint > costmainth){
        arrcostmaint[i] = costmainth;
    }else if(randomcostmaint < costmaintl){
        arrcostmaint[i] = costmaintl;
    }else{
        arrcostmaint[i] = randomcostmaint;
    }
    arrcostmaint = arrcostmaint.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));  
    
    ///---------------------------------------------------------------------------------
//replacement cost
    var randomcostrep;
    function rlpv1(min = costrepl, max = costreph) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      function rlpv2(min = costrepl, max = costreph) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      if(document.getElementById("choice2").checked && document.getElementById("12").checked){//focused method selected

        var costrep =parseFloat(document.getElementById("costrep").value);
        randomcostrep = costrep + ((random)*(rlpv1() - rlpv2()));

      }else{

      function rlpv3(min = costrepl, max = costreph) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
     randomcostrep = rlpv3() + ((random)*(rlpv1() - rlpv2()));
      }
      //limit boundary
    if(randomcostrep > costreph){
        arrcostrep[i] = costreph;
    }else if(randomcostrep < costrepl){
        arrcostrep[i] = costrepl;
    }else{
        arrcostrep[i] = randomcostrep;
    }
arrcostrep = arrcostrep.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

///----------------------------------------------------------------------------------------
//panel cost energy
    var randomcostofenergypanel;
    function rinit1(min = costofenrgypanel, max = costofenrgypaneh) { // min and max included 
        return (Math.random() * (max - min + 1) + min)
      }
      function rinit2(min = costofenrgypanel, max = costofenrgypaneh) { // min and max included 
        return (Math.random() * (max - min + 1) + min)
      }

      if(document.getElementById("choice2").checked && document.getElementById("13").checked){//focused method selected

        var costofenrgypane = parseFloat( document.getElementById("costofenrgypane").value);
        randomcostofenergypanel = costofenrgypane + ((random)*(rinit1() - rinit2()));

      }else{
      function rinit3(min = costofenrgypanel, max = costofenrgypaneh) { // min and max included 
        return (Math.random() * (max - min + 1) + min)
      }
     randomcostofenergypanel = rinit3() + ((random)*(rinit1() - rinit2()));
      }
      //limit boundary
    if(randomcostofenergypanel > costofenrgypaneh){
        arrcostofenrgypane[i] =costofenrgypaneh;
    }else if(randomcostofenergypanel < costofenrgypanel){
        arrcostofenrgypane[i] = costofenrgypanel;
    }else{
        arrcostofenrgypane[i] = randomcostofenergypanel;
    }
    arrcostofenrgypane = arrcostofenrgypane.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
    
    ///---------------------------------------------------------------------------------
//free space percent 
    var randompercent;
    function rpercent1(min = percentl, max = percenth) { // min and max included 
        return (Math.random() * (max - min + 1) + min)
      }
      function rpercent2(min = percentl, max = percenth) { // min and max included 
        return (Math.random() * (max - min + 1) + min)
      }

      if(document.getElementById("choice2").checked && document.getElementById("1").checked){//focused method selected

        var percent =parseFloat( document.getElementById("percent").value);
        randompercent = percent + ((random)*(rpercent1() - rpercent2()));

      }else{
      function rpercent3(min = percentl, max = percenth) { // min and max included 
        return (Math.random() * (max - min + 1) + min)
      }
     randompercent = rpercent3() + ((random)*(rpercent1() - rpercent2()));
    }
    //limit boundary
    if(randompercent > percenth){
        arrpercent[i] = percenth;
    }else if(randompercent < percentl){
        arrpercent[i] = percentl;
    }else{
        arrpercent[i] = randompercent;
    }
    arrpercent = arrpercent.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

    ///---------------------------------------------------------------------------------------
//average daily radiation
    var randomavrad;
    function ravrad1(min = avradl, max = avradh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      function ravrad2(min = avradl, max = avradh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      if(document.getElementById("choice2").checked && document.getElementById("4").checked){//focuse method selected

        var avrad =parseFloat( document.getElementById("avrad").value);
        randomavrad = avrad + ((random)*(ravrad1() - ravrad2()));

      }else{
      function ravrad3(min = avradl, max = avradh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
     randomavrad = ravrad3() + ((random)*(ravrad1() - ravrad2()));
    }
    //limit boundary
    if(randomavrad > avradh){
        arravrad[i] = avradh;
    }else if(randomavrad < avradl){
        arravrad[i] = avradl;
    }else{
        arravrad[i] = randomavrad;
    }
    arravrad = arravrad.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

    ///------------------------------------------------------------------------------------
//pv height
    var randompvheight;
    function rpvheight1(min = pvheightl, max = pvheighth) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      function rpvheight2(min = pvheightl, max = pvheighth) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      if(document.getElementById("choice2").checked && document.getElementById("2").checked){//focused method selected

        var pvheight =parseFloat( document.getElementById("pvheight").value);
        randompvheight = pvheight + ((random)*(rpvheight1() - rpvheight2()));

      }else{
      function rpvheight3(min = pvheightl, max = pvheighth) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
     randompvheight = rpvheight3() + ((random)*(rpvheight1() - rpvheight2()));
    }
    //limit boundary
    if(randompvheight > pvheighth){
        arrpvheight[i] = pvheighth;
    }else if(randompvheight < pvheightl){
        arrpvheight[i] = pvheightl;
    }else{
        arrpvheight[i] = randompvheight;
    }
    arrpvheight = arrpvheight.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

///---------------------------------------------------------------------------------------
//pv width
var randompvwid;
    function rpvwid1(min = pvwidl, max = pvwidh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      function rpvwid2(min = pvwidl, max = pvwidh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      if(document.getElementById("choice2").checked && document.getElementById("3").checked){//focused method selected

        var pvwid =parseFloat( document.getElementById("pvwid").value);
        randompvwid = pvwid + ((random)*(rpvwid1() - rpvwid2()));

      }else{
      function rpvwid3(min = pvwidl, max = pvwidh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
     randompvwid = rpvwid3() + ((random)*(rpvwid1() - rpvwid2()));
    }
    //limit boundary
    if(randompvwid > pvwidh){
        arrpvwid[i] = pvwidh;
    }else if(randompvwid < pvwidl){
        arrpvwid[i] = pvwidl;
    }else{
        arrpvwid[i] = randompvwid;
    }
    arrpvwid = arrpvwid.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

    ///--------------------------------------------------------------------------------
//hours number of sun 
    var randomnumsun;
    function rnumsun1(min = numsunl, max = numsunh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      function rnumsun2(min = numsunl, max = numsunh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      if(document.getElementById("choice2").checked && document.getElementById("5").checked){//focused method selected

        var numsun =parseFloat( document.getElementById("numsun").value);
        randomnumsun = numsun + ((random)*(rnumsun1() - rnumsun2()));

      }else{
      function rnumsun3(min = numsunl, max = numsunh) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
     randomnumsun = rnumsun3() + ((random)*(rnumsun1() - rnumsun2()));
    }
    //limit boundary
    if(randomnumsun > numsunh){
        arrnumsun[i] = numsunh;
    }else if(randomnumsun < numsunl){
        arrnumsun[i] = numsunl;
    }else{
        arrnumsun[i] = randomnumsun;
    }
    arrnumsun = arrnumsun.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

    //obj1---------------------------------------------------------------------------------------------------
        
   //obj1
       
 /*  libre.push( 1 - (arrpercent[i] * 0.01));
   
   totalareaf.push(height * wid * libre[i]);
        if(totalareaf[i] >= totalareah()){
          totalareaf[i] = totalareah();
          }else if(totalareaf[i] <= totalareal()){
              totalareaf[i] = totalareal();
          }else{
              totalareaf[i] = totalareaf[i];
          }
          totalareaf = totalareaf.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

   pvareaf.push(arrpvheight[i] * arrpvwid[i]);

   //limit boundary
   if(pvareaf[i] >= pvareah()){
    pvareaf[i] = pvareah();
    }else if(pvareaf[i] <= pvareal()){
        pvareaf[i] = pvareal();
    }else{
        pvareaf[i] = pvareaf[i];
    }
    pvareaf = pvareaf.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
   
   numberpvf.push(totalareaf[i]/pvareaf[i]);
   /*if(numberpvf[i] >= numberpvh()){
    numberpvf[i] = numberpvh();
    }else*//* if(numberpvf[i] <= numberpvl()){
        numberpvf[i] = numberpvl();
    }else{
        numberpvf[i] = numberpvf[i];
    }
    numberpvf = numberpvf.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
   
   
   //averageradf.push(arrtotalrad[i]/arrnumdays[i]);
   
   
   solarenergy.push(365 * arravrad[i] * totalareaf[i] * eff1 * 0.01 * arrnumsun[i] * year);

   //limit boundary
   if(solarenergy[i] >= energyproductionh()){
    solarenergy[i] = energyproductionh();
    }else if(solarenergy[i] <= energyproductionl()){
        solarenergy[i] = energyproductionl();
    }else{
        solarenergy[i] = solarenergy[i];
    }
    solarenergy = solarenergy.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

    var loss = Math.abs(solarenergy[i] - cons)/cons;
   lossprobaf.push(loss)

   //limit boundary
   if(loss <= lossprobh()) {
       lossprobaf[i] = lossprobh();
   }else if(loss > lossprobl()){
       lossprobaf[i] = lossprobl();
   }else{
       lossprobaf[i] = loss;
   }
   lossprobaf = lossprobaf.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

    //----------------------------------obj2----------------------------------------------------------
    //initial cost
    initialcostf.push((arrcostpanel[i] * arrtotacapacity[i]) + (arrlaborcost[i] * arrinstallationtime[i]) + arrcostofeq[i]);
  
    //limit boundary
    if(initialcostf[i] >= initialch){
        initialcostf[i] = initialch;
        }else if(initialcostf[i] <= initialcl){
          initialcostf[i] = initialcl;
        }else{
          initialcostf[i] = initialcostf[i];
        }
        initialcostf = initialcostf.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
  
        //maintenance cost
        maintenancecostf.push( ( (arrcostmaint[i] * year) + (arrcostrep[i] * (year/10)))* year);

        //limit boundary
        if(maintenancecostf[i] >= main_costh){
            maintenancecostf[i] = main_costh;
            }else if(maintenancecostf[i] <= main_costl){
                maintenancecostf[i] = main_costl;
            }else{
                maintenancecostf[i] = maintenancecostf[i];
            }
            maintenancecostf = maintenancecostf.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

            //ENERGY COST SAVINGS
            energysaving.push(solarenergy[i]* (arrcostofenrgypane[i]) * year);

        //limit boundary
        if(energysaving[i] >= energysavingh){
            energysaving[i] = energysavingh;
            }else if(energysaving[i] <= energysavingl){
                energysaving[i] = energysavingl;
            }else{
                energysaving[i] = energysaving[i];
            }
            energysaving = energysaving.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

            var pp =  initialcostf[i] + maintenancecostf[i] + energysaving[i];
   var lifecyclecostff =[];
   lifecyclecostff.push(pp)

   //limit boundary
   if(pp >= lifecyclecosth()){
       lifecyclecostf[i] = lifecyclecosth();
   }else if(pp <= lifecyclecostl()){
       lifecyclecostf[i] = lifecyclecostl();
   }else{
       lifecyclecostf[i] = pp;
   }
   lifecyclecostf = lifecyclecostf.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
 
   arrf1.push(lifecyclecostf[i]);
   arrf2.push(lossprobaf[i]);
   parent.push ([lifecyclecostf [i],lossprobaf [i]]);
   arrgolbal.push([arrcostpanel[i],arrtotacapacity[i],arrlaborcost[i],arrinstallationtime[i]
    ,arrcostofeq[i],arrcostmaint[i],arrcostrep[i],arrcostofenrgypane[i],arrpercent[i],arrpvheight[i], arrpvwid[i],arrnumsun[i],arravrad[i], 
        arrf1[i],arrf2[i]]);
           ayr.push([arrcap[i],arrcostperunit[i]])

           matrixparameter.push([pvareaf[i], numberpvf[i], solarenergy[i], initialcostf[i], maintenancecostf[i], energysaving[i],arrf1[i],arrf2[i]]);
   */ 
      
          }
          

  
    
    combinedArraycapacity = combinedArraycapacity.concat(arrtotacapacity);
    combinedavrad = combinedavrad.concat(arravrad);
    combinedcostpanel = combinedcostpanel.concat(arrcostpanel);
    combinedeqcost = combinedeqcost.concat(arrcostofeq);
    combinedfreepercent = combinedfreepercent.concat(arrpercent);
    combinedinstime = combinedinstime.concat(arrinstallationtime);
    combinedmaintenancecost = combinedmaintenancecost.concat(arrcostmaint);
    combinedpanelcostenergy = combinedpanelcostenergy.concat(arrcostofenrgypane);
    combinedpvheight = combinedpvheight.concat(arrpvheight);
    combinedpvwidth = combinedpvwidth.concat(arrpvwid);
    combinedsunhour = combinedsunhour.concat(arrnumsun);
    combinedlaborcost =combinedlaborcost.concat(arrlaborcost);
    combinedrepcost = combinedrepcost.concat(arrcostrep);

  console.log("totoal capacity", combinedArraycapacity)
  console.log("av rad", combinedavrad)
  console.log("cost panel",combinedcostpanel)
  console.log("eq cost",combinedeqcost)
  console.log("free percent", combinedfreepercent)
  console.log("inst time",combinedinstime)
  console.log("maint cost", combinedmaintenancecost)
  console.log("panel cost energy",combinedpanelcostenergy)
  console.log("pvheight",combinedpvheight)
  console.log("pv width", combinedpvwidth)
  console.log("sun hour",combinedsunhour)
  console.log("labor cost",combinedlaborcost)
  console.log("rep cost",combinedrepcost)

    console.log(arrlifepv)
    console.log(parent)
    console.log(arrf2)
    console.log("h",arrpvheight)
    console.log("w",arrpvwid)
    console.log("total area",totalareaf)
    console.log("percent", arrpercent)
    console.log("pvarea", pvareaf)
    console.log(matrixparameter)
   /* console.log(arrheight)
    console.log(civilp)
    console.log(arrcons)*/
    console.log(solarenergy)
    console.log(initialcostf)
    console.log(maintenancecostf)
    console.log(energysaving)
    console.log(year)
    console.log(arrcostpanel)
    console.log(arrtotacapacity)
    console.log(arrlaborcost)
    console.log(arrinstallationtime)
    console.log(arrcostofeq)
    console.log(arrcostmaint)
    console.log(arrcostrep)
    console.log(arrcostofenrgypane)
    console.log(arrpercent)

console.log(arrlaborcost)    //arrgolbal.shift();
    console.log(lcch)
    console.log(arrgolbal)

    //return them from the function to export to use in other js files
return [costpanelh,costpanell,totacapacityl,totacapacityh,laborcostl,laborcosth,installationtimel,installationtimeh,
    costofeql,costofeqh,costmaintl,costmainth,costrepl,costreph,costofenrgypanel,costofenrgypaneh,costenergyl,costenergyh,heightl,heighth,widl,widh,percentl,percenth,pvheightl,pvheighth,pvwidl,pvwidh,numsunl,numsunh,avradl,avradh
,lccl,lppl,lcch,lpph,totareah,totareal,totpvareah,totpvareal,numbpbh,numbpvl,enerprodh,enerprodl,initialch,initialcl,main_costh,main_costl,energysavingh ,energysavingl,
capp,ccostpu,cinstcost,civilp,infp,intp,lifepvp,initckp,lifeconvp,ppvp,ploadp,consp,yearp,costenp,heightp,widp,percentp,pvheightp,pvwidp,numsunp,avradp,
lifecyclecostf,lossprobaf,
arrf1,arrf2,parent,arrgolbal,matrixparameter,kr,nr,popsize,cons,year,lifespan, height, wid, eff1,
combinedArraycapacity,combinedavrad,combinedcostpanel,combinedeqcost,combinedfreepercent,combinedinstime,combinedlaborcost,combinedmaintenancecost,
combinedpanelcostenergy,combinedpvheight,combinedpvwidth,combinedrepcost,combinedsunhour];
}


export  {costpanelh,costpanell,totacapacityl,totacapacityh,laborcostl,laborcosth,installationtimel,installationtimeh,
    costofeql,costofeqh,costmaintl,costmainth,costrepl,costreph,costofenrgypanel,costofenrgypaneh,costenergyl,costenergyh,heightl,heighth,widl,widh,percentl,percenth,pvheightl,pvheighth,pvwidl,pvwidh,numsunl,numsunh,avradl,avradh
,lccl,lppl,lcch,lpph,totareah,totareal,totpvareah,totpvareal,numbpbh,numbpvl,enerprodh,enerprodl,initialch,initialcl,main_costh,main_costl,energysavingh ,energysavingl,
capp,ccostpu,cinstcost,civilp,infp,intp,lifepvp,initckp,lifeconvp,ppvp,ploadp,consp,yearp,costenp,heightp,widp,percentp,pvheightp,pvwidp,numsunp,avradp,
lifecyclecostf,lossprobaf,
arrf1,arrf2,parent,arrgolbal,matrixparameter,kr,nr,popsize,cons,year,lifespan,height, wid,eff1,
combinedArraycapacity,combinedavrad,combinedcostpanel,combinedeqcost,combinedfreepercent,combinedinstime,combinedlaborcost,combinedmaintenancecost,
combinedpanelcostenergy,combinedpvheight,combinedpvwidth,combinedrepcost,combinedsunhour};