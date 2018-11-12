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
var objects;
(function (objects) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // public properties
        // constructor
        function Background() {
            var _this = _super.call(this, "spaceBackground", 90) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background.prototype._checkBounds = function () {
            // if(this.y >= config.Constants.canvasHeight){
            //     this.Reset();
            // }
            if (this.x <= 0) {
                this.Reset();
            }
        };
        Background.prototype._move = function () {
            this.x -= this._speed;
        };
        // public methods
        Background.prototype.Start = function () {
            // this.y = -this.Height + config.Constants.canvasHeight;
            // this.x = 1280;
            this.x = 1280;
            this._speed = 5;
        };
        Background.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Background.prototype.Reset = function () {
            // this.y = -this.Height;
            this.x = 1920;
            // this.x = this.Height + (this.Height - this.HalfHeight);
            // this.x = this.HalfHeight;
        };
        Background.prototype.Destroy = function () {
        };
        return Background;
    }(objects.GameObject));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map