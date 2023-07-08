import {jsonObj5} from './csvscatteropt.mjs';
window.scatternsga =() =>{
  //var datajs = window.csvscatter;
  d3.select("#scatter").select("svg").remove();
  
 
 
   var csvdata = jsonObj5;
   // var csvdata = datajs;
console.log('this is it', csvdata)

//convert into an object
function convertIntObj(csvdata) {
    const res = {}
    for (const key in csvdata) {
      res[key] = {};
      for (const prop in csvdata[key]) {
        const parsed = Number(csvdata[key][prop], 10);
        res[key][prop] = isNaN(parsed) ? csvdata[key][prop] : parsed;
      }
    }
    return res;
  }
  var result = convertIntObj(csvdata);

  console.log('Object result', result)

  const data = Object.entries(result).map(e => e[1]);
  
  //define the dimensions
  var margin = {top: 20, right: 20, bottom: 30, left: 40};
  var width = 960 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;
  
  //scales
  var xScale = d3.scale.linear()
    .range([0, width]);
  
  var yScale = d3.scale.linear()
    .range([height, 0]);
  
  var color = d3.scale.category10();
  
  var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
    

  d3.select("#submit-button").on("click", update);
  d3.selectAll("input").on("change", update);
  
  function update() { // update the the scatterplot
    var x_axis = d3.select("input[name='x-axis']:checked").node().value;
    var y_axis = d3.select("input[name='y-axis']:checked").node().value;
  
    xScale.domain([0, d3.max(data, function(d) { return d[x_axis]; })]);
    yScale.domain([0, d3.max(data, function(d) { return d[y_axis]; })]);
  
    var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");
  
    var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

    var tool_tip = d3.tip()
      .attr("class", "d3-tip")
      .offset([-10, 0])
      .html(

       function(d) {
        return  `
        <table>
        <tr><td><strong>Objective 1: </strong></td></tr>
        <tr><td><strong style='color:red'>life cycle cost (EUR)</strong></td><td>${d.f1}</td></tr>
          <tr><td>Capital Initial Cost (EUR)</td><td>${d.initialC}</td></tr>
          <tr><td>Maintenance Cost (EUR)</td><td>${d.maintenanceC}</td></tr>
          <tr><td>PV Energy saving (EUR)</td><td>${d.EnergySavings}</td></tr>
          <tr><td><strong>Objective 2: </strong></td></tr>
          <tr><td><strong style='color:red'>loss of load probability</strong></td><td>${d.f2}</td></tr>
          <tr><td>PV module area (m²)</td><td>${d.PVarea}</td></tr>
          <tr><td>PV number </td><td>${d.PVnumber}</td></tr>
          <tr><td>Solar Energy Production (kWh/year)</td><td>${d.EnergyProduction}</td></tr>
          
          
        </table>
      `});
    
    svg.select(".x.axis").remove();
    svg.select(".y.axis").remove();
  
    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("class", "label")
    .attr("x", width)
    .attr("y", -6)
    .style("text-anchor", "end")
    .text(x_axis);
  
    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text(y_axis);

    svg.call(tool_tip);
    
    svg.selectAll(".dot").remove(); // remove the dots
    
    svg.selectAll(".dot") // add the new dots
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", function(d) { return xScale(d[x_axis]); })
      .attr("cy", function(d) { return yScale(d[y_axis]); })
      .attr("r", 3.5)
      .style("fill", function(d) { return color(d.species); }).on('mouseover', tool_tip.show)
      .on('mouseout', tool_tip.hide);

      d3.select("#submit-button").on("click", function() { //chnage x and y dimension
        var xMin = +d3.select("#x-min").property("value");
        var xMax = +d3.select("#x-max").property("value");
        var yMin = +d3.select("#y-min").property("value");
        var yMax = +d3.select("#y-max").property("value");
      
        xScale.domain([xMin, xMax]);//update the scales
        yScale.domain([yMin, yMax]);
      
        zoom.x(xScale); //update the x scale in the zoom behavior
        zoom.y(yScale); //update the y scale in the zoom behavior
      
        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);
        
        svg.selectAll(".dot")
          .attr("cx", function(d) { return xScale(d[x_axis]); })
          .attr("cy", function(d) { return yScale(d[y_axis]); });
        });
      
        var zoom = d3.behavior.zoom() // add the zoom feature
          .x(xScale)
          .y(yScale)
          .scaleExtent([1, 10])
          .on("zoom", zoomed);
      
      svg.call(zoom);
      
      function zoomed() {
        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);
        svg.selectAll(".dot").attr("cx", function(d) { return xScale(d[x_axis]); })
            .attr("cy", function(d) { return yScale(d[y_axis]); });
      }
      
      }
      
      update();
      document.getElementById("toggle-mod").style.display = "none";
      document.getElementById("opt2").style.display = "none";
    }
      
  
    export default {scatternsga};
