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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // private instance variables
        // public properties
        // constructors
        function Player() {
            var _this = _super.call(this, "player", 90) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Player.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 50;
        };
        Player.prototype.Update = function () {
            // this.x = managers.Game.stage.mouseX;
            this.y = managers.Game.stage.mouseY;
            this._updatePosition();
            // if(this.x > config.Constants.canvasWidth - this.HalfWidth){
            //     this.x = config.Constants.canvasWidth - this.HalfWidth;
            // }
            // if(this.x < this.HalfWidth){
            //     this.x = this.HalfWidth;
            // }
            // checks the right boundary
            if (this.y > 480 - this.HalfHeight) {
                this.y = 480 - this.HalfHeight;
            }
            // check the left boundary
            if (this.y < this.HalfHeight) {
                this.y = this.HalfHeight;
            }
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Destroy = function () {
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map