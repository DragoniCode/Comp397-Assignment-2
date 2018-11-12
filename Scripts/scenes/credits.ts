//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
module scenes{
    export class Credits extends objects.Scene{
        // private instance variables
        
        private _background: objects.Background;
        private _background2: objects.Background;
        private _authorLabel:objects.Label;

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
            
            //adds author label to the scene
            this.addChild(this._authorLabel);


            // event listeners


        }        
        public Start(): void {
            // Instantiates objects
           this._authorLabel = new objects.Label("Created by : Gabriele Hunte", "28px", "Consolas", "#FFFF00", 220, 120, true);
           

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