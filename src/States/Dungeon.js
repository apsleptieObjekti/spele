var Dungeon = new Kiwi.State('Dungeon');
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
Dungeon.create = function () {
    this.hiddenObjects = [];
    this.gameComplete = false;
    console.log('create dungeon');
    //add bg
    this.bg = new Kiwi.GameObjects.Sprite(this, Dungeon.textures.dungeonBG, 0, 0);
    this.addChild(this.bg);

    for (var i = 0; i < 6; i++) {
        var b = new Kiwi.GameObjects.Sprite(this, Dungeon.textures.button, 65 + 150*i, 626);
        this.addChild(b);
        if (i == 0) {
            // b.input.onDown.add(this.goBack, this);
            var arrow = new Kiwi.GameObjects.Sprite(this, Dungeon.textures.arrow, 105, 656);
            this.addChild(arrow);
            console.log('add arrow?');
        }
    }

    //add hidden objects and their corresponding UI preview images
    this.addHiddenObject('candle', 762, 218);
    this.addHiddenObject('coin', 359, 478);
    this.addHiddenObject('mug', 414, 447);
    this.addHiddenObject('skull', 563, 381);
    this.addHiddenObject('telescope', 901, 61);
    console.log('create dungeon');
}

/**
 * This method adds a new object
 * @method addHiddenObject
 * @public
 * @param objName{String}
 * @param objX{Number}
 * @param objY{Number}
 */
Dungeon.addHiddenObject = function (objName, objX, objY) {
    //Object hidden on the stage

    console.log('create object: ',objName);
    this['hiddenObject' + objName] = new Kiwi.GameObjects.Sprite(this, Dungeon.textures['hidden_' + objName], objX, objY);
    this['hiddenObject' + objName].objName = objName;
    this['hiddenObject' + objName].input.onDown.add(this.clickObject, this);
    this.addChild(this['hiddenObject' + objName]);

    //UI preview image
    this['UIButton' + objName] = new Kiwi.GameObjects.Sprite(this, Dungeon.textures['UI_' + objName], 150 * this.hiddenObjects.length + 245, 646);
    this.addChild(this['UIButton' + objName]);

    this.hiddenObjects.push(this['hiddenObject' + objName]);
}

/**
 * This method scales a hidden object
 * @method doHint
 * @public
 */
Dungeon.doHint = function () {
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

Dungeon.goBack = function () {
    game.states.switchState("IntroState");
}

/**
 * This method removes located object from the background image and UI
 * @method clickObject
 * @public
 * @param hiddenObj{Sprite}
 */
Dungeon.clickObject = function (hiddenObj) {
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