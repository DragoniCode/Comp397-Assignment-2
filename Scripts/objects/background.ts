//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
module objects{
    export class Background extends objects.GameObject{
        
        // private instance variables
        private _speed:number;

        // public properties

        // constructor
        constructor() {
            super("spaceBackground",90);
            this.Start();           
        }

        // private methods

        private _checkBounds():void {
            // if(this.y >= config.Constants.canvasHeight){
            //     this.Reset();
            // }
            if(this.x <= 0) {
                this.Reset();
            }
        }

        private _move():void {
            this.x -= this._speed;
        }

        // public methods

        public Start(): void {
            // this.y = -this.Height + config.Constants.canvasHeight;
            // this.x = 1280;
            this.x = 1280;
            this._speed = 5;
        }
        public Update(): void {
            this._move();      
            this._checkBounds();
        }
        public Reset(): void {
            // this.y = -this.Height;
            this.x = 1920;
            // this.x = this.Height + (this.Height - this.HalfHeight);
            // this.x = this.HalfHeight;
        }
        public Destroy(): void {

        }
    }
}