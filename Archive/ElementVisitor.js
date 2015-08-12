/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular
        .module('chartTopperDemo')
        .service('elementVisitor', elementVisitorWrapper);

        function elementVisitorWrapper(){

            return{
                createVisitor: function(data, dataFunction, svg){
                    return new ElementVisitor(data, dataFunction, svg);
                }
            };

            function ElementVisitor(data, dataFunction, svg){

                ElementVisitor.prototype.enterAndAppend = function(element){
                    return svg.selectAll(element)
                        .data(dataFunction(data))
                        .enter()
                        .append(element);
                }
            }
        }

})();