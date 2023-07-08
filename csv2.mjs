import {matrixparameter} from './objectivefunction.mjs';
var jsonObj = [];
window.mb8 = () =>{

//var cssv = Object.values(pkg);
//var xcsv = cssv.pop();

var  total = matrixparameter;
//total.shift()

console.log(total)
                                                            var tableHeaders = ["PVarea","PVnumber","EnergyProduction","initialC","maintenanceC","EnergySavings","f1","f2"];
                                                                       total.unshift(tableHeaders);
                                                                       //total.shift()
                                                                        // Use map function to traverse on each row
                                                                        //export default total;
                                                                            //console.log(cssv)
                                                                        var ccsv = total.map((item) => {
                                                                          
                                                                          // Here item refers to a row in that 2D array
                                                                          var row = item;
                                                                            
                                                                          // Now join the elements of row with "," using join function
                                                                          return row.join(",");
                                                                        }) // At this point we have an array of strings
                                                                        .join("\n");

                                                                        console.log(ccsv)
//const fs = require('fs');
                                                                   // }
                                                                   // transfomr to JSON format
                                                                   var arr = ccsv.split('\n');     
                                                                   console.log(arr)
                                                                      
                                                                       var headers = arr[0].split(',');
                                                                       for(var i = 1; i < arr.length; i++) {
                                                                         var data = arr[i].split(',');
                                                                         var obj = {};
                                                                         for(var j = 0; j < data.length; j++) {
                                                                            obj[headers[j].trim()] = data[j].trim();
                                                                         }
                                                                         jsonObj.push(obj);
                                                                        }JSON.stringify(jsonObj);
 return jsonObj;} 

 
export {jsonObj};