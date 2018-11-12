//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
var config;
(function (config) {
    // Abstract class used to hold constant variables
    var Constants = /** @class */ (function () {
        function Constants() {
        }
        Constants.verticalPlaySpeed = 5;
        Constants.canvasHeight = 480;
        Constants.canvasWidth = 640;
        return Constants;
    }());
    config.Constants = Constants;
})(config || (config = {}));
//# sourceMappingURL=constants.js.map