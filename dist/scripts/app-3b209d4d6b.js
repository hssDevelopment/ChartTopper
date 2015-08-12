/**
 * Copyright © 2015 Michael Hensley
 */
!function(){"use strict";angular.module("ChartTopper",[]),angular.module("chartTopperDemo",["ngAnimate","ChartTopper","ngCookies","ngTouch","ngSanitize","ui.router","ui.bootstrap"])}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){"use strict";function t(){function t(t){var a=d3.svg.line().interpolate("monotone").x(function(a){return t.xScale(a.month)}).y(function(a){return t.yScale(a.score)}),i=d3.svg.line().interpolate("monotone").x(function(a){return t.xScale(a.month)}).y(function(a){return t.yScale(a.score)});if(t.animation&&"fade-in"===t.animation)return void t.svg.append("path").attr("fill","none").attr("stroke",t.fillColor).attr("stroke-width",0).attr("class","line").attr("d",i(t.data)).transition().ease("linear").delay(1e3).duration(1e3).attr("d",a(t.data)).attr("stroke-width",1.5);var n=t.svg.append("path").attr("fill","none").attr("stroke",t.fillColor).attr("stroke-width",1.5).attr("d",a(t.data));if(t.animation&&"ghost-writer"===t.animation){var e=n.node().getTotalLength();n.attr("stroke-dasharray",e+" "+e).attr("stroke-dashoffset",e).transition().duration(2e3).ease("linear").attr("stroke-dashoffset",0)}}return{visit:t}}angular.module("ChartTopper").service("lineDrawerVisitor",t)}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(){function t(t){t.svg.append("g").selectAll("circle.median").data(t.data).enter().append("circle").attr("r",4).attr("cx",function(a){return t.xScale(a.month)}).attr("cy",function(a){return t.yScale(a.score)}).style("fill",t.fillColor).append("text").text("test text").attr("text-anchor","top")}return{visit:t}}angular.module("ChartTopper").service("circleDrawerVisitor",t)}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(){function t(t){var i=d3.svg.axis().scale(t.yScale).orient("right").tickValues(a).tickSize(-t.height+65),n=d3.svg.axis().scale(t.xScale).orient("bottom").tickSize(-t.width+55).tickFormat(function(a){var i=t.data[a-1];return i?i.monthText:""});t.svg.append("g").attr("id","xAxisG").attr("transform","translate(0, 540)").call(n),t.svg.append("g").attr("id","yAxisG").attr("transform","translate(530, 0)").call(i)}return{visit:t}}angular.module("ChartTopper").service("axisDrawerVisitor",t);var a=[10,20,30,40,50,60,70,80,90,100]}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(){function t(t){var a=Math.min(t.height,t.width)/2,i=t.svg.append("g").attr("transform","translate("+a+","+a+")");i.append("text").attr("dy",".35em").attr("text-anchor","middle").text(t.title)}return{visit:t}}angular.module("ChartTopper").service("TitleVisitor",t)}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(){function t(t){function a(t){var a={startAngle:0,endAngle:0},i=d3.interpolate(a,t);return function(t){return e(i(t))}}var i=d3.scale.category20(),n=Math.min(t.width,t.height)/2,e=d3.svg.arc().innerRadius(n/2).outerRadius(n),r=d3.layout.pie(),o=Math.min(t.height,t.width)/2,l=t.svg.append("g").attr("transform","translate("+o+","+o+")");l.selectAll("path").data(r(t.data)).enter().append("path").attr("stroke","white").attr("stroke-width",.5).attr("fill",function(t,a){return i(a)}).transition().duration(1e3).delay(1e3).attrTween("d",a),l.selectAll("text").data(r(t.data)).enter().append("text").attr("transform",function(t){var a=e.centroid(t);return"translate("+a[0]+","+a[1]+")"}).transition().delay(2100).attr("text-anchor","middle").text(function(t){return t.value})}return{visit:t}}angular.module("ChartTopper").service("ArcVisitor",t)}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(){function t(t){var a=d3.svg.axis().scale(t.y).orient("left");t.svg.append("g").call(a)}return{visit:t}}angular.module("ChartTopper").service("yAxisVisitor",t)}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(){function t(t){var a=d3.svg.axis().scale(t.x).orient("bottom");t.svg.append("g").attr("class","x axis").attr("transform","translate(0,"+t.height+")").call(a)}return{visit:t}}angular.module("ChartTopper").service("xAxisVisitor",t)}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(){function t(t,a){a.data(t.data).enter().append("text").attr("x",function(a){return t.x(a.label)+t.x.rangeBand()/2}).attr("class","bar-text").attr("y",function(a){return t.calculateYForText(t,a)}).attr("text-anchor","middle").text(function(t){return t.data})}function a(t,a){a.data(t.data).enter().append("rect").attr("class","bar").attr("x",function(a){return t.x(a.label)}).attr("width",t.x.rangeBand()).attr("fill",t.fillColor).attr("height",function(a){return t.height-t.y(a.data)}).attr("y",function(a){return t.y(a.data)})}function i(i){var n=i.svg.selectAll(".bar");a(i,n),t(i,n)}return{visit:i}}angular.module("ChartTopper").service("nonAnimateBarVisitor",t)}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(t,a){function i(t,a){var i=25,n=-5;switch(t.dataTextPosition){case"middle":return t.y(a.data)+(t.height-t.y(a.data))/2;case"top":return t.y(a.data)+i;default:return t.y(a.data)+n}}function n(n){return n.calculateYForText=i,"ghost-writer"===n.animation?void t.visit(n):void a.visit(n)}return{visit:n}}angular.module("ChartTopper").service("barVisitor",t),t.$inject=["animateBarVisitor","nonAnimateBarVisitor"]}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(){function t(t,a){a.data(t.data).enter().append("rect").attr("class","bar").attr("x",function(a){return t.x(a.label)}).attr("width",t.x.rangeBand()).attr("fill",t.fillColor).attr("height",0).attr("y",function(a){return t.y(a.data)+(t.height-t.y(a.data))}).transition().duration(1e3).attr("height",function(a){return t.height-t.y(a.data)}).attr("y",function(a){return t.y(a.data)})}function a(t,a){a.data(t.data).enter().append("text").transition().delay(1200).attr("x",function(a){return t.x(a.label)+t.x.rangeBand()/2}).attr("class","bar-text").attr("y",function(a){return t.calculateYForText(t,a)}).attr("text-anchor","middle").text(function(t){return t.data})}function i(i){var n=i.svg.selectAll(".bar");t(i,n),a(i,n)}return{visit:i}}angular.module("ChartTopper").service("animateBarVisitor",t)}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(t,a,i){function n(t,a,i,n){return new e(t,a,i,n)}function e(n,e,l,s){this.lineChart=l,this.element=e,this.data=n,this.xScale=null,this.yScale=null,this.svg=null,this.fillColor=null===s?r:s,this.height=575,this.width=575,this.animate=function(t){return void 0===this.animation&&(this.animation=t),this},this.build=function(){_.each(this.data,function(t,a){var i={score:t};_.extend(o[a],i)}),this.data=o,this.xScale=d3.scale.linear().domain([1,13]).range([20,this.width-45]),this.yScale=d3.scale.linear().domain([0,100]).range([this.height-35,20]),this.svg=d3.select(this.element).append("svg").attr("width",this.width).attr("height",this.height),i.visit(this),a.visit(this),this.lineChart&&t.visit(this)}}var r="steelblue",o=[{month:"1",monthText:"Jan"},{month:"2",monthText:"Feb"},{month:"3",monthText:"Mar"},{month:"4",monthText:"Apr"},{month:"5",monthText:"May"},{month:"6",monthText:"Jun"},{month:"7",monthText:"Jul"},{month:"8",monthText:"Aug"},{month:"9",monthText:"Sep"},{month:"10",monthText:"Oct"},{month:"11",monthText:"Nov"},{month:"12",monthText:"Dec"}];return{createLineChart:n}}angular.module("ChartTopper").service("lineChartService",t),t.$inject=["lineDrawerVisitor","circleDrawerVisitor","axisDrawerVisitor"]}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(t,a){function i(t,a,i,e,r){return new n(t,a,i,e,r)}function n(i,n,e,r,o){this.data=i,this.element=n,this.height=e,this.width=r,this.title=o,this.svg=null,this.build=function(){this.svg=d3.select(n).append("svg").attr("width",r).attr("height",e),t.visit(this),a.visit(this)}}return{createDonut:i}}angular.module("ChartTopper").service("donutService",t),t.$inject=["ArcVisitor","TitleVisitor"]}(),/**
 * Copyright © 2015 Michael Hensley
 *
 */
function(){function t(t,a,i){function n(n,r,o,l,s){this.x=null,this.y=null,this.animation=null,this.data=n,this.element=r,this.margin={left:50+s,right:50+s,top:50+s,bottom:50+s},this.svg=null,this.height=null,this.width=null,this.fillColor=null,this.dataTextPosition=null,this.animate=function(t){return null===this.animation&&(this.animation=t),this},this.color=function(t){return this.fillColor=t,this},this.dataPosition=function(t){return this.dataTextPosition=t,this},this.build=function(){null===this.fillColor?this.fillColor=e:angular.noop,this.width=l-this.margin.left-this.margin.right,this.height=o-this.margin.top-this.margin.bottom,this.x=d3.scale.ordinal().rangeRoundBands([0,this.width],.3),this.y=d3.scale.linear().range([this.height,0]),this.svg=d3.select(r).append("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.x.domain(n.map(function(t){return null===t.label?"":t.label})),this.y.domain([0,d3.max(n,function(t){return t.data})]),a.visit(this),t.visit(this),i.visit(this)}}var e="steelblue";return{createBarChart:function(t,a,i,e,r){return new n(t,a,i,e,r)}}}angular.module("ChartTopper").service("barChartService",t),t.$inject=["yAxisVisitor","xAxisVisitor","barVisitor"]}(),function(){"use strict";function t(){var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html"};return t}angular.module("chartTopperDemo").directive("acmeNavbar",t)}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){"use strict";function t(t,a,i){function n(t,a,n,e,r){return i.createBarChart(t,a,n,e,r)}function e(t,i,n,e){return a.createLineChart(t,i,n,e)}function r(a,i,n,e,r){return t.createDonut(a,i,n,e,r)}return{buildBarChart:n,buildLineChart:e,buildDonutChart:r}}angular.module("ChartTopper").service("chartTopper",t),t.$inject=["donutService","lineChartService","barChartService"]}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){"use strict";function t(t){var a=[5,10,15,20,25],i=["45","55","62","35","45","71","78","65","41","93","81","87"],n="#d3-test",e="#d3-line-test",r="#d3-donut-test";t.buildBarChart(a,n),t.buildLineChart(i,e),t.buildDonutChart(a,r,250,250)}angular.module("chartTopperDemo").controller("MainController",t),t.$inject=["chartTopper"]}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(t,a){var i=this,n=[40,10,25,16,32];i.config={height:300,width:300,title:"Test Chart"},t.buildDonutChart(n,"#donut-chart-demo",i.config.height,i.config.width,i.config.title).build(),i.update=function(){angular.element("#donut-chart-demo").empty(),t.buildDonutChart(n,"#donut-chart-demo",i.config.height,i.config.width,i.config.title).build()}}angular.module("chartTopperDemo").controller("DonutChartDemoController",t),t.$inject=["chartTopper","$scope"]}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(t,a){var i=this,n=["45","55","62","35","45","71","78","65","41","93","81","87"];i.config={animation:"ghost-writer",isLine:!0},i.color="steelblue",t.buildLineChart(n,"#line-chart-demo",i.config.isLine,i.color).animate(i.config.animation).build(),i.update=function(){angular.element("#line-chart-demo").empty(),t.buildLineChart(n,"#line-chart-demo",i.config.isLine,i.color).animate(i.config.animation).build()},a.$watch(angular.bind(this,function(){return this.config}),function(){i.update()},!0)}angular.module("chartTopperDemo").controller("LineChartDemoController",t),t.$inject=["chartTopper","$scope"]}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){function t(t,a){var i=this;i.labelPlacement="top";var n=[{label:"MON",data:20},{label:"TUES",data:100},{label:"WED",data:150},{label:"THUR",data:121},{label:"FRI",data:80},{label:"SAT",data:65},{label:"SUN",data:48}];i.config={animation:!0,labelPlacement:"middle"},i.color="steelblue",t.buildBarChart(n,"#bar-chart-demo",600,800,10).animate(i.config.animation?"ghost-writer":"").color(i.color).dataPosition(i.config.labelPlacement).build(),i.update=function(){angular.element("#bar-chart-demo").empty(),t.buildBarChart(n,"#bar-chart-demo",600,800,10).animate(i.config.animation?"ghost-writer":"").color(i.color).dataPosition(i.config.labelPlacement).build()},a.$watch(angular.bind(this,function(){return this.config}),function(){i.update()},!0)}angular.module("chartTopperDemo").controller("BarChartDemoController",t),t.$inject=["chartTopper","$scope"]}(),/**
 * Copyright © 2015 Michael Hensley
 */
function(){"use strict";function t(t,a){t.state("main",{url:"/",templateUrl:"app/intro.html"}).state("bar",{url:"/bar",templateUrl:"app/BarChartDemo/BarChartDemo.html",controller:"BarChartDemoController",controllerAs:"BarChart"}).state("line",{url:"/line",templateUrl:"app/LineChartDemo/LineChartDemo.html",controller:"LineChartDemoController",controllerAs:"LineChart"}).state("donut",{url:"/donut",templateUrl:"app/DonutChartDemo/DonutChartDemo.html",controller:"DonutChartDemoController",controllerAs:"DonutChart"}),a.otherwise("/")}angular.module("chartTopperDemo").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),angular.module("chartTopperDemo").run(["$templateCache",function(t){t.put("app/intro.html",'<div class="container"><div><acme-navbar></acme-navbar></div><div class="row text-center"><h2>Chart Topper: An angular-based d3 wrapper library</h2><h3>Written By Michael Hensley</h3></div><div class="row"><div class="col-md-4 text-center" ui-sref="bar"><i class="fa fa-bar-chart fa-5x"></i><h4>Bar Chart</h4></div><div class="col-md-4 text-center" ui-sref="line"><i class="fa fa-line-chart fa-5x"></i><h4>Line Chart</h4></div><div class="col-md-4 text-center" ui-sref="main"><i class="fa fa-pie-chart fa-5x"></i><h4>Donut Chart</h4></div></div></div>'),t.put("app/BarChartDemo/BarChartDemo.html",'<section><div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><h1 class="text-center">Bar Chart Demo - Fake Weekly Sales Data!</h1><div class="row"><div class="col-md-4 text-center"><h4>Bar Chart Animation</h4><div class="btn-group"><label class="btn btn-primary" ng-model="BarChart.config.animation" btn-radio="true">On</label> <label class="btn btn-primary" ng-model="BarChart.config.animation" btn-radio="false">Off</label></div></div><div class="col-md-4 text-center"><h4>Label Positioning</h4><div class="btn-group"><label class="btn btn-success" ng-model="BarChart.config.labelPlacement" btn-radio="\'outside\'">Outside Label</label> <label class="btn btn-success" ng-model="BarChart.config.labelPlacement" btn-radio="\'top\'">Align Top</label> <label class="btn btn-success" ng-model="BarChart.config.labelPlacement" btn-radio="\'middle\'">Align Middle</label></div></div><div class="col-md-4"><h4>Enter Bar Color (hex, rgb, or color)</h4><div class="btn-group"><input type="text" class="form-control" ng-blur="BarChart.update()" ng-model="BarChart.color"></div></div></div><div class="row"><div class="chart-container"><div id="bar-chart-demo"></div></div></div></div></section>'),t.put("app/LineChartDemo/LineChartDemo.html",'<section><div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><h1 class="text-center">Line Chart Demo - Yearly Data!</h1><div class="row"><div class="col-md-4 text-center"><h4>Line Chart Animation</h4><div class="btn-group"><label class="btn btn-primary" ng-model="LineChart.config.animation" btn-radio="\'ghost-writer\'">Ghost Writer</label> <label class="btn btn-primary" ng-model="LineChart.config.animation" btn-radio="\'fade-in\'">Fade In</label> <label class="btn btn-primary" ng-model="LineChart.config.animation" btn-radio="\'empty\'">Off</label></div></div><div class="col-md-4 text-center"><h4>Line Chart or Scatter Plot</h4><div class="btn-group"><label class="btn btn-success" ng-model="LineChart.config.isLine" btn-radio="true">Line Chart</label> <label class="btn btn-success" ng-model="LineChart.config.isLine" btn-radio="false">Scatter Plot</label></div></div><div class="col-md-4"><h4>Enter Fill Color (hex, rgb, or color)</h4><div class="btn-group"><input type="text" class="form-control" ng-blur="LineChart.update()" ng-model="LineChart.color"></div></div></div><div class="row"><div class="chart-container"><div id="line-chart-demo"></div></div></div></div></section>'),t.put("app/DonutChartDemo/DonutChartDemo.html",'<section><div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><h1 class="text-center">Donut Chart Demo</h1><div class="row"><div class="col-md-4"><h4>Enter Height</h4><div class="btn-group"><input type="text" class="form-control" ng-blur="DonutChart.update()" ng-model="DonutChart.config.height"></div></div><div class="col-md-4"><h4>Enter Width</h4><div class="btn-group"><input type="text" class="form-control" ng-blur="DonutChart.update()" ng-model="DonutChart.config.width"></div></div><div class="col-md-4"><h4>Enter Donut Title</h4><div class="btn-group"><input type="text" class="form-control" ng-blur="DonutChart.update()" ng-model="DonutChart.config.title"></div></div></div><div class="row"><div class="chart-container"><div id="donut-chart-demo"></div></div></div></div></section>'),t.put("app/main/main.html",'<style>\n\n    #d3-line-test rect {\n        fill: steelblue;\n    }\n\n    #d3-line-test  text {\n        fill: gray;\n        font: 10px sans-serif;\n        text-anchor: end;\n    }\n\n</style><div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><div class="row"><div class="col-lg-12"><h3>Test div that will hold my Line svg</h3><div class="col-lg-12"><div id="d3-line-test"></div></div></div><div class="col-lg-12"><h3>Test div that will hold my Donut svg</h3></div></div><div class="row"><div class="col-lg-12"><div id="d3-donut-test"></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" ui-sref="main"><span class="glyphicon glyphicon-home"></span></a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li><a ui-sref="bar">Bar Chart Example</a></li><li><a ui-sref="line">Line Chart Example</a></li><li><a ui-sref="main">Donut Chart Example</a></li></ul></div></div></nav>')}]);