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
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // public properties
        // constructors
        function Instructions() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instructions.prototype.Main = function () {
            // adds background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);
            this._background2 = new objects.Background();
            this._background2.Reset();
            this.addChild(this._background2);
            // adds exit button to the scene
            this.addChild(this._exitButton);
            //adds labels to the scene
            this.addChild(this._winLabel);
            this.addChild(this._winText);
            this.addChild(this._loseLabel);
            this.addChild(this._loseText);
            // event listeners
            // starts the play scene
            this._exitButton.on("click", function () {
                managers.Game.currentState = config.Scene.START;
            });
        };
        Instructions.prototype.Start = function () {
            // Instantiates objects
            this._winLabel = new objects.Label("For the Win:", "48px", "Consolas", "#FFFF00", 320, 40, true);
            this._winText = new objects.Label("Shoot the enemies or collect Metorites to score!", "22px", "Consolas", "#FFFFFF", 320, 120, true);
            this._loseLabel = new objects.Label("Don't Lose:", "48px", "Consolas", "#FFFF00", 320, 200, true);
            this._loseText = new objects.Label("Dodge the incoming enemies!", "22px", "Consolas", "#FFFFFF", 320, 280, true);
            this._exitButton = new objects.Button("exitButton", 520, 420, true);
            this.Main();
        };
        Instructions.prototype.Update = function () {
            // updates background 1
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background2.Update();
            }
            // updates background 2
            if (this._background2.x >= 1280 || this._background2.x <= 640) {
                this._background.Update();
            }
        };
        Instructions.prototype.Reset = function () {
        };
        Instructions.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map