var Mall = new Kiwi.State('Mall');
//CREATING THE BLUE PRINT
/**
 *A Kiwi Blueprint of a Hidden Object Game
 *
 * @class playState
 * @extends State
 * @namespace Kiwi.BluePrints.HiddenObject
 * @constructor
 */

/**
 * This create method is executed when Kiwi Game reaches the boot stage of the game loop.
 * @method create
 * @public
 */
Mall.create = function () {
    this.hiddenObjects = [];
    this.gameComplete = false;
    //add bg
    this.bg = new Kiwi.GameObjects.Sprite(this, Mall.textures.mallBG, 0, 0);
    this.addChild(this.bg);

    //add hidden objects and their corresponding UI preview images
    this.addHiddenObject('apsargs', 621, 342, 90, 640);
    this.addHiddenObject('izeja', 960, 235, 360, 680);
    this.addHiddenObject('krans', 150, 335, 90, 680);
    this.addHiddenObject('lifts', 10, 230, 240, 640);
    this.addHiddenObject('virziens', 550, 320, 143, 720);
    this.addHiddenObject('plans', 845, 370, 350, 640);
}

/**
 * This method adds a new object
 * @method addHiddenObject
 * @public
 * @param objName{String}
 * @param objX{Number}
 * @param objY{Number}
 * @param hiddenObjX{Number}
 * @param hiddenObjY{Number}
 */
Mall.addHiddenObject = function (objName, objX, objY, hiddenObjX, hiddenObjY) {
    //Object hidden on the stage

    console.log('create object: ',objName);
    this['hiddenObject' + objName] = new Kiwi.GameObjects.Sprite(this, Mall.textures['Hidden_' + objName], objX, objY);
    this['hiddenObject' + objName].objName = objName;
    this['hiddenObject' + objName].input.onDown.add(this.clickObject, this);
    this.addChild(this['hiddenObject' + objName]);

    //UI preview image
    this['UIButton' + objName] = new Kiwi.GameObjects.Sprite(this, Mall.textures['UI_' + objName], hiddenObjX, hiddenObjY);
    this.addChild(this['UIButton' + objName]);

    this.hiddenObjects.push(this['hiddenObject' + objName]);
}

/**
 * This method scales a hidden object
 * @method doHint
 * @public
 */
Mall.doHint = function () {
    //if hint is already active, deselect current hint instead
    if (!this.gameComplete) {
        for (var i in this.hiddenObjects) {
            this.hiddenObjects[i].transform.scaleX = 1;
            this.hiddenObjects[i].transform.scaleY = 1;
        }

        //get hidden ones, randomize selection and scale.
        var rand = Math.floor(Math.random() * this.hiddenObjects.length);
        if (this.hiddenObjects[rand].visible) {
            this.hiddenObjects[rand].transform.scaleX = 1.5;
            this.hiddenObjects[rand].transform.scaleY = 1.5;
        } else {
            //try aain if the selected one's been found
            this.doHint();
        }
    }
}

Mall.goBack = function () {
    game.states.switchState("IntroState");
}

/**
 * This method removes located object from the background image and UI
 * @method clickObject
 * @public
 * @param hiddenObj{Sprite}
 */
Mall.clickObject = function (hiddenObj) {
    //remove object and associated UI btn
    hiddenObj.visible = false;
    this['UIButton' + hiddenObj.objName].visible = false;

    //check completion
    var allFound = true;
    for (var i in this.hiddenObjects) {
        if (this.hiddenObjects[i].visible) {
            allFound = false;
        }
    }

    //completion
    if (allFound) {
        this.gameComplete = true;
        console.log('complete!');
        game.states.switchState("IntroState");
    }
}