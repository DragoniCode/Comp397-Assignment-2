//Comp397 - Assignment 2, Author: Gabriele Hunte - 300833315 , Last Modifed by Moi, Date Last Modified - 10/11/2018
(function(){
    // game variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let assetManager:createjs.LoadQueue;

    // State Objects
    let currentScene:objects.Scene;
    let currentState:config.Scene;
    
    
    // Game objects
    let scoreBoard:managers.ScoreBoard;

    // Utility variables
    let imagePath:string = "./Assets/images/";
    let audioPath:string = "./Assets/audio/";

    let assetManifest = [
        {id: "startButton", src: imagePath + "startButton.png"},
        {id: "exitButton", src: imagePath + "exitButton.png"},
        {id: "instructionsButton", src: imagePath + "instructionsButton.png"},
        {id: "restartButton", src: imagePath + "restartButton.png"},
        {id: "player", src: imagePath + "player.png"},
        {id: "planet", src: imagePath + "planet.png"},
        {id: "meteorite", src: imagePath + "meteorite.png"},
        {id: "enemies", src: imagePath + "enemies.png" },
        {id: "boss", src: imagePath + "boss.png" },
        {id: "spaceBackground", src: imagePath + "spaceBackground.jpg"},
        {id: "startBackground", src: imagePath + "startBackground.jpg"},
        {id: "engineSound", src: audioPath + "engine.ogg"},
        {id: "thunderSound", src: audioPath + "thunder.ogg"},
        {id: "explosion01", src: audioPath + "explosion14.m4a"},
        {id: "explosion02", src: audioPath + "explosion19.m4a"},
        {id: "spaceship", src: audioPath + "spaceship.m4a"},
        {id: "yaySound", src: audioPath + "yay.ogg"}
    ];


    function Init():void {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManager = assetManager;// creates a reference to the global assetManager
        assetManager.installPlugin(createjs.Sound) // enable sound preloading
        assetManager.loadManifest(assetManifest); // preloads all assets in the assetManifest
        assetManager.on("complete", Start); // Calls start when assets are finished loading
    }

    function Start():void {
        console.log(`%c Game Started...`,"color: blue; font-size: 20px;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        
        //setup global scoreboard and UI
        scoreBoard = new managers.ScoreBoard();
        managers.Game.scoreBoard = scoreBoard;

        //Setup initial scene
        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        Main();
    }

    // this is the main game loop
    function Update():void {

        currentScene.Update();
        if(currentState != managers.Game.currentState){
            currentState = managers.Game.currentState;
            Main();
        }

        stage.update();   
    }

    function Main():void {

        // clean up current scene
        if(currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
            
        switch(currentState) {
            case config.Scene.START:
            currentScene = new scenes.Start();
            break;
            case config.Scene.PLAY:
            currentScene = new scenes.Play();
            break;
            case config.Scene.INSTRUCTIONS:
             currentScene = new scenes.Instructions();
            break;
            case config.Scene.OVER:
             currentScene = new scenes.Over();
            break;
            case config.Scene.CREDITS:
             currentScene = new scenes.Credits();
            break;
        }

        stage.addChild(currentScene);

    }


    window.addEventListener("load", Init);
})();