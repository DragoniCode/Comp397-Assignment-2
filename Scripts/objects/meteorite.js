//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
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
var objects;
(function (objects) {
    var Meteorite = /** @class */ (function (_super) {
        __extends(Meteorite, _super);
        function Meteorite() {
            var _this = _super.call(this, "meteorite", 90) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Meteorite.prototype._move = function () {
            // this.y += this._verticalSpeed;
            this.x -= this._horizontalSpeed;
            this._updatePosition();
        };
        Meteorite.prototype._checkBounds = function () {
            // if(this.y > config.Constants.canvasHeight + this.Height){
            //     this.Reset();
            // }
            if (this.x < 0 - this.Width) {
                this.Reset();
            }
        };
        // public methods
        Meteorite.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        };
        Meteorite.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Meteorite.prototype.Reset = function () {
            // this._verticalSpeed = config.Constants.verticalPlaySpeed;
            // this.y = -this.Height;
            // this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            // this.IsColliding = false;
            this._horizontalSpeed = 5;
            this.x = 640 + this.Height;
            this.y = Math.floor((Math.random() * (480 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        };
        Meteorite.prototype.Destroy = function () {
        };
        return Meteorite;
    }(objects.GameObject));
    objects.Meteorite = Meteorite;
})(objects || (objects = {}));
//# sourceMappingURL=meteorite.js.map