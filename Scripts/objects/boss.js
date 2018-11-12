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
    var Boss = /** @class */ (function (_super) {
        __extends(Boss, _super);
        // constructors
        function Boss() {
            var _this = _super.call(this, "boss", 90) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Boss.prototype._move = function () {
            // this.x += this._horizontalSpeed;
            this.y += this._verticalSpeed;
        };
        Boss.prototype._moveRight = function () {
            this.x -= this._horizontalSpeed;
        };
        Boss.prototype._checkBounds = function () {
            // if(this.y > 480 + this.Height){
            //     this.Reset();
            // }
            if (this.x < 0 - this.Width || this.y > 480 - this.HalfWidth || this.y < this.HalfWidth) {
                this.Reset();
            }
        };
        // public methods
        Boss.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 640 - this.HalfHeight;
            this.Reset();
        };
        Boss.prototype.Update = function () {
            this._move();
            this._checkBounds();
            // if(this.x > 640 - this.HalfWidth){
            //     this.x = 640 - this.HalfWidth;
            // }
            // if(this.x < this.HalfWidth){
            //     this.x = this.HalfWidth;
            // }
        };
        Boss.prototype.Reset = function () {
            // this._verticalSpeed = Math.floor((Math.random()*2)+2); // speed from 5 to 10
            // this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            // this.y = 10;
            // this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this._verticalSpeed = Math.floor((Math.random() * 4) - 2); // speed from -2 to 2
            // this.x = 640 - this.HalfHeight;
            this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
            this.IsColliding = false;
        };
        Boss.prototype.Destroy = function () {
        };
        return Boss;
    }(objects.GameObject));
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map