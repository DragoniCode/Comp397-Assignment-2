//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018

module objects {
    export class Meteorite extends objects.GameObject {
        private _verticalSpeed:number;
        private _horizontalSpeed:number;  


        constructor() {
            super("meteorite", 90);

            this.Start();
        }

        // private methods
        private _move() {
            // this.y += this._verticalSpeed;
            this.x -= this._horizontalSpeed;
            this._updatePosition();
        }

        private _checkBounds():void {
            // if(this.y > config.Constants.canvasHeight + this.Height){
            //     this.Reset();
            // }
            if(this.x < 0 - this.Width) {
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
            // this._verticalSpeed = config.Constants.verticalPlaySpeed;
            // this.y = -this.Height;
            // this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            // this.IsColliding = false;

            this._horizontalSpeed = 5;
            this.x = 640 + this.Height;
            this.y = Math.floor((Math.random() * (480 - this.Width)) + this.HalfWidth);
            this.IsColliding = false;
        }
        public Destroy(): void {
            
        }


    }
}