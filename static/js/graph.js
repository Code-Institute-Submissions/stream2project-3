    queue()
        .defer(d3.json, "/data")
        .await(makeGraphs);
        
    function makeGraphs(error, salesData) {
    var ndx = crossfilter(salesData);
    
    salesData.forEach(function(d){
        d.Global = parseFloat(d.Global);
    });

// Manufacturer Sales
    var manufacturerdim = ndx.dimension(dc.pluck("Manufacturer"));
    var totalsales = manufacturerdim.group().reduceSum(dc.pluck("Global"));

    dc.barChart("#manufacturer-sales")
        .height(500)
        .width(500)
        .margins({top: 10, right: 10, bottom: 30, left: 10})
        .dimension(manufacturerdim)
        .group(totalsales)
        // .ordinalColors(["green","black","red","light blue","blue"])
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Manufacturer")
        .yAxis().ticks(2);
    
// Pie Chart
    var manupie_dim = ndx.dimension(dc.pluck("Manufacturer"));
    var totsales = manupie_dim.group().reduceSum(dc.pluck("Global"));
    
    dc.pieChart("#piechart")
        .height(300)
        .radius(150)
        .transitionDuration(1500)
        .dimension(manupie_dim)
        .group(totsales);
        
// Year Sales
    var yeardim = ndx.dimension(dc.pluck("Year"));
    var totalsales = yeardim.group().reduceSum(dc.pluck("Global"));

    dc.barChart("#year-sales")
        .height(300)
        .width(1200)
        .margins({top: 10, right: 10, bottom: 30, left: 10})
        .dimension(yeardim)
        .group(totalsales)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Year")
        .yAxis().ticks(2);

// Genre Sales
    var genredim = ndx.dimension(dc.pluck("Genre"));
    var totalsales = genredim.group().reduceSum(dc.pluck("Global"));

    dc.barChart("#genre-sales")
        .height(500)
        .width(800)
        .margins({top: 10, right: 10, bottom: 30, left: 10})
        .dimension(genredim)
        .group(totalsales)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Genre")
        .yAxis().ticks(2);
        
// Publisher Sales - Row Chart
    var publisherdim = ndx.dimension(dc.pluck("Publisher"));
    var totalsales = publisherdim.group().reduceSum(dc.pluck("Global"));
    var chart = dc.rowChart("#pub-sales");
        chart
            .width(900)
            .height(2000)
            .dimension(publisherdim)
            .group(totalsales)
            .cap(100)
            .othersGrouper(false)
            .xAxis().ticks(7);
            


 
    dc.renderAll();
}    

// set all text to white
// d3.selectAll("#gender_divide text").style("fill", "white");


// // Publisher Sales
//     var publisherdim = ndx.dimension(dc.pluck("Publisher"));
//     var totalsales = publisherdim.group().reduceSum(dc.pluck("Global"));
//     dc.barChart("#pub-sales")
//         .height(300)
//         .width(1800)
//         .margins({top: 10, right: 10, bottom: 30, left: 10})
//         .dimension(publisherdim)
//         .group(totalsales)
//         .transitionDuration(500)
//         .x(d3.scale.ordinal())
//         .xUnits(dc.units.ordinal)
//         .xAxisLabel("Publisher")
//         .yAxis().ticks(2);

// .renderlet(function(chart){
//     var colors =d3.scale.ordinal().domain(["California", "Colorado", "Delaware", "Mississippi", "Oklahoma", "Ontario"])
//         .range(["steelblue", "brown", "red", "green", "yellow", "grey"]);
//     chart.selectAll('rect.bar').each(function(d){
//          d3.select(this).attr("style", "fill: " + colors(d.key)); // use key accessor if you are using a custom accessor
//     });
// });