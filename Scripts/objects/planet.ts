//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
module objects {
    export class Planet extends objects.GameObject {
        // private instance variables

        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // constructors

        constructor() {
            super("planet");

            this.Start();
        }

        // private methods
        private _move() {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            if(this.y > config.Constants.canvasHeight + this.Height){
                this.Reset();
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();

        }
        public Reset(): void {
            this._verticalSpeed = Math.floor((Math.random()*2)+2); // speed from 5 to 10
            this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.IsColliding = false;

        }
        public Destroy(): void {
            
        }


    }
}