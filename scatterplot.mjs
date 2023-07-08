import {jsonObj} from './csv2.mjs';
window.scatter =() =>{
  d3.select("#scatter").select("svg").remove();
 
   var csvdata = jsonObj;
   // var csvdata = datajs;
console.log('this is it', csvdata)

//convert inyo the object
function convertIntObj(csvdata) {
  const res = {}; // Create an empty object to store the converted data

  for (const key in csvdata) {
    res[key] = {}; // Create an empty object for each key in csvdata

    for (const prop in csvdata[key]) {
      const parsed = Number(csvdata[key][prop], 10); // Parse the value as a number using Number() function
      res[key][prop] = isNaN(parsed) ? csvdata[key][prop] : parsed;
      // If the parsed value is NaN (not a number), assign the original value from csvdata,
      // otherwise assign the parsed integer value
    }
  }

  return res; // Return the converted object
}

var result = convertIntObj(csvdata);

  console.log('Object result', result)

  const data = Object.entries(result).map(e => e[1]);
  
  //define dimension
  var margin = {top: 20, right: 20, bottom: 30, left: 40};
  var width = 960 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;
  
  //scales
  var xScale = d3.scale.linear()
    .range([0, width]);
  
  var yScale = d3.scale.linear()
    .range([height, 0]);
  
  var color = d3.scale.category10();
  
  var scatterplot = d3.select("#scatter")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
    

  d3.select("#submit-button").on("click", update);
  d3.selectAll("input").on("change", update);
  
  function update() {
    var x_axis = d3.select("input[name='x-axis']:checked").node().value;
    var y_axis = d3.select("input[name='y-axis']:checked").node().value;
  
    xScale.domain([0, d3.max(data, function(d) { return d[x_axis]; })]);
    yScale.domain([0, d3.max(data, function(d) { return d[y_axis]; })]);
  
    var xAxis = d3.svg.axis() // Create an x-axis using the d3.svg.axis() function
    .scale(xScale) // Set the scale for the x-axis using the xScale variable
    .orient("bottom"); // Set the orientation of the x-axis to be at the bottom
  
    var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

    var tool_tip = d3.tip() // Create a tooltip using the d3.tip() function
  .attr("class", "d3-tip") // Set the class attribute of the tooltip
  .offset([-10, 0]) // Set the offset of the tooltip position
  .html(function(d) { // Set the HTML content of the tooltip using a function with data (d) as a parameter
    return `
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
    
    scatterplot.select(".x.axis").remove();
    scatterplot.select(".y.axis").remove();
  
    scatterplot.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis) // Call the xAxis function to render the x-axis ticks and labels
    .append("text")
    .attr("class", "label")
    .attr("x", width)
    .attr("y", -6)
    .style("text-anchor", "end")
    .text(x_axis); // Set the text content of the <text> element to the value of the x_axis variable
  
    scatterplot.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text(y_axis);

    scatterplot.call(tool_tip);
    
    scatterplot.selectAll(".dot").remove(); // Remove existing elements with class "dot"

    scatterplot.selectAll(".dot")
    .data(data) // Bind data to new elements
    .enter().append("circle") // Append circle elements for each data point
    .attr("class", "dot") // Assign the class "dot" to the circle elements
    .attr("cx", function(d) { return xScale(d[x_axis]); }) // Set the x-coordinate of the circles
    .attr("cy", function(d) { return yScale(d[y_axis]); }) // Set the y-coordinate of the circles
    .attr("r", 3.5) // Set the radius of the circles
    .style("fill", function(d) { return color(d.species); }) // Set the fill color of the circles based on the species property
    .on('mouseover', tool_tip.show) // Set the mouseover event handler to show the tool_tip
    .on('mouseout', tool_tip.hide); // Set the mouseout event handler to hide the tool_tip



    d3.select("#submit-button").on("click", function() {
      // Event listener for the click event on the element with ID "submit-button"
    
      var xMin = +d3.select("#x-min").property("value");
      // Get the value of the element with ID "x-min" and convert it to a number using the unary plus operator
    
      var xMax = +d3.select("#x-max").property("value");
      // Get the value of the element with ID "x-max" and convert it to a number using the unary plus operator
    
      var yMin = +d3.select("#y-min").property("value");
      // Get the value of the element with ID "y-min" and convert it to a number using the unary plus operator
    
      var yMax = +d3.select("#y-max").property("value");
      // Get the value of the element with ID "y-max" and convert it to a number using the unary plus operator
    
      xScale.domain([xMin, xMax]);
      // Update the domain of the xScale with the new minimum and maximum values
    
      yScale.domain([yMin, yMax]);
      // Update the domain of the yScale with the new minimum and maximum values
    
      zoom.x(xScale); // Update the x scale in the zoom behavior
      zoom.y(yScale); // Update the y scale in the zoom behavior
    
      scatterplot.select(".x.axis").call(xAxis);
      // Update the x-axis by calling the xAxis function on the selected element with class "x.axis"
    
      scatterplot.select(".y.axis").call(yAxis);
      // Update the y-axis by calling the yAxis function on the selected element with class "y.axis"
    
      scatterplot.selectAll(".dot")
        .attr("cx", function(d) { return xScale(d[x_axis]); })
        .attr("cy", function(d) { return yScale(d[y_axis]); });
      // Update the position of the dots/circles by setting the "cx" and "cy" attributes using the updated scales
    });
      
    var zoom = d3.behavior.zoom()
    .x(xScale) // Set the x scale for zooming
    .y(yScale) // Set the y scale for zooming
    .scaleExtent([1, 10]) // Set the scale extent for zooming
    .on("zoom", zoomed); // Specify the zoomed function to be called when a zoom event occurs
  
      scatterplot.call(zoom);
      // Apply the zoom behavior to the scatterplot selection
      
      function zoomed() {
        scatterplot.select(".x.axis").call(xAxis);
        // Update the x-axis by calling the xAxis function on the selected element with class "x.axis"
      
        scatterplot.select(".y.axis").call(yAxis);
        // Update the y-axis by calling the yAxis function on the selected element with class "y.axis"
      
        scatterplot.selectAll(".dot")
          .attr("cx", function(d) { return xScale(d[x_axis]); })
          .attr("cy", function(d) { return yScale(d[y_axis]); });
        // Update the position of the dots/circles by setting the "cx" and "cy" attributes using the updated scales
      }
      
      }
      
      update();


  }

export default {scatter};