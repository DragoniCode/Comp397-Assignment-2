//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
module objects {
    export class Boss extends objects.GameObject {
        // private instance variables

        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // constructors

        constructor() {
            super("boss",90);

            this.Start();
        }

        // private methods
        private _move() {           
            // this.x += this._horizontalSpeed;
            this.y += this._verticalSpeed;
            
        }

        private _moveRight(){
            this.x -= this._horizontalSpeed;
        }

        private _checkBounds():void {
            // if(this.y > 480 + this.Height){
            //     this.Reset();
            // }
            if(this.x < 0 - this.Width || this.y > 480 - this.HalfWidth || this.y < this.HalfWidth) {
                this.Reset();
            }
        }

        // public methods
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = 640 - this.HalfHeight;
            this.Reset();

        }
        public Update(): void {
            this._move();
            this._checkBounds();
            // if(this.x > 640 - this.HalfWidth){
            //     this.x = 640 - this.HalfWidth;
            // }

            // if(this.x < this.HalfWidth){
            //     this.x = this.HalfWidth;
            // }

        }
        public Reset(): void {
            // this._verticalSpeed = Math.floor((Math.random()*2)+2); // speed from 5 to 10
            // this._horizontalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            // this.y = 10;
            // this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this._verticalSpeed = Math.floor((Math.random()*4)-2); // speed from -2 to 2
            // this.x = 640 - this.HalfHeight;
            this.y = Math.floor((Math.random() * (480 - this.Height)) + this. HalfHeight);
            this.IsColliding = false;

        }
        public Destroy(): void {
            
        }


    }
}