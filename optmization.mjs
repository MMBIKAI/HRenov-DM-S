import {height,wid,totareah,totareal,totpvareal,totpvareah,numbpvl, numbpbh,year,eff1,enerprodl,enerprodh,lppl,lpph,cons,initialch,initialcl,
    combinedArraycapacity,combinedavrad,combinedcostpanel,combinedeqcost,combinedfreepercent,combinedinstime,combinedlaborcost,combinedmaintenancecost,
    combinedpanelcostenergy,combinedpvheight,combinedpvwidth,combinedrepcost,combinedsunhour,
  main_costh,main_costl,energysavingh,energysavingl,lcch,lccl,popsize,
  costpanelh,costpanell,totacapacityl,totacapacityh,laborcostl,laborcosth,installationtimel,installationtimeh,
  costofeql,costofeqh,costmaintl,costmainth,costrepl,costreph,costofenrgypanel,costofenrgypaneh,costenergyl,costenergyh,heightl,heighth,widl,widh,percentl,percenth,pvheightl,pvheighth,pvwidl,pvwidh,numsunl,numsunh,avradl,avradh} from './random2.mjs';

import {matrixparameter,parent,arrgolbal} from './objectivefunction.mjs'
    
//arrgolbal.shift();
    
    //var gen =10; //number of generation
    var gen = 10;
    var allgeneration = []; 
   
    var arrglobalmutation = []; // means all variables + objective functions in mutation
    var combined = []; // just objective functions
 
    var arrglobalnew =[]; // means all variables + objective functions in crossover
    //var ayrcross =[];
    var globalcombine = []; // means all variables + objective functions 
    var matrixparameters = []; // onlyparameters
    var allmatrix =[];
    var eachgenmatrix = [];
   // var combined = [];
//   var arf1 = arrf1;
   //var arf2 = arrf2;
 
 //   console.log(lpph)
    var allpoint; //all point tp present
    //console.log(arrgolbal)
    
window.exportt = () => {
    matrixparameters.shift(); //remove heading from random generation avoiding error
    console.log(lcch)
    var iteration = arrgolbal.length *2; // iteration to loop in hte nondomination phase
      
    //var mutaterate = 0.98;
    var mutaterate = Math.random()*0.2;
    //var crossoverrate  = 0.09;
    allgeneration.push(matrixparameter);

    //--------------------------------------------------------------------------------
    //take the values for the arrglobal array exported for random2
    var arcostpanel = arrgolbal.map(function(value,index) { return value[0]; });
    var artotacapacity = arrgolbal.map(function(value,index) { return value[1]; });
    var arlaborcost = arrgolbal.map(function(value,index) { return value[2]; });
    var arinsttime = arrgolbal.map(function(value,index) { return value[3]; });
    var arcostofeq = arrgolbal.map(function(value,index) { return value[4]; });
    var arcostmaint = arrgolbal.map(function(value,index) { return value[5]; });
    var arcostrep = arrgolbal.map(function(value,index) { return value[6]; });
    var arcostofenergypane = arrgolbal.map(function(value,index) { return value[7]; }); 
    var arpercent = arrgolbal.map(function(value,index) { return value[8]; });
    var arpvheight = arrgolbal.map(function(value,index) { return value[9]; });
    var arpvwid = arrgolbal.map(function(value,index) { return value[10]; });
    var arnumsun = arrgolbal.map(function(value,index) { return value[11]; });
    var aravrad = arrgolbal.map(function(value,index) { return value[12]; });
    var arf1 = arrgolbal.map(function(value,index) { return value[13]; });
    var arf2 = arrgolbal.map(function(value,index) { return value[14]; });
    var arparent = [].concat(parent);

  //  console.log(arheight)
  console.log(eff1)
  console.log(year)
  console.log(cons)
  console.log(numsunh)

    for (var e = 0; e< gen; e ++) {
        var popused = arrgolbal;
        //var popuse =  popused.shift();

        //variables defined
         console.log(popused)
         var arrcostpanelmutate = [];
         var arrtotacapacitymutate = [];
         var arrlaborcostmutate = [];
         var arrinsttimemutate = [];
         var arrcostofeqmutate = [];
         var arrcostmaintmutate = [];
         var arrcostrepmutate = [];
         var arrcostenergypmutate = [];
         var arrlifeconvmutate = [];
         var arrrepcostmutate = [];
         var arrppvmutate = [];
         var arrploadmutate = [];
         var arrcostpanelcross = [];
         var arrtotacapacitycross = [];
         var arrlaborcostcross =[];
         var arrinsttimecross = [];
         var arrcostofeqcross = [];
         var arrcostmaintcross = [];
         var arrcostrepcross = [];
         var arrcostenergycross = [];
         var arrlifeconvcross =[];
         var arrrepcostcross = [];
         var arrppvcross = [];
         var arrploadcross = [];
         var initial_cost_newparent = [];
         var maintenancecost_newparent = [];
         var energysaving_newparent = [];
         var summirize = [];
         var rep = [];
         var lifecyclecost_newparent = [];
         var lossproba_newparent = [];
         var newparent= [];
         var initial_cost_mutation = [];
         var maintenancecost_mutation = [];
         var energysaving_mutation = [];
         var summirize_mutate = [];
         var rep_mutation = [];
         var lifecyclecost_mutation = [];
         var lossproba_mutation = [];
         var parentmutate= [];
         var arrf1cross = [];
         var arrf1mutate =[];
         var arrf2mutate = [];
         var arrf2cross =[];
         var offspring = [];
         var finalpop=[];
         arrglobalnew = [];
         arrglobalmutation = [];
         var closeparent=[];
         var value1 = [];
         var value2 = [];
         arf1 = [];
         arf2 = [];
         var ayrmutate = [];
         var ayrcross = [];
         var matrixparametermutate = [];
         var matrixparametercross = [];
         var firstMatix = [];

         var arrconsmutate = [];
         var arryearmutate = [];
         var arrencostmutate = [];
         var arrheightmutate = [];
         var arrwidmutate = [];
         var arrpercentmutate = [];
         var arrtotalradmutate = [];
         var arrnumdaysmutate = [];
         var arrpvheightmutate = [];
         var arrpvwidmutate = [];
         var arrnumsunmutate = [];
         var totalareamutate = [];
         var pvareamutate = [];
         var numberpvmutate = [];
         var averageradmutate =[];
         var solarenergymutate = [];
         var arrconscross = [];
         var arryearcross = [];
         var arrencostcross = [];
         var arrheightcross = [];
         var arrwidcross = [];
         var arrpercentcross = [];
         var arrtotalradcross = [];
         var arrnumdayscross = [];
         var arrpvheightcross = [];
         var arrpvwidcross = [];
         var arrnumsuncross = [];
         var totalareacross = [];
         var pvareacross = [];
         var numberpvcross = [];
         var averageradcross = [];
         var solarenergycross = [];
         var arravradmutate = [];
         var arravradcross = [];

for (var t = 0; t< arrgolbal.length; t ++) { 
        //MUTATION----------------------------------------------------------------------------------------------------

            //var minmutationcap = Math.random(...arrcap);
            //panel cost
          
          //  var  costpanelmutate = arcostpanel[t] * ((mutaterate) );
          function rcap1(min = costpanell, max = costpanelh) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          function rcap2(min = costpanell, max = costpanelh) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          var  costpanelmutate = arcostpanel[t] + ((mutaterate)*(rcap1()-rcap2()) );
        //limit boundary
            if(costpanelmutate > costpanelh){
                arrcostpanelmutate[t] = costpanelh;
         }else if(costpanelmutate < costpanell){
                arrcostpanelmutate[t] = costpanell;
            }else{
                arrcostpanelmutate[t] = costpanelmutate;
            }
                //arrcapmutate.push(arrcap[t] - ((mutaterate) * (arrcap[t] - minmutationcap)));
              
              //digit to 6
                arrcostpanelmutate = arrcostpanelmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
            
          ///
          //total capacity 
                
          //var totacapacitymutate = artotacapacity[t] + ((1-(mutaterate)) * artotacapacity[t] );
          function rtota1(min = totacapacityl, max = totacapacityh) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          function rtota2(min = totacapacityl, max = totacapacityh) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
          }
          var totacapacitymutate = artotacapacity[t] + ((mutaterate) * (rtota1() - rtota2()) );
            //limit boundary
                if(totacapacitymutate > totacapacityh){
                    arrtotacapacitymutate[t] = totacapacityh;
                }else if(totacapacitymutate < totacapacityl){
                    arrtotacapacitymutate[t] = totacapacityl;
                }else{
                    arrtotacapacitymutate[t] = totacapacitymutate;
                }
                    //arrcostperunitmutate.push(arrcostperunit[t] - ((mutaterate) * (arrcostperunit[t] - minmutationcostperunit)));
                   
                    //digit to 6
                    arrtotacapacitymutate = arrtotacapacitymutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
            
         ///
         //labor cost

                    //var laborcostmutate = arlaborcost[t] * ((mutaterate) );
                    function rlabor1(min = laborcostl, max = laborcosth) { // min and max included 
                        return Math.floor(Math.random() * (max - min + 1) + min)
                      }
                      function rlabor2(min = laborcostl, max = laborcosth) { // min and max included 
                        return Math.floor(Math.random() * (max - min + 1) + min)
                      }
                      var laborcostmutate = arlaborcost[t] + ((mutaterate) * (rlabor1() - rlabor2()) );
                //limit boundary
                    if(laborcostmutate > laborcosth){
                        arrlaborcostmutate[t] = laborcosth;
                    }else if(laborcostmutate < laborcostl){
                        arrlaborcostmutate[t] = laborcostl;
                    }else{
                        arrlaborcostmutate[t] = laborcostmutate;
                    }
                        //arrinstallationcostmutate.push(arrinstallationcost[t] - ((mutaterate) * (arrinstallationcost[t] - minmutationinstcost)));
                        
                        //digit to 6
                        arrlaborcostmutate = arrlaborcostmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
            
          ///
          //installation time

                   //var insttimemutate = arinsttime[t] * ((mutaterate)  );
                   function rinstt1(min = installationtimel, max = installationtimeh) { // min and max included 
                    return Math.floor(Math.random() * (max - min + 1) + min)
                  }
                  function rinstt2(min = installationtimel, max = installationtimeh) { // min and max included 
                    return Math.floor(Math.random() * (max - min + 1) + min)
                  }
                  var insttimemutate = arinsttime[t] + ((mutaterate)*(rinstt1() - rinstt2())  );
                    //limit boundary
                        if(insttimemutate > installationtimeh){
                            arrinsttimemutate[t] = installationtimeh;
                        }else if(insttimemutate < installationtimel){
                            arrinsttimemutate[t] = installationtimel;
                        }else{
                            arrinsttimemutate[t] = insttimemutate;
                        }
                            //arrcivilcostmutate.push(arrcivilcost[t] - ((mutaterate) * (arrcivilcost[t] - minmutationcivil)));
                            
                            //digit to 6
                            arrinsttimemutate = arrinsttimemutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
            
            ///
            //equipment cost
                   
                //var costofeqmutate = arcostofeq[t] * ((mutaterate)  );
                function req1(min = costofeql, max = costofeqh) { // min and max included 
        
                    return (Math.random() * (max - min + 1) + min);
                  }
                  function req2(min = costofeql, max = costofeqh) { // min and max included 
                    return (Math.random() * (max - min + 1) + min);
                  }
                  var costofeqmutate = arcostofeq[t] + ((mutaterate)*(req1() - req2())  );
                        //limit boundary
                                if(costofeqmutate > costofeqh){
                                    arrcostofeqmutate[t] = costofeqh;
                                }else if(costofeqmutate < costofeql){
                                    arrcostofeqmutate[t] = costofeql;
                                }else{
                                    arrcostofeqmutate[t] = costofeqmutate;
                                }
                                   // arrinflationmutate.push(arrinflation[t] - ((mutaterate) * (arrinflation[t] - minmutationinflation)));
                                  
                                  //digit to 6
                                   arrcostofeqmutate = arrcostofeqmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
            
           ///
           //maintenance cost

                    //var costmaintmutate = arcostmaint[t] * ((mutaterate) );
                    function rmaint1(min = costmaintl, max = costmainth) { // min and max included 
                        return (Math.random() * (max - min + 1) + min)
                      }
                      function rmaint2(min = costmaintl, max = costmainth) { // min and max included 
                        return (Math.random() * (max - min + 1) + min)
                      }
                      var costmaintmutate = arcostmaint[t] + ((mutaterate)*(rmaint1() - rmaint2()) );
                                //limit bondary
                                  if(costmaintmutate > costmainth){
                                      arrcostmaintmutate[t] = costmainth;
                                  }else if(costmaintmutate < costmaintl){
                                    arrcostmaintmutate[t] = costmaintl;
                                  }else{
                                    arrcostmaintmutate[t] = costmaintmutate;
                                  }
                                      ///arrinterestmutate.push(arrinterest[t] - ((mutaterate) * (arrinterest[t] - minmutationinterest)));
                                     
                                      //digit to 6
                                      arrcostmaintmutate = arrcostmaintmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
            
            ///
            //replacement cost
            
            //var repcostmutate = arcostrep[t] * ((mutaterate) );
            function rlpv1(min = costrepl, max = costreph) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              function rlpv2(min = costrepl, max = costreph) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              var repcostmutate = arcostrep[t] + ((mutaterate)*(rlpv1() - rlpv2()) );
                                  //limit boundary
                                      if(repcostmutate > costreph){
                                          arrcostrepmutate[t] = costreph;
                                      }else if(repcostmutate < costrepl){
                                        arrcostrepmutate[t] = costrepl;
                                      }else{
                                        arrcostrepmutate[t] = repcostmutate;
                                      }
                                         // arrlifepvmutate.push(arrlifepv[t] - ((mutaterate) * (arrlifepv[t] - minmutationlifepv)));
                                        
                                         //digit to 6
                                         arrcostrepmutate = arrcostrepmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
            
            ///
            //cost of energy
            //var costenergypmutate = arcostofenergypane[t] + ((1-(mutaterate)) * arcostofenergypane[t] );
            function rinit1(min = costofenrgypanel, max = costofenrgypaneh) { // min and max included 
                return (Math.random() * (max - min + 1) + min)
              }
              function rinit2(min = costofenrgypanel, max = costofenrgypaneh) { // min and max included 
                return (Math.random() * (max - min + 1) + min)
              }
              var costenergypmutate = arcostofenergypane[t] + (mutaterate * (rinit1() - rinit2()) );
                                      //limit boundary
                                         if(costenergypmutate > costofenrgypaneh){
                                             arrcostenergypmutate[t] = costofenrgypaneh;
                                         }else if(costenergypmutate < costofenrgypanel){
                                            arrcostenergypmutate[t] = costofenrgypanel;
                                         }else{
                                            arrcostenergypmutate[t] = costenergypmutate;
                                         }
                                             //arrinitcostkmutate.push(arrinitcostk[t] - ((mutaterate) * (arrinitcostk[t] - minmutationinitcostk)));
                                             
                                             //digit to 6
                                             arrcostenergypmutate = arrcostenergypmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
            
            ///
            //free space percent

            //var percentmutate = arpercent[t] * ((mutaterate) );
            function rpercent1(min = percentl, max = percenth) { // min and max included 
                return (Math.random() * (max - min + 1) + min)
              }
              function rpercent2(min = percentl, max = percenth) { // min and max included 
                return (Math.random() * (max - min + 1) + min)
              }
              var percentmutate = arpercent[t] + ((mutaterate)*(rpercent1() - rpercent2()) );
                                         //limit boundary
                                                    if(percentmutate > percenth){
                                                        arrpercentmutate[t] = percenth;
                                                    }else if(percentmutate < percentl){
                                                        arrpercentmutate[t] = percentl;
                                                    }else{
                                                        arrpercentmutate[t] = percentmutate;
                                                    }
                                                        //arrploadmutate.push(arrpload[t] - ((mutaterate) * ((arrpload[t]) - minmutationpload)));
                                                        
                                                        arrpercentmutate = arrpercentmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

            ///
            //pv height                                            
            //var pvheightmutate = arpvheight[t]  + ((1-(mutaterate)) * arpvheight[t] );
            function rpvheight1(min = pvheightl, max = pvheighth) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              function rpvheight2(min = pvheightl, max = pvheighth) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              var pvheightmutate = arpvheight[t]  + (mutaterate * (rpvheight1() - rpvheight2()) );
                                                    //limit boundary
                                                        if(pvheightmutate > pvheighth){
                                                            arrpvheightmutate[t] = pvheighth;
                                                        }else if(pvheightmutate < pvheightl){
                                                            arrpvheightmutate[t] = pvheightl;
                                                        }else{
                                                            arrpvheightmutate[t] = pvheightmutate;
                                                        }
                                                            //arrploadmutate.push(arrpload[t] - ((mutaterate) * ((arrpload[t]) - minmutationpload)));
                                                            arrpvheightmutate = arrpvheightmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

            ///
            // pv width
            //var pvwidmutate = arpvwid[t]  + ((1-(mutaterate)) * arpvwid[t] );
            function rpvwid1(min = pvwidl, max = pvwidh) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              function rpvwid2(min = pvwidl, max = pvwidh) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              var pvwidmutate = arpvwid[t]  + (mutaterate * (rpvwid1() - rpvwid2()) );

                                                if(pvwidmutate > pvwidh){
                                                    arrpvwidmutate[t] = pvwidh;
                                                }else if(pvwidmutate < pvwidl){
                                                    arrpvwidmutate[t] = pvwidl;
                                                }else{
                                                    arrpvwidmutate[t] = pvwidmutate;
                                                }
                                                    //arrploadmutate.push(arrpload[t] - ((mutaterate) * ((arrpload[t]) - minmutationpload)));
                                                    arrpvwidmutate = arrpvwidmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

            ///
            // sun hours 
            //var numsunmutate = arnumsun[t] * ((mutaterate) );
            function rnumsun1(min = numsunl, max = numsunh) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              function rnumsun2(min = numsunl, max = numsunh) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              var numsunmutate = arnumsun[t] + ((mutaterate)*(rnumsun1() - rnumsun2()) );

                                                if(numsunmutate > numsunh){
                                                    arrnumsunmutate[t] = numsunh;
                                                }else if(numsunmutate < numsunl){
                                                    arrnumsunmutate[t] = numsunl;
                                                }else{
                                                    arrnumsunmutate[t] = numsunmutate;
                                                }
                                                    //arrploadmutate.push(arrpload[t] - ((mutaterate) * ((arrpload[t]) - minmutationpload)));
                                                    arrnumsunmutate = arrnumsunmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

            ///
            //daily average radiation
            //var avradmutate = aravrad[t]  + ((1-(mutaterate)) * aravrad[t] );
            function ravrad1(min = avradl, max = avradh) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              function ravrad2(min = avradl, max = avradh) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
              }
              var avradmutate = aravrad[t]  + (mutaterate * (ravrad1() - ravrad2()) );
                                                if(avradmutate > avradh){
                                                    arravradmutate[t] = avradh;
                                                }else if(avradmutate < avradl){
                                                    arravradmutate[t] = avradl;
                                                }else{
                                                    arravradmutate[t] = avradmutate;
                                                }
                                                    //arrploadmutate.push(arrpload[t] - ((mutaterate) * ((arrpload[t]) - minmutationpload)));
                                                    arravradmutate = arravradmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

        //MUTATION PARENT OBJECTIVES----------------------------------------------------------------------------------------------------------------------

        //obj1

        //total area
        totalareamutate.push(height * wid * (1-(arrpercentmutate[t] * 0.01)));
        if(totalareamutate[t] >= totareah){
            totalareamutate[t] = totareah;
            }else if(totalareamutate[t] <= totareal){
                totalareamutate[t] = totareal;
            }else{
                totalareamutate[t] = totalareamutate[t];
            }
            totalareamutate = totalareamutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
            
        //pv area
            pvareamutate.push(arrpvheightmutate[t] * arrpvwidmutate[t]);

            if(pvareamutate[t] >= totpvareah){
                pvareamutate[t] = totpvareah;
                }else if(pvareamutate[t] <= totpvareal){
                    pvareamutate[t] = totpvareal;
                }else{
                    pvareamutate[t] = pvareamutate[t];
                }
                pvareamutate = pvareamutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
        
        //pv number        
            numberpvmutate.push(totalareamutate[t]/pvareamutate[t]);
           /* if(numberpvmutate[t] >= numbpbh){
                numberpvmutate[t] = numbpbh;
                }else */if(numberpvmutate[t] <= numbpvl){
                    numberpvmutate[t] = numbpvl;
                }else{
                    numberpvmutate[t] = numberpvmutate[t];
                }
                numberpvmutate = numberpvmutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
            //averageradmutate.push(arrtotalradmutate[t]/arrnumdaysmutate[t]);
         
        //energy production    
            solarenergymutate.push( 365 * arravradmutate[t] * totalareamutate[t] * eff1 * 0.01 * arrnumsunmutate[t] * year);
            if(solarenergymutate[t] >= enerprodh){
                solarenergymutate[t] = enerprodh;
                }else if(solarenergymutate[t] <= enerprodl){
                    solarenergymutate[t] = enerprodl;
                }else{
                    solarenergymutate[t] = solarenergymutate[t];
                }
                solarenergymutate = solarenergymutate.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
         
          //  solarenergymutate.push(pppmutate);
        //initial cost   
          initial_cost_mutation.push((arrcostpanelmutate[t] * arrtotacapacitymutate[t]) + (arrlaborcostmutate[t] * arrinsttimemutate[t]) + arrcostofeqmutate[t]);
  
          if(initial_cost_mutation[t] >= initialch){
            initial_cost_mutation[t] = initialch;
              }else if(initial_cost_mutation[t] <= initialcl){
                initial_cost_mutation[t] = initialcl;
              }else{
                initial_cost_mutation[t] = initial_cost_mutation[t];
              }
              initial_cost_mutation = initial_cost_mutation.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
        
        //maintenance cost     
              maintenancecost_mutation.push( ( (arrcostmaintmutate[t] * year) + (arrcostrepmutate[t] * (year/10)))* year);
              if(maintenancecost_mutation[t] >= main_costh){
                maintenancecost_mutation[t] = main_costh;
                  }else if(maintenancecost_mutation[t] <= main_costl){
                    maintenancecost_mutation[t] = main_costl;
                  }else{
                    maintenancecost_mutation[t] = maintenancecost_mutation[t];
                  }
                  maintenancecost_mutation = maintenancecost_mutation.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
        
        //energy savings
              energysaving_mutation.push(solarenergymutate[t]* (arrcostenergypmutate[t]) * year);
      
              if(energysaving_mutation[t] >= energysavingh){
                energysaving_mutation[t] = energysavingh;
                  }else if(energysaving_mutation[t] <= energysavingl){
                    energysaving_mutation[t] = energysavingl;
                  }else{
                    energysaving_mutation[t] = energysaving_mutation[t];
                  }
                  energysaving_mutation = energysaving_mutation.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
      
                  var pp =  initial_cost_mutation[t] + maintenancecost_mutation[t] + energysaving_mutation[t];
// var lifecyclecostff =[];
         lifecyclecost_mutation.push(pp)
         if(pp >= lcch){
            lifecyclecost_mutation[t] = lcch;
         }else if(pp <= lccl){
            lifecyclecost_mutation[t] = lccl;
         }else{
            lifecyclecost_mutation[t] = pp;
         }
         lifecyclecost_mutation = lifecyclecost_mutation.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

//obj2-----------------------------------------------------------------------------------------------------------------------
            
       // calculate the loss of load probability      
            var lossmutate = Math.abs(solarenergymutate[t] - cons)/cons;
            lossproba_mutation.push(lossmutate);

            /*if(lossmutate < lpph) {
                lossproba_mutation[t] = lpph;
            }else*/ if (lossmutate > lppl){
                lossproba_mutation[t] = lppl;
            }
            else{
                lossproba_mutation[t] = lossmutate;
            }
            lossproba_mutation = lossproba_mutation.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

            // create the matrces
                        arrf1mutate.push(lifecyclecost_mutation[t]); // objectve 1
                        arrf2mutate.push(lossproba_mutation[t]); // objective 2
                        parentmutate.push ([lifecyclecost_mutation [t],lossproba_mutation [t]]); // objectives matrix
                        arrglobalmutation.push([arrcostpanelmutate[t],arrtotacapacitymutate[t],arrlaborcostmutate[t],arrinsttimemutate[t]
                            ,arrcostofeqmutate[t],arrcostmaintmutate[t],arrcostrepmutate[t],arrcostenergypmutate[t],arrpercentmutate[t],arrpvheightmutate[t], arrpvwidmutate[t],arrnumsunmutate[t],arravradmutate[t], 
                                arrf1mutate[t],arrf2mutate[t]]); // variables + objectives matrix
                                //ayr.push([arrcap[i],arrcostperunit[i]]);
                             //ayrmutate.push([arrcapmutate[t], arrcostperunitmutate[t]]);

                             matrixparametermutate.push([pvareamutate[t], numberpvmutate[t], solarenergymutate[t], initial_cost_mutation[t], maintenancecost_mutation[t], energysaving_mutation[t],arrf1mutate[t],arrf2mutate[t]]);
    }
    console.log('costpanel',arrcostpanelmutate)
    console.log('totacapacity',arrtotacapacitymutate)
    console.log('labor ',arrlaborcostmutate)
    console.log('inst time',arrinsttimemutate)
    console.log('costofeq',arrcostofeqmutate)
    console.log('costmaint',arrcostmaintmutate)
    console.log('costrep',arrcostrepmutate)
    console.log('cost of energy p',arrcostenergypmutate)
   /* console.log('init',arrinitcostkmutate)
    console.log('ppv',arryearmutate)*/
   // console.log('pload',arrploadmutate)
    console.log('global mutation', arrglobalmutation)
    console.log('mutate      ',parentmutate)
   // console.log(arrconsmutate)
  //  console.log(arryearmutate)
    console.log(arrencostmutate)
    console.log(arrheightmutate)
    console.log(arrwidmutate)
    console.log(arrpercentmutate)
    console.log(arrpvheightmutate)
    console.log(arrpvwidmutate)
    console.log(arravradmutate)
    console.log(totalareamutate)
    console.log(pvareamutate)
    console.log(numberpvmutate)
    console.log(arrnumsunmutate)
console.log(solarenergymutate)
console.log(arrf2mutate)
    allgeneration.push(matrixparametermutate)
    console.log(allgeneration)

    for (var j = 0; j< arrgolbal.length; j ++) {

    //CROSSOVER---------------------------------------------------------------------------------------------------------------------


    function compareArrays(array1, array2) {
        let result = []; // Empty array to store the minimum values
        
        for (let i = 0; i < array1.length; i++) {
          let minimum = Math.min(array1[i], array2[i]); // Find the minimum value at index i
          
          result.push(minimum); // Add the minimum value to the result array
        }
        
        return result; // Return the array of minimum values
      }

     // let arrcostpanelcross = [];

     let resultArraycostp = compareArrays(arcostpanel, arrcostpanelmutate); // Call the compareArrays function with arcostpanel and arrcostpanelmutate as arguments, and store the result in resultArraycostp
     arrcostpanelcross = resultArraycostp; // Assign the value of resultArraycostp to arrcostpanelcross
     


      //let arrtotacapacitycross = [];

      let resultArraytotcapacity = compareArrays(artotacapacity, arrtotacapacitymutate);
      arrtotacapacitycross = resultArraytotcapacity;


     // let arrlaborcostcross = [];

      let resultArraylabor = compareArrays(arlaborcost, arrlaborcostmutate);
      arrlaborcostcross = resultArraylabor;


    //  let arrinsttimecross = [];

      let resultArrayinsttime = compareArrays(arinsttime, arrinsttimemutate);
      arrinsttimecross = resultArrayinsttime;


    //  let arrcostofeqcross = [];

      let resultArrayeq = compareArrays(arcostofeq, arrcostofeqmutate);
      arrcostofeqcross = resultArrayeq; 


    //  let arrcostmaintcross = [];

      let resultArraymaint = compareArrays(arcostmaint, arrcostmaintmutate);
      arrcostmaintcross = resultArraymaint;


    //  let arrcostrepcross = [];

      let resultArrayrep = compareArrays(arcostrep, arrcostrepmutate);
      arrcostrepcross = resultArrayrep;


    //  let arrcostenergycross= [];

      let resultArraycostenergy = compareArrays(arcostofenergypane, arrcostenergypmutate);
      arrcostenergycross = resultArraycostenergy;


    //  let arrpercentcross = [];

      let resultArraypercent = compareArrays(arpercent, arrpercentmutate);
      arrpercentcross = resultArraypercent;


    //  let arrpvheightcross = [];

      let resultArraypvheight = compareArrays(arpvheight, arrpvheightmutate);
      arrpvheightcross = resultArraypvheight;


    //  let arrpvwidcross = [];

      let resultArraypvwid = compareArrays(arpvwid, arrpvwidmutate);
      arrpvwidcross = resultArraypvwid;


    //  let arrnumsuncross = [];

      let resultArraynumsun = compareArrays(arnumsun, arrnumsunmutate);
      arrnumsuncross = resultArraynumsun;


    //  let arravradcross = [];

      let resultArrayavrad = compareArrays(aravrad, arravradmutate);
      arravradcross = resultArrayavrad;
  /*  var mincrosscostpanel = Math.min(...arrcostpanelmutate);//find min 
   // var maxcrosscap = Math.max(...arrcapmutate);
//panel cost
    var ccostpanel = arrcostpanelmutate[j] - ((crossoverrate) * (arrcostpanelmutate[j] - mincrosscostpanel));
    //limit boundary
    if(ccostpanel > costpanelh){
        arrcostpanelcross[j] = costpanelh;
    }else if(ccostpanel < costpanell){
        arrcostpanelcross[j] = costpanell;
    }else{
        arrcostpanelcross[j] = ccostpanel;
    }
    //digit to 6
    arrcostpanelcross = arrcostpanelcross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
       // arrcapcross.push(arrcapmutate[j] - ((crossoverrate) * (arrcapmutate[j] - mincrosscap)));



//total capacity

    var mincrosstotacapacity = Math.min(...arrtotacapacitymutate);
   // var maxcrosscostperunit = Math.max(...arrcostperunitmutate);

    var ctotacapacity = arrtotacapacitymutate[j] + ((crossoverrate) * (arrtotacapacitymutate[j] - mincrosstotacapacity));
    if(ctotacapacity > totacapacityh){
        arrtotacapacitycross[j] = totacapacityh;
    }else if(ctotacapacity < totacapacityl){
        arrtotacapacitycross[j] = totacapacityl;
    }else{
        arrtotacapacitycross[j] = ctotacapacity;
    }arrtotacapacitycross = arrtotacapacitycross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
        //arrcostperunitcross.push(arrcostperunitmutate[j] - ((crossoverrate) * (arrcostperunitmutate[j] - mincrosscostperunit)));

  
  
  
  //labor cost
  
        var mincrosslaborcost = Math.min(...arrlaborcostmutate);
   // var maxcrossinstcost = Math.max(...arrinstallationcostmutate);

    var claborcost = arrlaborcostmutate[j] - ((crossoverrate) * (arrlaborcostmutate[j] - mincrosslaborcost));
    if(claborcost > laborcosth){
        arrlaborcostcross[j] = laborcosth;
    }else if(claborcost < laborcostl){
        arrlaborcostcross[j] = laborcostl;
    }else{
        arrlaborcostcross[j] = claborcost;
    }arrlaborcostcross = arrlaborcostcross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
        //arrinstcostcross.push(arrinstallationcostmutate[j] - ((crossoverrate) * (arrinstallationcostmutate[j] - mincrossinstcost)));



//installation time

    var mincrossinsttime = Math.min(...arrinsttimemutate);
   // var maxcrosscivil = Math.max(...arrcivilcostmutate);

    var cinsttime = arrinsttimemutate[j] - ((crossoverrate) * (arrinsttimemutate[j] - mincrossinsttime));
    if(cinsttime > installationtimeh){
        arrinsttimecross[j] = installationtimeh;
    }else if(cinsttime < installationtimel){
        arrinsttimecross[j] = installationtimel;
    }else{
        arrinsttimecross[j] = cinsttime;
    }arrinsttimecross = arrinsttimecross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
        //arrcivilcostcross.push(arrcivilcostmutate[j] - ((crossoverrate) * (arrcivilcostmutate[j] - mincrosscivil)));



//equipment cost

    var mincrosscostofeq = Math.min(...arrcostofeqmutate);
  //  var maxcrossinflation = Math.max(...arrinflationmutate);

    var ccostofeq = arrcostofeqmutate[j] - ((crossoverrate) * (arrcostofeqmutate[j] - mincrosscostofeq));
    if(ccostofeq > costofeqh){
        arrcostofeqcross[j] = costofeqh;
    }else if(ccostofeq < costofeql){
        arrcostofeqcross[j] = costofeql;
    }else{
        arrcostofeqcross[j] = ccostofeq;
    }arrcostofeqcross = arrcostofeqcross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
        //arrinflationcross.push(arrinflationmutate[j] - ((crossoverrate) * (arrinflationmutate[j] - mincrossinflation)));


//maintenance cost

    var mincrosscostmaint = Math.min(...arrcostmaintmutate);
  //  var maxcrossinterest = Math.max(...arrinterestmutate);

    var ccstmaint = arrcostmaintmutate[j] - ((crossoverrate) * (arrcostmaintmutate[j] - mincrosscostmaint));
    if(ccstmaint > costmainth){
        arrcostmaintcross[j] = costmainth;
    }else if(ccstmaint < costmaintl){
        arrcostmaintcross[j] = costmaintl;
    }else{
        arrcostmaintcross[j] = ccstmaint;
    }arrcostmaintcross = arrcostmaintcross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
       /// arrinterestcross.push(arrinterestmutate[j] - ((crossoverrate) * (arrinterestmutate[j] - mincrossinterest)));




//replacement cost

    var mincrosscostrep = Math.min(...arrcostrepmutate);
   // var maxcrosslifepv = Math.max(...arrlifepvmutate);

    var ccostrep = arrcostrepmutate[j] + ((crossoverrate) * (arrcostrepmutate[j] - mincrosscostrep));
    if(ccostrep > costreph){
        arrcostrepcross[j] = costreph;
    }else if(ccostrep < costrepl){
        arrcostrepcross[j] = costrepl;
    }else{
        arrcostrepcross[j] = ccostrep;
    }arrcostrepcross = arrcostrepcross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
       // arrlifepvcross.push(arrlifepvmutate[j] - ((crossoverrate) * (arrlifepvmutate[j] - mincrosslifepv)));
 
       


//panel energy cost

    var mincroscostenergyp = Math.min(...arrcostenergypmutate);
 //   var maxcrossinitcostk = Math.max(...arrinitcostkmutate);

    var ccostenergyp = arrcostenergypmutate[j] + ((crossoverrate) * (arrcostenergypmutate[j] - mincroscostenergyp));
    if(ccostenergyp > costofenrgypaneh){
        arrcostenergycross[j] = costofenrgypaneh;
    }else if(ccostenergyp < costofenrgypanel){
        arrcostenergycross[j] = costofenrgypanel;
    }else{
        arrcostenergycross[j] = ccostenergyp;
    }arrcostenergycross = arrcostenergycross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
        //arrinitcostkcross.push(arrinitcostkmutate[j] - ((crossoverrate) * (arrinitcostkmutate[j] - mincrossinitcostk)));

 //free space percent

                    var mincrosspercent = Math.min(...arrpercentmutate);
                  //  var maxcrosspercent = Math.max(...arrpercentmutate);
                
                    var cpercent = arrpercentmutate[j] - ((crossoverrate) * (arrpercentmutate[j] - mincrosspercent));
                    if(cpercent > percenth){
                        arrpercentcross[j] = percenth;
                    }else if(cpercent < percentl){
                        arrpercentcross[j] = percentl;
                    }else{
                       arrpercentcross[j] = cpercent;
                    }arrpercentcross = arrpercentcross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
                        //arrploadcross.push(arrploadmutate[j] - ((crossoverrate) * (arrploadmutate[j] - mincrosspload)));

//pv height

                                var mincrosspvheight = Math.min(...arrpvheightmutate);
                                var maxcrosspvheight = Math.max(...arrpvheightmutate);
                            
                                var cpvheight = arrpvheightmutate[j] + ((crossoverrate) * (arrpvheightmutate[j] - mincrosspvheight));
                                if(cpvheight > pvheighth){
                                    arrpvheightcross[j] = pvheighth;
                                }else if(cpvheight < pvheightl){
                                    arrpvheightcross[j] = pvheightl;
                                }else{
                                   arrpvheightcross[j] = cpvheight;
                                }arrpvheightcross = arrpvheightcross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
                                    //arrploadcross.push(arrploadmutate[j] - ((crossoverrate) * (arrploadmutate[j] - mincrosspload)));




// pv width

                                    var mincrosspvwid = Math.min(...arrpvwidmutate);
                                    var maxcrosspvwid = Math.max(...arrpvwidmutate);
                                
                                    var cpvwid = arrpvwidmutate[j] +((crossoverrate) * (arrpvwidmutate[j] - mincrosspvwid));
                                    if(cpvwid > pvwidh){
                                        arrpvwidcross[j] = pvwidh;
                                    }else if(cpvwid <pvwidl){
                                        arrpvwidcross[j] = pvwidl;
                                    }else{
                                       arrpvwidcross[j] = cpvwid;
                                    }arrpvwidcross = arrpvwidcross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
                                        //arrploadcross.push(arrploadmutate[j] - ((crossoverrate) * (arrploadmutate[j] - mincrosspload)));


//sun hours daily


                                        var mincrossnumsun = Math.min(...arrnumsunmutate);
                                        var maxcrossnumsun = Math.max(...arrnumsunmutate);
                                    
                                        var cnumsun = arrnumsunmutate[j] + ((crossoverrate) * (arrnumsunmutate[j] - mincrossnumsun));
                                        if(cnumsun > numsunh){
                                            arrnumsuncross[j] = numsunh;
                                        }else if(cnumsun <numsunl){
                                            arrnumsuncross[j] = numsunl;
                                        }else{
                                           arrnumsuncross[j] = cnumsun;
                                        }arrnumsuncross = arrnumsuncross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
                                            //arrploadcross.push(arrploadmutate[j] - ((crossoverrate) * (arrploadmutate[j] - mincrosspload)));



//daily average radiation

                                            var mincrossavrad = Math.min(...arravradmutate);
                                            var maxcrossavrad = Math.max(...arravradmutate);
                                        
                                            var cavrad = arravradmutate[j] + ((crossoverrate) * (arravradmutate[j] - mincrossavrad));
                                            if(cavrad > avradh){
                                                arravradcross[j] = avradh;
                                            }else if(cavrad <avradl){
                                                arravradcross[j] = avradl;
                                            }else{
                                               arravradcross[j] = cavrad;
                                            }arravradcross = arravradcross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
                                                //arrploadcross.push(arrploadmutate[j] - ((crossoverrate) * (arrploadmutate[j] - mincrosspload)));*/

       //NEW PARENT OBJECTIVES------------------------------------------------------------------------------------------------------------------------------------------
//obj1

 // total area
totalareacross.push(height * wid * (1-(arrpercentcross[j] * 0.01)));
//limit boundary
if(totalareacross[j] >= totareah){
    totalareacross[j] = totareah;
    }else if(totalareacross[j] <= totareal){
        totalareacross[j] = totareal;
    }else{
        totalareacross[j] = totalareamutate[j];
    }
    // limit digit to 6
    totalareacross = totalareacross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

// pvv area
pvareacross.push(arrpvheightcross[j] * arrpvwidcross[j]);

if(pvareacross[j] >= totpvareah){
    pvareacross[j] = totpvareah;
    }else if(pvareacross[j] <= totpvareal){
        pvareacross[j] = totpvareal;
    }else{
        pvareacross[j] = pvareamutate[j];
    }
    pvareacross = pvareacross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

  // number of pv panels  
numberpvcross.push(totalareacross[j]/pvareacross[j]);
/*if(numberpvcross[j] >= numbpbh){
    numberpvcross[j] = numbpbh;
    }else*/ if(numberpvcross[j] <= numbpvl){
        numberpvcross[j] = numbpvl;
    }else{
        numberpvcross[j] = numberpvmutate[j];
    }
    numberpvcross = numberpvcross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
//averageradcross.push(arrtotalradcross[j]/arrnumdayscross[j]);

// calculate the solar energy that will be generated
solarenergycross.push(365 * arravradcross[j] * totalareacross[j] * eff1 * 0.01 * arrnumsuncross[j] * year);
if(solarenergycross[j] >= enerprodh){
    solarenergycross[j] = enerprodh;
    }else if(solarenergycross[j] <= enerprodl){
        solarenergycross[j] = enerprodl;
    }else{
        solarenergycross[j] = solarenergycross[j];
    }
    solarenergycross = solarenergycross.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

//solarenergycross.push(pppcross);

//initila cost for new parent
initial_cost_newparent.push((arrcostpanelcross[j] * arrtotacapacitycross[j]) + (arrlaborcostcross[j] * arrinsttimecross[j]) + arrcostofeqcross[j]);
  
    if(initial_cost_newparent[j] >= initialch){
        initial_cost_newparent[j] = initialch;
        }else if(initial_cost_newparent[j] <= initialcl){
            initial_cost_newparent[j] = initialcl;
        }else{
            initial_cost_newparent[j] = initial_cost_newparent[j];
        }
        initial_cost_newparent = initial_cost_newparent.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));
  
//calculate the the maintenance cost
        maintenancecost_newparent.push( ( (arrcostmaintcross[j] * year) + (arrcostrepcross[j] * (year/10)))* year);
        if(maintenancecost_newparent[j] >= main_costh){
            maintenancecost_newparent[j] = main_costh;
            }else if(maintenancecost_newparent[j] <= main_costl){
                maintenancecost_newparent[j] = main_costl;
            }else{
                maintenancecost_newparent[j] = maintenancecost_newparent[j];
            }
            maintenancecost_newparent = maintenancecost_newparent.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

 // calculate energy savings cost            
        energysaving_newparent.push(solarenergycross[j]* (arrcostenergycross[j]) * year);

        if(energysaving_newparent[j] >= energysavingh){
            energysaving_newparent[j] = energysavingh;
            }else if(energysaving_newparent[j] <= energysavingl){
                energysaving_newparent[j] = energysavingl;
            }else{
                energysaving_newparent[j] = energysaving_newparent[j];
            }
            energysaving_newparent = energysaving_newparent.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));

            var pp =  initial_cost_newparent[j] + maintenancecost_newparent[j] + energysaving_newparent[j];
   //var lifecyclecostff =[];
   lifecyclecost_newparent.push(pp)
   if(pp >= lcch){
    lifecyclecost_newparent[j] = lcch;
   }else if(pp <= lccl){
    lifecyclecost_newparent[j] = lccl;
   }else{
    lifecyclecost_newparent[j] = pp;
   }
   lifecyclecost_newparent = lifecyclecost_newparent.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));


//obj2 crossover---------------------------------------------------------------------------------------------------------------------------------------

//calculate the loss of load probability
var losscross = Math.abs(solarenergycross[j] - cons)/cons;
            lossproba_newparent.push(losscross);

/*if(losscross < lpph) {
    lossproba_newparent[j] = lpph;
}else */if (losscross > lppl){
    lossproba_newparent[j] = lppl;
}
else{
    lossproba_newparent[j] = losscross;
}
lossproba_newparent = lossproba_newparent.map(a => Math.round(a * Math.pow(10,6)) / Math.pow(10,6));


//create matrices
        arrf1cross.push(lifecyclecost_newparent[j]);//objective1
        arrf2cross.push(lossproba_newparent[j]); //objective 2
        newparent.push ([lifecyclecost_newparent [j],lossproba_newparent [j]]); // objectives matrix
        arrglobalnew.push([arrcostpanelcross[j],arrtotacapacitycross[j],arrlaborcostcross[j],arrinsttimecross[j]
            ,arrcostofeqcross[j],arrcostmaintcross[j],arrcostrepcross[j],arrcostenergycross[j],arrpercentcross[j],arrpvheightcross[j], arrpvwidcross[j],arrnumsuncross[j],arravradcross[j], 
                arrf1cross[j],arrf2cross[j]]); // variables + objective matrix
            // ayrcross.push([arrcapcross[j], arrcostperunitcross[j]]);

             matrixparametercross.push([pvareacross[j], numberpvcross[j], solarenergycross[j], initial_cost_newparent[j], maintenancecost_newparent[j], energysaving_newparent[j],arrf1cross[j],arrf2cross[j]]);
        
}/*console.log(arrlifepvcross)
console.log(arrconscross)
console.log(arryearcross)
console.log(arrencostcross)
console.log(arrheightcross)
console.log(arrwidcross)
console.log(arrpercentcross)
console.log(arrtotalradcross)*/
console.log(arrlaborcostcross)
console.log(arrnumdayscross)
console.log(arrpvheightcross)
console.log(arrpvwidcross)
console.log(arrnumsuncross)
console.log('new global',arrglobalnew)
console.log(solarenergycross)
//console.log('energy cost',energycostcross)   
console.log(pvareacross)
console.log(numberpvcross)
console.log(arrnumsuncross)                  
console.log(arrf2cross)

allgeneration.push(matrixparametercross)
console.log('\n \n \n')


//NON-DOMINATED SORTING AND CROWDING --------------------------------------------------------------------------------------------------------------------
     var allglobal =[];
     globalcombine = arrgolbal.concat(arrglobalnew) //add two array together
     allglobal = arrglobalmutation.concat(globalcombine) //add all array together into one array
     console.log(allglobal)
     console.log('globalcombine',globalcombine)
     //console.log(popused)
     var allparent = [];
     allparent = parent.concat(newparent); // same for parent
     combined = parentmutate.concat(allparent) // ad all parent value into one array
     console.log(combined)
     var n = [];
     var nbq = [];
     var common =[];
     var front1 = [];
     var frontier = [];
     var frontfinal = [];
     var frontz = [];
     var first =[];
     var nqarray =[];
     var global = [];
     var filteredfrontier = [];
     var ncom =[];
     var splicedcombined =[];
     var frontss= [];
     var np = 0;
     
     // NON DOMINATED SORTING------------------------------------------------------------------------------------------------------------------------------- 
             //STAGE 1**************************************************************
                //calucate number on domination of each point and if zero add to frontier
                for (var y = 0; y < combined.length; y++) {
                    var s = []; // Create an empty array `s`
                    var np = 0; // Initialize a counter `np` to 0
                    
                    var f = []; // Create an empty array `f`
                    var front = []; // Create an empty array `front`
                  
                    for (var r = 0; r < combined.length; r++) {
                      // Iterate over the elements in the `combined` array
                        
                      if (y !== r && combined[y][0] <= combined[r][0] && combined[y][1] <= combined[r][1]) {
                        s.push(combined[r]);
                        // If the conditions are satisfied, push the element from `combined` to array `s`
                      } else if (y !== r && combined[y][0] >= combined[r][0] && combined[y][1] >= combined[r][1]) {
                        np += 1;
                        // If the conditions are satisfied, increment the counter `np` by 1
                      }
                    }
                    
                    n.push(np); // Push the value of `np` to array `n`
                    nbq.push(s); // Push array `s` to array `nbq`
                  
                    if (np == 0) {
                      var rank = 1;
                      first.push(combined[y]);
                      // If `np` is 0, assign `rank` as 1 and push the corresponding element from `combined` to array `first`
                    }
                  } 
               //  console.log(s)
                 console.log(first)
               // frontier = [...first];
               frontier = [].concat(first)
                 console.log(frontier)
                 frontss.push(frontier);
                 console.log(frontss);
                 var removed = [].concat(combined);
                 var un = n;
console.log(removed)

//STAGE2***********************************************************************************
for (var k=0; k< combined.length ; k++){
       //find the values the non dominated within index and remove zeros                       
 var ind = un.indexOf(0);
         if (ind > -1) { // only splice array when item is found
         un.splice(ind, 1); // 2nd parameter means remove one item only
         removed.splice(ind,1);
         }
     }
     for (var o=0; o< n.length ; o++){
         
         var ind0 = un.indexOf(0);
                 if (ind0 > -1) { // only splice array when item is found
                  un.splice(ind0, 1); // 2nd parameter means remove one item only
                 removed.splice(ind0,1);
                 }
             }
             for (var w=0; w< n.length ; w++){
                 
                 var ind1 = un.indexOf(0);
                         if (ind1 > -1) { // only splice array when item is found
                          un.splice(ind1, 1); // 2nd parameter means remove one item only
                         removed.splice(ind1,1);
                         }
                     }
                     console.log(removed)
                     var com = removed;
                     console.log(n)
                     console.log('combined           ',com)

//STAGE3****************************************************************************************
//iterate to find the rest frontiers
                     for(var w=0; w <iteration; w++){
                         var newn = 0;
                                                 var nq = [];
                                                 //var frontn = [];
                                                 var array0 =[];
                                                 for(var z=0; z< n.length ; z++){
                                                                 newn =  n[z] -1; // minus one until finding zeors 
                                                                 nq.push(newn);
                                                                 
                                                                 }console.log('nq      ',nq)
                                                                          for(var l=0; l< nq.length  ; l++){
                                                                               if (nq[l] == 0){ // if zeros
                                                                                
                                                                     //va indexcommon2 =nq.indexOf(l);
                                                                                 array0.push(l); // push index in the array which include the zero index 
                                                                                   }
                                                                              }
                                                                 console.log('index 0      ',array0)
                                                                 var frontn = [];
                                                                          for(var a = 0; a< array0.length; a ++){
                                                                              frontn.push(com[array0[a]]); // the value form combined array of the index
                                                                             nqarray.push(nq[array0[a]]); // the index 
                                                                              }
                                                                 console.log('frontn     ',frontn)
                                                                 console.log('nq array ', nqarray)
                                                                 frontfinal.push(frontn)
                                                                 var filterednq = nq.filter(a => !nqarray.includes(a)); // rest of index array
                                                                 var filteredcom = com.filter(s => !frontn.includes(s)); //rest of array values
                                                                 //console.log('filcom             ',filteredcom)
                                                                 console.log(filteredcom)
                                                                 
                                                                 com = filteredcom;
                                                                 
                                                                 n = filterednq;

                                                             
                                                   }//frontz = frontss.concat(frontfinal)
                                                   console.log('forntfinal ',frontfinal)
                                                    frontz = [].concat(first) 
                                                    var f = [];
                                                    f.push(frontz)
                                                   console.log('all fronts,',frontz)
                                                   console.log(f)
                                                   //frontfinal.push(front1);
                                                  
                                                   var arrfiltered = frontfinal.filter(function(x) {
                                                   return !(x.every(element => element ===(undefined || null || ''))) // filter the array of any errors
                                                   });
                                                   console.log('frontier      ',arrfiltered)
                                                   front1 = f.concat(arrfiltered)
                                                   console.log(front1)
                                                  // var frontone = arrfiltered[0];
                                                   //console.log('Pareto front ',frontone)
//CROWDING DISTANCE---------------------------------------------------------------------------------------------------------------
 
                                                   var nondominatedsorting = [];
                                                   for( var c = 0; c< front1.length; c++){
                                                   //var indf = frontier.indexOf(c);
                                                   var fronts =  front1[c];
                                                       if(fronts.length <=2){ //for frontier less or equal two
                                                       for(var v =0; v < fronts.length; v++){
                                                           var frontnb = fronts[v];
                                                           nondominatedsorting.push(frontnb);// keep it
                                                       }
                                                       
                                                       } else  if (fronts.length >= 3){ //for frontier more or equal of  3
                                                       
                           var rankedd4 =[];
               //console.log(fronts)
                               var sortf1 = fronts.sort(function(a,b ){ // sort based on f1
                                   if (a[0] === b[0]) {
                                   return 0;
                               }
                               else {
                                   return (a[0] > b[0]) ? -1 : 1;
                               }
                               }); 

                               var f1frt = sortf1.map(function (tuple) { // take f1 with index 0
                                   return tuple [0];
                                   });
                                   var f2frt = sortf1.map(function (tuple) { //take f2 with index 1
                                   return tuple [1];
                                   });
                                   //find max and min f1
                                   var f1frtsmax = Math.max(...f1frt); // Find the maximum value in the array f1frt using the spread operator
                                   var indmaxf1 = f1frt.indexOf(f1frtsmax); // Find the index of the maximum value in the array f1frt
                                   var f1frtsmin = Math.min(...f1frt); // Find the minimum value in the array f1frt using the spread operator
                                   var indminf1 = f1frt.indexOf(f1frtsmin); // Find the index of the minimum value in the array f1frt
                        
                      //find max and min f2
                         var f2frtsmax = Math.max(...f2frt);
                         var indmaxf2 = f2frt.indexOf(f2frtsmax);
                         var f2frtsmin = Math.min(...f2frt);
                         var indminf2 = f2frt.indexOf(f2frtsmin);
                        
                         

                               nondominatedsorting.push(sortf1[indminf1]);
                               
                               nondominatedsorting.push(sortf1[indminf2]);

                               var valf1 = [];
                               var valf2 = [];
                               var inde1 = [];
                               for (var h =1; h <(sortf1.length -1); h++){ //apply crowding distance formula for F1 and f2
                                              var dff1 = (Math.abs((f1frt[h + 1] - f1frt[h - 1] )))/(f1frtsmax - f1frtsmin);
                                              valf1.push(dff1);
                                              var indeff1 = f1frt.indexOf(f1frt[h]);
                                              //console.log(f1fronts[a])

                                              var dff2 = (Math.abs((f2frt[h + 1] - f2frt[h - 1] )))/(f2frtsmax - f2frtsmin);
                                              valf2.push(dff2);
                                              //console.log(f2fronts[a])
                                              //nondominatedsorting.push(sortf1[a]);
                                             

                                                
                                             /* var sum = valuef1.map(function (num, idx) {
                                                 return num + valuef2[idx];
                                              
                                              });*/
                                                    }
//console.log('val1 ',valf1)
//console.log('val2 ',valf2)
                                                    var summ = valf1.map(function (num, idx) {
                                                       return num + valf2[idx];
                                                    
                                                    });
                                                    
                                                    for(var s =0; s < sortf1.length; s++ ){  // sort based on the crowding distance values
                                                                            if(sortf1[s]== sortf1[indminf1] || sortf1[s]== sortf1[indminf2])
                                                                               sortf1.splice(s,1); 
                                                                         } 
                                                   // sortf1.shift();
                                                   // console.log(sortf1)
                                                   for (var p = 0; p < valf1.length; p++) {
                                                    // Iterate over the elements in the array `valf1`
                                                  
                                                    var vmax = Math.max(...summ);
                                                    // Find the maximum value in the array `summ`
                                                  
                                                    var indexcommonn = summ.indexOf(vmax);
                                                    // Find the index of the maximum value in the array `summ`
                                                  
                                                    nondominatedsorting.push(sortf1[indexcommonn]);
                                                    // Push the corresponding element from the `sortf1` array to the `nondominatedsorting` array
                                                  
                                                    if (indexcommonn > -1) {
                                                      sortf1.splice(indexcommonn, 1);
                                                      summ.splice(indexcommonn, 1);
                                                      // Remove the element at index `indexcommonn` from both `sortf1` and `summ` arrays
                                                    }
                                                  }
                           }    
                       }
                       console.log('non dominated sorting ',nondominatedsorting)
                   var finalpop = nondominatedsorting.slice(0,combinedArraycapacity.length); // take the first rows in the number ofthe popoulation size
                 console.log(finalpop)
                                            

                                            //take the similar rows form golbal based on the nodominated array

                                                  let similar = allglobal.filter(function(item) {
                                                    for (let i = 0; i < finalpop.length; i++) {
                                                      if (item[item.length - 2] === finalpop[i][0] && item[item.length - 1] === finalpop[i][1]) {
                                                        return true;
                                                      }
                                                    }
                                                    return false;
                                                  });
                                                  similar.sort(function(a, b) {
                                                    for (let i = 0; i < finalpop.length; i++) {
                                                      if (a[a.length - 2] === finalpop[i][0] && a[a.length - 1] === finalpop[i][1]) {
                                                        return -1;
                                                      } else if (b[b.length - 2] === finalpop[i][0] && b[b.length - 1] === finalpop[i][1]) {
                                                        return 1;
                                                      }
                                                    }
                                                  });
                                                  console.log(similar);
                               
                                            //take the final values for each variable for th enext generation
                                                var finalcostpanelarr = []; // Create an empty array `finalcostpanelarr`

                                                for (var u = 0; u < similar.length; u++) {
                                                // Iterate over the elements in the `similar` array
                                                finalcostpanelarr.push(similar[u][0]);
                                                // Push the first element of each subarray in `similar` to the `finalcostpanelarr` array
                                                }
                                                
                                                arcostpanel = finalcostpanelarr;
                                                // Assign the `finalcostpanelarr` array to the `arcostpanel` variable

                                                var finaltotacapacityarr =[];
                                                for(var u = 0; u < similar.length; u ++){
                                                    finaltotacapacityarr.push(similar[u][1]);
                               
                                                }artotacapacity = finaltotacapacityarr;

                                                var finallaborcostarr =[];
                                                for(var u = 0; u < similar.length; u ++){
                                                    finallaborcostarr.push(similar[u][2]);
                               
                                                }arlaborcost = finallaborcostarr;

                                                var finalinsttimearr =[];
                                                for(var u = 0; u < similar.length; u ++){
                                                    finalinsttimearr.push(similar[u][3]);
                               
                                                }arinsttime = finalinsttimearr;

                                                var finalcostofeqarr =[];
                                                for(var u = 0; u < similar.length; u ++){
                                                    finalcostofeqarr.push(similar[u][4]);
                               
                                                }arcostofeq = finalcostofeqarr;

                                                var finalcostmaintarr =[];
                                                for(var u = 0; u< similar.length; u ++){
                                                    finalcostmaintarr.push(similar[u][5]);
                               
                                                }arcostmaint = finalcostmaintarr;

                                                var finalcostreparr =[];
                                                for(var u = 0; u < similar.length; u ++){
                                                    finalcostreparr.push(similar[u][6]);
                               
                                                } arcostrep = finalcostreparr;

                                                var finalenercostarr=[];
                                                for(var u = 0; u < similar.length; u ++){
                                                    finalenercostarr.push(similar[u][7]);
                               
                                                }arcostofenergypane = finalenercostarr;
                               
                                                var finalpercentarr =[];
                                                for(var u = 0; u < similar.length; u ++){
                                                finalpercentarr.push(similar[u][8]);
                                                }arpercent = finalpercentarr;
                            
                               
                                                var finalpvheightarr =[];
                                                for(var u = 0; u < similar.length; u ++){
                                                finalpvheightarr.push(similar[u][9]);
                                                }arpvheight = finalpvheightarr;
                               
                                                var finalpvwidarr =[];
                                                for(var u = 0; u < similar.length; u ++){
                                                finalpvwidarr.push(similar[u][10]);
                                                }arpvwid = finalpvwidarr;
                               
                                                var finalnumsunarr =[];
                                                for(var u = 0; u < similar.length; u ++){
                                                finalnumsunarr.push(similar[u][11]);
                                                }arnumsun = finalnumsunarr;
                               
                                                var finalavradarr=[];
                                                for(var u = 0; u < similar.length; u ++){
                                                    finalavradarr.push(similar[u][12]);
                                                   }aravrad = finalavradarr;
                               
                                                var finalf1arr=[];
                                                for(var u = 0; u < similar.length; u ++){
                                                    finalf1arr.push(similar[u][13]);
                               
                                                }arf1 = finalf1arr;
                                                var finalf2arr=[];
                                                for(var u = 0; u < similar.length; u ++){
                                                    finalf2arr.push(similar[u][14]);
                               
                                                }arf2 = finalf2arr;
                               
                                                popused = [];
                                                popused = similar;
                                            
                                                 allpoint = [].concat(...allgeneration);
                                                
                                                firstMatix = matrixparameter.concat(matrixparametermutate);
                                                        allmatrix = firstMatix.concat(matrixparametercross);
                                                        console.log(allmatrix)
                        
                                                      
                                                        
                        //console.log(eachgenmatrix)
                                              if(front1.length === 0){
                          
                                                     break;
                                                       }
                                                    console.log('generation : ',e)
                                                    //console.log(arrf1mutate)
                                                    //console.log(arrf2cross)    
                                                    //console.log(f1frt)
                                                    //console.log(f2frt)
                                                    //console.log('sortedf1    ',sortf1)
                                                    // console.log('sortedf2    ',sortedf2)
                                                    //console.log(f2fronts)
                                                    //console.log(rankedd)
                                                    console.log(arcostpanel)
                                                        console.log(nondominatedsorting)
                                                        //console.log('front 1   ',frontone)
                                                        console.log('all points ', allpoint)
                                                        
                                                        console.log('fornt one objectives ', first)
                                                        console.log('finalpop  ', finalpop, '\n\n\n')
                                                       // console.log(valf1)
                                                       // console.log(valf2)
                                                        // console.log(sortedsum)
                                                        // console.log(indexminf1)
                                                        // console.log(indexminf2)
                                                        //console.log(summ)
                                                        //console.log(capcost) 
                                                        //console.log(arrcap)
                                                        //console.log(finalglobal, '\n\n\n')
}

   return allpoint;}

   export {allpoint};