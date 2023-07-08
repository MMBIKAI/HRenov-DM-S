import {jsonObj} from './csv2.mjs';
window.matrice = ()=> {
  
  //d3.select("svg").remove();
  d3.select("#chart3").select("svg").remove();
  
  var svg;
 
var width = 660,
    size = 140,
    padding = 25;
    var csvdata = jsonObj;
    
console.log('this is it', csvdata)


//convert into object
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
       

           
//tool tip
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

     


      var brush = d3.svg.brush() // brush definition
          .x(x)
          .y(y)
          .on("brushstart", brushstart)
          .on("brush", brushmove)
          .on("brushend", brushend);
        

       svg = d3.select("#chart3").append("svg")
          .attr("width", size * n + (padding*4))
          .attr("height", size * n + (padding*4))
          .append("g")
          .attr("transform", "translate(" + padding*2 + "," + padding + ")")
          ;

         
          
          svg.call(tool_tip); //call the tool tip
          
      svg.selectAll(".x.axis") // for x axis
          .data(params)
        .enter().append("g")
          .attr("class", "x axis")
          .attr("transform", function(d, i) { return "translate(" + (n - i -1 ) * size + ",0)"; })
          .each(function(d) { x.domain(domains[d]); d3.select(this).call(xAxis); });
    
      svg.selectAll(".y.axis")// for y axis
          .data(params)
        .enter().append("g")
          .attr("class", "y axis")
          .attr("transform", function(d, i) { return "translate(0," + (i ) * size + ")"; })
          .each(function(d) { y.domain(domains[d]); d3.select(this).call(yAxis); });
    
      var cell = svg.selectAll(".cell") // create cells 
          .data(cross(params, params))
        .enter().append("g")
          .attr("class", "cell")
          .attr("transform", function(d) { return "translate(" + (n - d.i -1) * size + "," + d.j * size + ")"; })
          .call(brush)//add brush
          .each(plot)
          
          ;
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
    
        cell.append("rect") // creaete rectangle as cell
            .attr("class", "frame")
            .attr("x", padding / 4)
            .attr("y", padding / 4)
            .attr("width", size - (padding/2))
            .attr("height", size - (padding/2))
            .style("pointer-events", "none");
    
        
       cell.selectAll("circle") // draw circle for each data point
            .attr("class", "circles")
            .data(data)
            .enter().append("circle")
            .attr("cx", function(d) { return x(d[p.x]); })
            .attr("cy", function(d) { return y(d[p.y]); })
            .attr("r", 3)
            .style("fill", "blue")
            /*.dataset.attribs =JSON.stringify(data[p]);
            document.body.appendChild(circles);*/
            .on('mouseover', tool_tip.show)
            .on('mouseout', tool_tip.hide);

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
 // document.getElementById("toggle-mod1").style.display = "none";
}

export default {matrice};