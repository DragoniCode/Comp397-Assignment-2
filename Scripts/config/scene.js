//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
var config;
(function (config) {
    var Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["PLAY"] = 1] = "PLAY";
        Scene[Scene["INSTRUCTIONS"] = 2] = "INSTRUCTIONS";
        Scene[Scene["OVER"] = 3] = "OVER";
        Scene[Scene["CREDITS"] = 4] = "CREDITS";
        Scene[Scene["SCENE_COUNT"] = 5] = "SCENE_COUNT";
    })(Scene = config.Scene || (config.Scene = {}));
})(config || (config = {}));
//# sourceMappingURL=scene.js.map