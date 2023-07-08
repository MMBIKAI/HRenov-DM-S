import {height,wid,totareah,totareal,totpvareal,totpvareah,numbpvl, numbpbh,year,eff1,enerprodl,enerprodh,lppl,lpph,cons,initialch,initialcl,
    combinedArraycapacity,combinedavrad,combinedcostpanel,combinedeqcost,combinedfreepercent,combinedinstime,combinedlaborcost,combinedmaintenancecost,
    combinedpanelcostenergy,combinedpvheight,combinedpvwidth,combinedrepcost,combinedsunhour,
  main_costh,main_costl,energysavingh,energysavingl,lcch,lccl} from './random2.mjs';

    let libre = [];
    var arrfun1 = [];
    var arrf1 = [];
    var arrfun2 = [];
    var arrf2 =[];
    var parentt = [];
    var parent = [];
    var arrgolball = [];
    var arrgolbal = [];
    var ayr =[];
    var matrixparameters =[];
    var matrixparameter = [];
//let pvareaf = [];


window.objfunc = () => {
  let tempTotalareaf = []; // Create a new array for each function call
  let temppvarea = [];
  let temppvnumber = [];
  let tempsolarenergy = [];
  let templossprob = [];
  let tempinitialcost = [];
  let tempmaintenance = [];
  let tempenergysaving = [];
  let templcc = [];

  matrixparameter.shift();

  for (let i = 0; i < combinedfreepercent.length; i++) {

    //obj1---------------------------------------------------------------------------------------------------
    //total area 
    libre.push(1 - combinedfreepercent[i] * 0.01);

    let area = height * wid * libre[i];
    if (area >= totareah) {
      area = totareah;
    } else if (area <= totareal) {
      area = totareal;
    }
    tempTotalareaf.push(Math.round(area * Math.pow(10, 6)) / Math.pow(10, 6));

    //PV area
    let pvarea = combinedpvheight[i] * combinedpvwidth[i];

    //limit boundary
    if(pvarea >= totpvareah){
      pvarea = totpvareah;
      }else if(pvarea <= totpvareal){
          pvarea = totpvareal;
      }
      temppvarea.push(Math.round(pvarea * Math.pow(10,6)) / Math.pow(10,6));

      //pv module number
      let numberpvf = tempTotalareaf[i]/temppvarea[i];

      if(numberpvf >= numbpbh){
        numberpvf = numbpbh;
        }else if(numberpvf <= numbpvl){
            numberpvf = numbpvl;
        }
        temppvnumber.push(Math.round(numberpvf * Math.pow(10,6)) / Math.pow(10,6));


      // solar energy production
      let solarenergy = 365 * combinedavrad[i] * tempTotalareaf[i] * eff1 * 0.01 * combinedsunhour[i] * year;

        //limit boundary
        if(solarenergy >= enerprodh){
         solarenergy = enerprodh;
         }else if(solarenergy <= enerprodl){
             solarenergy = enerprodl;
         }
         tempsolarenergy.push(Math.round(solarenergy * Math.pow(10,6)) / Math.pow(10,6));

      //OBJECTIVE ONE: LOSS OF LOAD PROBABILITY

      let loss = Math.abs(tempsolarenergy[i] - cons)/cons;
   
      //limit boundary
      if(loss <= lpph) {
          loss = lpph;
      }else if(loss > lppl){
          loss = lppl;
      }
      templossprob.push(Math.round(loss * Math.pow(10,6)) / Math.pow(10,6));

      //----------------------------------obj2----------------------------------------------------------
    //initial cost
    let initialcostf = (combinedcostpanel[i] * combinedArraycapacity[i]) + (combinedlaborcost[i] * combinedinstime[i]) + combinedeqcost[i];
  
    //limit boundary
    if(initialcostf >= initialch){
        initialcostf = initialch;
        }else if(initialcostf <= initialcl){
          initialcostf = initialcl;
        }
        tempinitialcost.push(Math.round(initialcostf * Math.pow(10,6)) / Math.pow(10,6));

    //maintenance cost
    let maintenancecostf = ( (combinedmaintenancecost[i] * year) + (combinedrepcost[i] * (year/10)))* year;

    //limit boundary
    if(maintenancecostf >= main_costh){
        maintenancecostf = main_costh;
        }else if(maintenancecostf <= main_costl){
            maintenancecostf = main_costl;
        }
        tempmaintenance.push(Math.round(maintenancecostf * Math.pow(10,6)) / Math.pow(10,6));

    //ENERGY COST SAVINGS
    let energysaving = tempsolarenergy[i]* (combinedpanelcostenergy[i]) * year;

    //limit boundary
    if(energysaving >= energysavingh){
        energysaving = energysavingh;
        }else if(energysaving <= energysavingl){
            energysaving = energysavingl;
        }
        tempenergysaving.push(Math.round(energysaving * Math.pow(10,6)) / Math.pow(10,6));

      //OBJECTIVE TWO : LIFE CYCLE COST
      let pp =  tempinitialcost[i] + tempmaintenance[i] -  tempenergysaving[i];
        
        //limit boundary
        if(pp >= lcch){
            pp = lcch;
        }else if(pp <= lccl){
            pp = lccl;
        }
        templcc.push(Math.round(pp * Math.pow(10,6)) / Math.pow(10,6));

   arrfun1.push(templcc[i]);
    
   arrfun2.push(templossprob[i]);
    
   parentt.push ([templcc [i],templossprob [i]]);
    
   arrgolball.push([combinedcostpanel[i],combinedArraycapacity[i],combinedlaborcost[i],combinedinstime[i]
    ,combinedeqcost[i],combinedmaintenancecost[i],combinedrepcost[i],combinedpanelcostenergy[i],combinedfreepercent[i],combinedpvheight[i], combinedpvwidth[i],combinedsunhour[i],combinedavrad[i], 
        templcc[i],templossprob[i]]);
           //ayr.push([arrcap[i],arrcostperunit[i]])
            

           matrixparameters.push([temppvarea[i], temppvnumber[i], tempsolarenergy[i], tempinitialcost[i], tempmaintenance[i], tempenergysaving[i],templcc[i],templossprob[i]]);
            
          }
        
          function removeDuplicateRows(array) {
            const uniqueRows = [];
            const seenRows = new Set();
          
            for (let i = 0; i < array.length; i++) {
              const currentRow = array[i];
              const rowString = currentRow.join(',');
          
              if (!seenRows.has(rowString)) {
                uniqueRows.push(currentRow);
                seenRows.add(rowString);
              }
            }
          
            return uniqueRows;
          }
          arrgolbal = removeDuplicateRows(arrgolball);
          matrixparameter = removeDuplicateRows(matrixparameters);
  //combinedtotalarea = combinedtotalarea.concat(tempTotalareaf); // Concatenate tempTotalareaf with combinedtotalarea
  console.log("total area", tempTotalareaf);
  console.log("pv area",temppvarea);
  console.log("pv module area",temppvnumber);
  console.log("solar enrgy production",tempsolarenergy);
  console.log("LOSSOF LOAD PROBABILITY",templossprob)
  console.log("initial cost",tempinitialcost)
  console.log("maintenance cost",tempmaintenance);
  console.log("energy saving", tempenergysaving);
  console.log("LIFE CYCLE COST",templcc);
  console.log("global variables", arrgolball);
  console.log("arrf1", arrfun1)
  console.log("unique",arrgolbal)
  console.log("parent",parentt);
  console.log("KPI",matrixparameters);
  //console.log(combinedtotalarea);
  console.log(combinedArraycapacity);

  // Reset the arrays for the next function call
  libre = [];
  //pvareaf = [];


};

export {matrixparameter,parent,arrgolbal};






