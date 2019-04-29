var LivingRoom = new Kiwi.State('LivingRoom');
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
LivingRoom.create = function () {
    this.hiddenObjects = [];
    this.gameComplete = false;
    //add bg
    this.bg = new Kiwi.GameObjects.Sprite(this, LivingRoom.textures.livingRoomBG, 0, 0);
    this.addChild(this.bg);

    //add hidden objects and their corresponding UI preview images
    this.addHiddenObject('dators', 333, 338, 220, 690);
    this.addHiddenObject('detektors', 180, 85, 80, 660);
    this.addHiddenObject('kakis', 470, 345,80, 720);
    this.addHiddenObject('pagarinatajs', 710, 430, 280, 660);
    this.addHiddenObject('gludeklis', 760, 455, 80, 690);
    this.addHiddenObject('panna', 40, 285, 330, 720);
    this.addHiddenObject('serkocini', 960, 570, 330, 690);
    this.addHiddenObject('spuldzite', 255, 220, 180, 720);
    this.addHiddenObject('svece', 920, 460, 450, 660);
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
LivingRoom.addHiddenObject = function (objName, objX, objY, hiddenObjX, hiddenObjY) {
    //Object hidden on the stage

    console.log('create object: ',objName);
    this['hiddenObject' + objName] = new Kiwi.GameObjects.Sprite(this, LivingRoom.textures['hidden_' + objName], objX, objY);
    this['hiddenObject' + objName].objName = objName;
    this['hiddenObject' + objName].input.onDown.add(this.clickObject, this);
    this.addChild(this['hiddenObject' + objName]);

    //UI preview image
    this['UIButton' + objName] = new Kiwi.GameObjects.Sprite(this, LivingRoom.textures['UI_' + objName], hiddenObjX, hiddenObjY);
    this.addChild(this['UIButton' + objName]);

    this.hiddenObjects.push(this['hiddenObject' + objName]);
}

/**
 * This method removes located object from the background image and UI
 * @method clickObject
 * @public
 * @param hiddenObj{Sprite}
 */
LivingRoom.clickObject = function (hiddenObj) {
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
        game.states.switchState("Street");
    }
}