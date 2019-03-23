var Tavern = new Kiwi.State('Tavern');
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
Tavern.create = function () {
    this.hiddenObjects = [];
    this.gameComplete = false;
    //add bg
    this.bg = new Kiwi.GameObjects.Sprite(this, Tavern.textures.tavernBG, 0, 0);
    this.addChild(this.bg);

    for (var i = 0; i < 6; i++) {
        var b = new Kiwi.GameObjects.Sprite(this, Tavern.textures.button, 65 + 150 * i, 626);
        this.addChild(b);
        if (i == 0) {
            b.input.onDown.add(this.goBack, this);
            var arrow = new Kiwi.GameObjects.Sprite(this, Tavern.textures.arrow, 105, 656);
            this.addChild(arrow);
        }
    }

    //add hidden objects and their corresponding UI preview images
    this.addHiddenObject('apple', 921-13, 211-19);
    this.addHiddenObject('candelabra', 610-67, 322-75);
    this.addHiddenObject('envelope', 505-29, 392-16);
    this.addHiddenObject('teddy', 16-16, 478-15);
    this.addHiddenObject('wheel', 251-26, 211-83);
}

/**
 * This method adds a new object
 * @method addHiddenObject
 * @public
 * @param objName{String}
 * @param objX{Number}
 * @param objY{Number}
 */
Tavern.addHiddenObject = function (objName, objX, objY) {
    //Object hidden on the stage

    console.log('create object: ',objName);
    this['hiddenObject' + objName] = new Kiwi.GameObjects.Sprite(this, Tavern.textures['hidden_' + objName], objX, objY);
    this['hiddenObject' + objName].objName = objName;
    this['hiddenObject' + objName].input.onDown.add(this.clickObject, this);
    this.addChild(this['hiddenObject' + objName]);

    //UI preview image
    this['UIButton' + objName] = new Kiwi.GameObjects.Sprite(this, Tavern.textures['UI_' + objName], 150 * this.hiddenObjects.length + 245, 646);
    this.addChild(this['UIButton' + objName]);

    this.hiddenObjects.push(this['hiddenObject' + objName]);
}

/**
 * This method scales a hidden object
 * @method doHint
 * @public
 */
Tavern.doHint = function () {
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

Tavern.goBack = function () {
    game.states.switchState("IntroState");
}

/**
 * This method removes located object from the background image and UI
 * @method clickObject
 * @public
 * @param hiddenObj{Sprite}
 */
Tavern.clickObject = function (hiddenObj) {
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
    }
}