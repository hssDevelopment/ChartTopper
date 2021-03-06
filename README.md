# ChartTopper.js
An Angular JS Module that allows users to draw common charts (Donut, Line, and Bar), powered
by D3.js.

Bug Tracker: michael-hensley@live.com

Copyright (c) 2015 Michael Hensley with the MIT License
See the COPYING file for distributed licensing terms.

#Build
npm install<br>
bower install<br>
gulp serve<br>

This will start the page on port 3000. It can also be viewed here:
<a>chart-topper.azurewebsites.net</a>

#Api
include ChartTopper as an angular dependency in your module -> angular.module('myModule', ['ChartTopper'])<br>
now, in any part of your project, inject the service chartTopper. <br><br>

chartTopper has 3 methods: <br>
buildBarChart(data, element, height, width, padding)<br>
data: The data to chart about. The data is passed in via an array that contains a json entry for each bar to draw. The
data should be formatted:
[{"label": "MON", "data": 50}]
where label is the x axis label and data is the data to graph. The bar chart will calculate the y axis.

element: the element to attach the chart to
height: height of the chart
width: the width of the chart
padding: chart padding on the element

To add a color, call the .coclor method on the buildBarChart object returned:
buildBarChart(data, element, height, width, padding).color('blue')
color can be any valid string color, RGB, or hex. This method should be called before build.

buildLineChart(data, element, lineChartOption, color)<br>
data: the data to chart about. Right now the line chart is configured to draw a graph that represents the 12 months
of the year -> passing in a javascript array with 12 entries will draw a line chart:

var lineData = ['45', '55', '62', '35', '45', '71', '78', '65', '41', '93', '81', '87'];
This will be flushed out in the future to draw a line chart with an x axis configuration to whatever the user desires.

element: the element to attach the chart to
lineChartOption: a true/false variable -> if it's true, it will draw a line chart. False will draw a scatter plot.
color: the color of the line/dots on the line chart

buildDonutChart (data, element, height, width, title)<br>
data: The data to chart about
element: the element to attach the chart to
height: the height of the donut chart
width: the width of the donut chart
title: the middle text title.

Each object returns a charting object which has a build() method that creates the chart using the config provided.<br>
Each object charting object has an animate method on it, that when calling .animate before .build, will animate
the chart. The animate options are:
.animate('ghost-writer') [For the line chart and the bar chart]
.animate('fade-in') [For the line chart]

The donut chart will animate by default.

For an example in action, please see the demo controllers under BarChartDemo, LineChartDemo, and DonutChartDemo

#Technologies used for this project and demo app:
angularJS, Bootstrap, yeoman, gulp, bower, node, npm, D3, and Microsoft Azure (for the hosting)

#Helpful tutorials that helped me build Chart Topper:
https://github.com/mbostock/d3/wiki/Tutorials
D3 in Action by Elijah Meeks

#Why another D3 chart wrapper library?
There are so many javascript chart libraries, one might ask "does the world really need another
one?" I think the answer is yes.

The charting wrapper libraries I have looked at using are a mass of javascript functions and large
config blocks. I really hate config blocks and when reading library source code, it was hard to follow.
I chose the name chart topper to represent the goal of creating an easy to understand, thin wrapper library
that would be really easy to use in a project.

The goal of chart topper is three-fold:
1. Break the charting down into easy steps where people who are new to d3 (like myself) can get
a nice feel for what is going on during the drawing of a chart.

2. Allow the library API to be a fluid api - I didn't want another charting library where you
pass in a large config block and the library parses it for you.

3. Allow for others to easily add on to the library and discover the power of d3 as I did while
building the first simple API's for this library. I still have a long way to go to learn everything,
but my goal is to help people, like myself, learn how to use d3 to do visualizations instead of
leaning on someone else's charting library!

My goals for the future are to move this from an Angular JS module into a pure vanilla javascript library
that has framework wrappers around it.
