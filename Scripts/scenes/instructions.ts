//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
module scenes{
    export class Instructions extends objects.Scene{
        // private instance variables
        
        private _background: objects.Background;
        private _background2: objects.Background;
        private _welcomeLabel:objects.Label;
        private _exitButton: objects.Button;

        private _winLabel: objects.Label;
        private _winText: objects.Label;
        private _loseLabel: objects.Label;
        private _loseText: objects.Label;

        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Main(): void {
            
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
            this._exitButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.START;
            })
        }        
        public Start(): void {
            // Instantiates objects
            this._winLabel = new objects.Label("For the Win:", "48px", "Consolas", "#FFFF00", 320, 40, true);
            this._winText = new objects.Label("Shoot the enemies or collect Metorites to score!", "22px", "Consolas", "#FFFFFF", 320, 120, true);
            this._loseLabel = new objects.Label("Don't Lose:", "48px", "Consolas", "#FFFF00", 320, 200, true);
            this._loseText = new objects.Label("Dodge the incoming enemies!", "22px", "Consolas", "#FFFFFF", 320, 280, true);

            this._exitButton = new objects.Button("exitButton", 520, 420, true);

            this.Main();
        }
        public Update(): void {
            // updates background 1
            if (this._background.x >= 1280 || this._background.x <= 640) {
            this._background2.Update();
            }

            // updates background 2
            if (this._background2.x >= 1280 || this._background2.x <= 640) {
                this._background.Update();
            }

        }
        public Reset(): void {
            
        }
        public Destroy(): void {
            this.removeAllChildren();
        }


    }
}