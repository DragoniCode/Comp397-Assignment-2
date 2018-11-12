//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
module objects {
    export class Player extends objects.GameObject {
        
        // private instance variables

        // public properties
        
        // constructors
        constructor() {
            super("player",90);

            this.Start();
        }


        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.x = 50;
        }

        public Update():void {
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
            if(this.y > 480 - this.HalfHeight) {
                this.y = 480 - this.HalfHeight;
            }

            // check the left boundary
            if(this.y < this.HalfHeight) {
                this.y = this.HalfHeight;
            }

        }

        public Reset(): void {
        }
        
        public Destroy(): void {
        }


    }
}