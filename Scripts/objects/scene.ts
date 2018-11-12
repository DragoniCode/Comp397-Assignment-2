//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
module objects{
    export abstract class Scene extends createjs.Container{
        // Private instance variables

        // Public properties

        // Constructor

        constructor() {
            super();
        }
        // Private methods

        // Public methods
        public abstract Main():void;

        public abstract Start():void;

        public abstract Update():void;

        public abstract Reset():void;

        public abstract Destroy():void;
    }
}