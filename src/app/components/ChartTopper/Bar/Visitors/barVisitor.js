/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular.module("ChartTopper")
        .service("barVisitor", barVisitor);

        function barVisitor(animateBarVisitor, nonAnimateBarVisitor){

            return{
                visit: visit
            };

            function calculateYForText(element, d){
                var INSIDE_LABEL_OFFSET = 25;
                var OUTSIDE_LABEL_OFFSET = -5;

                switch (element.dataTextPosition){
                    case('middle'):
                        //This formula adds the y value start of the bar + half the height of the bar
                        return element.y(d.data) + (element.height - element.y(d.data)) / 2;
                        break;
                    case('top'):
                        return element.y(d.data) + INSIDE_LABEL_OFFSET;
                        break;

                    //Default to outside label
                    default:
                        return element.y(d.data) + OUTSIDE_LABEL_OFFSET;
                }
            }

            function visit(element){
                element.calculateYForText = calculateYForText;
                if(element.animation === 'ghost-writer'){
                    animateBarVisitor.visit(element);
                    return;
                }

                nonAnimateBarVisitor.visit(element);
            }
        }
})();