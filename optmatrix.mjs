import {jsonObj5} from './csvscatteropt.mjs';
window.matricensga = ()=> {
  
  d3.select("#chart3").select("svg").remove();
  
  
  var svg;
 
var width = 660,
    size = 140,
    padding = 25;
    var csvdata = jsonObj5;
    
console.log('this is it', csvdata)

function convertIntObj(csvdata) {
  const res = {}; // Initialize an empty result object

  // Iterate over the keys of the CSV data object
  for (const key in csvdata) {
    res[key] = {}; // Create an empty object for each key

    // Iterate over the properties of each key
    for (const prop in csvdata[key]) {
      const parsed = Number(csvdata[key][prop], 10); // Attempt to parse the value as a number
      
      // If the parsed value is NaN, assign the original string value; otherwise, assign the parsed number
      res[key][prop] = isNaN(parsed) ? csvdata[key][prop] : parsed;
    }
  }

  return res; // Return the resulting object with converted values
}
  var result = convertIntObj(csvdata);

  console.log('Object result', result)



  const data = Object.entries(result).map(e => e[1]);


  
    
      var dom =[];
      var domains = [],
      params = d3.keys(data[0]),//used to return an array containing the property names or keys of the specified object or an associative array.
      n = params.length;
  //give me the range --- max and min
      params.forEach(function(a) {
      domains[a] = d3.extent(data, function(d) { return d[a]; });
      dom.push(domains[a])
    });

     
//console.log(params)
console.log(params)
console.log(domains)
console.log(dom)
            //create scales
            var x = d3.scale.linear() //Constructs creates a scale with a linear relationship between input and output.
            .range([padding / 2, size - padding /2]);

            var y = d3.scale.linear()
            .range([size - padding / 2, padding / 2]);
            // create axis   
            var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(4);

            var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(4);
              //put the x axis at the matrix's bottom
            xAxis.tickSize(size * n);
            yAxis.tickSize(-size * n);
       

           

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



     // Define a brush using d3.svg.brush()
        var brush = d3.svg.brush()
        .x(x) // Set the x-scale for the brush
        .y(y) // Set the y-scale for the brush
        .on("brushstart", brushstart) // Set the event listener for brush start
        .on("brush", brushmove) // Set the event listener for brush move
        .on("brushend", brushend); // Set the event listener for brush end
        

       // Select the element with ID "chart3" and append an SVG element to it
          svg = d3.select("#chart3").append("svg")
          .attr("width", size * n + (padding * 4)) // Set the width of the SVG
          .attr("height", size * n + (padding * 4)) // Set the height of the SVG
          .append("g") // Append a "g" element to the SVG
          .attr("transform", "translate(" + padding * 2 + "," + padding + ")"); // Apply a translation transformation to the "g" element

          
          svg.call(tool_tip); //recall tool tip
          
      // Select all elements with class "x.axis" in the SVG
        svg.selectAll(".x.axis")
        .data(params) // Bind data to the selected elements
        .enter().append("g") // Append a "g" element for each data point
        .attr("class", "x axis") // Set the class attribute to "x axis"
        .attr("transform", function(d, i) { 
          return "translate(" + (n - i - 1) * size + ",0)"; 
          // Set the transformation attribute to translate the element horizontally
        })
        .each(function(d) { 
          x.domain(domains[d]); // Set the domain of x scale based on the current data
          d3.select(this).call(xAxis); 
          // Call the xAxis function on the current element to render the x-axis
        });
    
      // Select all elements with class "y.axis" in the SVG
        svg.selectAll(".y.axis")
        .data(params) // Bind data to the selected elements
        .enter().append("g") // Append a "g" element for each data point
        .attr("class", "y axis") // Set the class attribute to "y axis"
        .attr("transform", function(d, i) {
          return "translate(0," + i * size + ")";
          // Set the transformation attribute to translate the element vertically
        })
        .each(function(d) {
          y.domain(domains[d]); // Set the domain of y scale based on the current data
          d3.select(this).call(yAxis);
          // Call the yAxis function on the current element to render the y-axis
        });
    
      // Create cells using the "cell" class
        var cell = svg.selectAll(".cell")
        .data(cross(params, params)) // Generate combinations of parameters using cross()
        .enter().append("g") // Append a "g" element for each combination
        .attr("class", "cell") // Set the class attribute to "cell"
        .attr("transform", function(d) { 
          return "translate(" + (n - d.i - 1) * size + "," + d.j * size + ")";
          // Set the translation attribute to position the cell based on the combination indices and size
        })
        .call(brush) // Attach the brush to each cell
        .each(plot); // Call the plot function for each cell
          //console.log()
         // cell.call(brush);
    console.log(data)
      // Titles for the diagonal.
      cell.filter(function(d) { return d.i === d.j; }).append("text")
          .attr("x", padding/1.5)
          .attr("y", padding/1.5)
          .attr("dy", ".71em")
          .text(function(d) { return d.x; });
    
      
      function plot(p) {
        var cell = d3.select(this);
    
        x.domain(domains[p.x]);
        y.domain(domains[p.y]);
    
        cell.append("rect") // create rectangle to each  cell
            .attr("class", "frame")
            .attr("x", padding / 4)
            .attr("y", padding / 4)
            .attr("width", size - (padding/2))
            .attr("height", size - (padding/2))
            .style("pointer-events", "none");
    
        
            cell.selectAll("circle") // Select all circles within each cell
            .attr("class", "circles") // Set the class attribute to "circles"
            .data(data) // Bind data to the selected circles
          .enter().append("circle") // Append a circle element for each data point
            .attr("cx", function(d) { 
              return x(d[p.x]);
              // Set the x-coordinate of the circle based on the x-scale and data value
            })
            .attr("cy", function(d) {
              return y(d[p.y]);
              // Set the y-coordinate of the circle based on the y-scale and data value
            })
            .attr("r", 3) // Set the radius of the circles to 3
            .style("fill", "blue") // Set the fill color of the circles to blue
            .on('mouseover', tool_tip.show) // Show the tooltip on mouseover event
            .on('mouseout', tool_tip.hide); // Hide the tooltip on mouseout event

            //handleEvents);
            
      }
      var brushCell;

      // Clear the previously-active brush, if any.
      function brushstart(p) {
        if (brushCell !== this) {
          d3.select(brushCell).call(brush.clear());
          x.domain(domains[p.x]);
          y.domain(domains[p.y]);
          brushCell = this;
        }
      }

      // Highlight the selected circles.
      function brushmove(p) {
        var e = brush.extent();
        svg.selectAll("circle").classed("hidden", function(d) {
          return e[0][0] > d[p.x] || d[p.x] > e[1][0] || e[0][1] > d[p.y] || d[p.y] > e[1][1];
        });
        //svg.call(tool_tip);
      }

      // If the brush is empty, select all circles.
      function brushend() {
        if (brush.empty())
          svg.selectAll(".hidden").classed("hidden", false);
      }

      function cross(a, b) {
        var c = [], n = a.length, m = b.length, i, j;
        for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
        return c;
      }
    
  ;
  document.getElementById("toggle-mod1").style.display = "none";
  document.getElementById("opt1").style.display = "none";
}

export default {matricensga};