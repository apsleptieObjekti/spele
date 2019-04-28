var School = new Kiwi.State('School');
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
School.create = function () {
    this.hiddenObjects = [];
    this.gameComplete = false;
    //add bg
    this.bg = new Kiwi.GameObjects.Sprite(this, School.textures.schoolBG, 0, 0);
    this.addChild(this.bg);

    //add hidden objects and their corresponding UI preview images
    this.addHiddenObject('plakats', 315, 325, 76, 25);
    this.addHiddenObject('masina_school', 270, 360, 76, 65);
    this.addHiddenObject('aparats', 858, 480, 460, 65);
    this.addHiddenObject('zime_school', 905, 485, 76, 105);
    this.addHiddenObject('skolotaja', 400, 320, 420, 105);
    this.addHiddenObject('evakuacija', 970, 230, 76, 145);
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
School.addHiddenObject = function (objName, objX, objY, hiddenObjX, hiddenObjY) {
    console.log('create object: ',objName);
    this['hiddenObject' + objName] = new Kiwi.GameObjects.Sprite(this, School.textures['Hidden_' + objName], objX, objY);
    this['hiddenObject' + objName].objName = objName;
    this['hiddenObject' + objName].input.onDown.add(this.clickObject, this);
    this.addChild(this['hiddenObject' + objName]);

    //UI preview image
    this['UIButton' + objName] = new Kiwi.GameObjects.Sprite(this, School.textures['UI_' + objName], hiddenObjX, hiddenObjY);
    this.addChild(this['UIButton' + objName]);

    this.hiddenObjects.push(this['hiddenObject' + objName]);
}

/**
 * This method removes located object from the background image and UI
 * @method clickObject
 * @public
 * @param hiddenObj{Sprite}
 */
School.clickObject = function (hiddenObj) {
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
        game.states.switchState("LivingRoom");
    }
}