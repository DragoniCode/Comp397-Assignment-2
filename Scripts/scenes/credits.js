var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
var scenes;
(function (scenes) {
    var Credits = /** @class */ (function (_super) {
        __extends(Credits, _super);
        // public properties
        // constructors
        function Credits() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Credits.prototype.Main = function () {
            // adds background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);
            this._background2 = new objects.Background();
            this._background2.Reset();
            this.addChild(this._background2);
            //adds author label to the scene
            this.addChild(this._authorLabel);
            // event listeners
        };
        Credits.prototype.Start = function () {
            // Instantiates objects
            this._authorLabel = new objects.Label("Created by : Gabriele Hunte", "28px", "Consolas", "#FFFF00", 220, 120, true);
            this.Main();
        };
        Credits.prototype.Update = function () {
            // updates background 1
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background2.Update();
            }
            // updates background 2
            if (this._background2.x >= 1280 || this._background2.x <= 640) {
                this._background.Update();
            }
        };
        Credits.prototype.Reset = function () {
        };
        Credits.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return Credits;
    }(objects.Scene));
    scenes.Credits = Credits;
})(scenes || (scenes = {}));
//# sourceMappingURL=credits.js.map