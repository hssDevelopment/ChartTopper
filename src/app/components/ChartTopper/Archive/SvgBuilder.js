/**
 * Created by hensleym on 7/25/15.
 */
angular
    .module('chartTopperDemo')
    .service('svgBuilder', svgBuilder);

    function svgBuilder(){

        var svg = null,
            elementTag = null;

        return{
            build: build,
            getSvg: getSvg,
            getChartId: getChartId
        };

        /**
         * Function to create the outer chart element
         * with a given height and width
         * @param element
         * @param height
         * @param width
         * @returns A D3 Svg element
         */

        function build(element, height, width){
            elementTag = element;
            svg = d3.select(elementTag)
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height);

            return svg;
        }

        /**
         * Returns the D3 svg object -> Can return
         * null if nothing is built yet
         * @returns D3 Svg object of the current chart
         */
        function getSvg(){
            return svg;
        }

        /**
         * Returns the Selector used to
         * create the svg (class/id)
         * @returns {*}
         */
        function getChartId(){
            return elementTag;
        }
    }