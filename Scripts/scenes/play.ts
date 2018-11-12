//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018

//TODO: clean up this code, avoid repetition and reduce code amount
module scenes {
    export class Play extends objects.Scene {
        // private instance variables

        private _player: objects.Player;
        private _meteorite: objects.Meteorite;

        private _planetNum: number;
        private _enemiesNum: number;
        private _planets: objects.Planet[];
        private _enemies: objects.Enemies[];
        private _boss: objects.Boss;

        private _background: objects.Background;
        private _background2: objects.Background;

        private _bgm: createjs.AbstractSoundInstance; //instantiates var for the background music
        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Start(): void {

            this._planetNum = 1;
            this._enemiesNum = 4;

            this._meteorite = new objects.Meteorite();
            this._player = new objects.Player();
            this._boss = new objects.Boss();
            // must do this to instantiate the array
            this._planets = new Array<objects.Planet>();
            this._enemies = new Array<objects.Enemies>();
            // adds enemies to the array
            for (let count = 0; count < this._enemiesNum; count++) {
                this._enemies[count] = new objects.Enemies();
            }

             // play background music when the level starts
             this._bgm = createjs.Sound.play("spaceship");
             this._bgm.volume = 0.1;
             this._bgm.loop = -1; // loop forever

            this.Main();
        }
        public Update(): void {

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
            this._planets.forEach(planet => {
                planet.Update();
                managers.Collision.Check(this._player, planet);
            });
            // updates each enemy in array
            this._enemies.forEach(enemy => {
                enemy.Update();
                managers.Collision.Check(this._player, enemy);
            });

               
        }
        public Reset(): void {

        }
        public Destroy(): void {
            this.removeAllChildren();
            this._bgm.stop();

        }
        

        public Main(): void {

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
            this._enemies.forEach(enemies => {
                this.addChild(enemies);
              });

            this.addChild(this._boss);

            //add Scoreboard UI to the Scene
            managers.Game.scoreBoard.AddGameUI(this);

        }

    }
}