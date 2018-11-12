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
//TODO: clean up this code, avoid repetition and reduce code amount
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // public properties
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Play.prototype.Start = function () {
            this._planetNum = 1;
            this._enemiesNum = 4;
            this._meteorite = new objects.Meteorite();
            this._player = new objects.Player();
            this._boss = new objects.Boss();
            // must do this to instantiate the array
            this._planets = new Array();
            this._enemies = new Array();
            // adds enemies to the array
            for (var count = 0; count < this._enemiesNum; count++) {
                this._enemies[count] = new objects.Enemies();
            }
            // play background music when the level starts
            this._bgm = createjs.Sound.play("spaceship");
            this._bgm.volume = 0.1;
            this._bgm.loop = -1; // loop forever
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._player.Update();
            // updates background 1
            if (this._background.x >= 1280 || this._background.x <= 640) {
                this._background2.Update();
            }
            // updates background 2
            if (this._background2.x >= 1280 || this._background2.x <= 640) {
                this._background.Update();
            }
            this._meteorite.Update();
            managers.Collision.Check(this._player, this._meteorite);
            this._boss.Update();
            managers.Collision.Check(this._player, this._boss);
            // updates each planet in array
            this._planets.forEach(function (planet) {
                planet.Update();
                managers.Collision.Check(_this._player, planet);
            });
            // updates each enemy in array
            this._enemies.forEach(function (enemy) {
                enemy.Update();
                managers.Collision.Check(_this._player, enemy);
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
            this._bgm.stop();
        };
        Play.prototype.Main = function () {
            var _this = this;
            // adds background to the scene
            this._background = new objects.Background();
            this.addChild(this._background);
            this._background2 = new objects.Background();
            this._background2.Reset();
            this.addChild(this._background2);
            // adds meteorite to the scene
            this.addChild(this._meteorite);
            // adds player to the stage
            this.addChild(this._player);
            //adds enemies to the scene
            this._enemies.forEach(function (enemies) {
                _this.addChild(enemies);
            });
            this.addChild(this._boss);
            //add Scoreboard UI to the Scene
            managers.Game.scoreBoard.AddGameUI(this);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map