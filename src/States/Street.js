var Street = new Kiwi.State('Street');
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
Street.create = function () {
    this.hiddenObjects = [];
    this.gameComplete = false;
    //add bg
    this.bg = new Kiwi.GameObjects.Sprite(this, Street.textures.StreetBG, 0, 0);
    this.addChild(this.bg);

    //add hidden objects and their corresponding UI preview images
    this.addHiddenObject('hidrants', 880, 540, 90, 150);
    this.addHiddenObject('kapnes', 0, 430, 90, 110);
    this.addHiddenObject('masina', 0, 474, 90, 70);
    this.addHiddenObject('piebrauktuve', 758, 410, 90, 32);
    this.addHiddenObject('ugunsdzesejs', 137, 530, 580, 72);
    this.addHiddenObject('vieta', 75, 420, 350, 70);
    this.addHiddenObject('zime', 688, 515, 350, 110);
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
Street.addHiddenObject = function (objName, objX, objY, hiddenObjX, hiddenObjY) {
    //Object hidden on the stage

    console.log('create object: ',objName);
    this['hiddenObject' + objName] = new Kiwi.GameObjects.Sprite(this, Street.textures['Hidden_' + objName], objX, objY);
    this['hiddenObject' + objName].objName = objName;
    this['hiddenObject' + objName].input.onDown.add(this.clickObject, this);
    this.addChild(this['hiddenObject' + objName]);

    //UI preview image
    this['UIButton' + objName] = new Kiwi.GameObjects.Sprite(this, Street.textures['UI_' + objName], hiddenObjX, hiddenObjY);
    this.addChild(this['UIButton' + objName]);

    this.hiddenObjects.push(this['hiddenObject' + objName]);
}

/**
 * This method removes located object from the background image and UI
 * @method clickObject
 * @public
 * @param hiddenObj{Sprite}
 */
Street.clickObject = function (hiddenObj) {
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
        game.states.switchState("Mall");
    }
}