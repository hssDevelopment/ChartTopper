# ChartTopper.js
An Angular JS Module that allows users to draw common charts (Donut, Line, and Bar), powered
by D3.js.

Copyright (c) 2015 Michael Hensley with the MIT License
See the LICENSE file for distributed licensing terms.

To Build the Demo Page (Including Chart Topper)
npm install<br>
bower install<br>
gulp serve<br>

Technologies used for this project and demo app:
angularJS, Bootstrap, yeoman, gulp, bower, node, npm, D3, and Microsoft Azure (for the hosting)

This will start the page on port 3000. It can also be viewed here:
<a>chart-topper.azurewebsites.net</a>

Why another D3 chart wrapper library?
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
