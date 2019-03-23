var Study = new Kiwi.State('Study');
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
Study.create = function () {
    this.hiddenObjects = [];
    this.gameComplete = false;
    //add bg
    this.bg = new Kiwi.GameObjects.Sprite(this, Study.textures.studyBG, 0, 0);
    this.addChild(this.bg);

    for (var i = 0; i < 6; i++) {
        var b = new Kiwi.GameObjects.Sprite(this, Study.textures.button, 65 + 150 * i, 626);
        this.addChild(b);
        if (i == 0) {
            b.input.onDown.add(this.goBack, this);
            var arrow = new Kiwi.GameObjects.Sprite(this, Study.textures.arrow, 105, 656);
            this.addChild(arrow);
        }
    }

    //add hidden objects and their corresponding UI preview images
    this.addHiddenObject('bwlloes', 192-25, 241-27);
    this.addHiddenObject('cross', 123-24, 537-27);
    this.addHiddenObject('flag', 430-22, 269-15);
    this.addHiddenObject('glasses', 440-28, 362-14);
    this.addHiddenObject('telescope2', 793-24, 276-24);
}

/**
 * This method adds a new object
 * @method addHiddenObject
 * @public
 * @param objName{String}
 * @param objX{Number}
 * @param objY{Number}
 */
Study.addHiddenObject = function (objName, objX, objY) {
    //Object hidden on the stage

    console.log('create object: ',objName);
    this['hiddenObject' + objName] = new Kiwi.GameObjects.Sprite(this, Study.textures['hidden_' + objName], objX, objY);
    this['hiddenObject' + objName].objName = objName;
    this['hiddenObject' + objName].input.onDown.add(this.clickObject, this);
    this.addChild(this['hiddenObject' + objName]);

    //UI preview image
    this['UIButton' + objName] = new Kiwi.GameObjects.Sprite(this, Study.textures['UI_' + objName], 150 * this.hiddenObjects.length + 245, 646);
    this.addChild(this['UIButton' + objName]);

    this.hiddenObjects.push(this['hiddenObject' + objName]);
}

/**
 * This method scales a hidden object
 * @method doHint
 * @public
 */
Study.doHint = function () {
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

Study.goBack = function () {
    game.states.switchState("IntroState");
}

/**
 * This method removes located object from the background image and UI
 * @method clickObject
 * @public
 * @param hiddenObj{Sprite}
 */
Study.clickObject = function (hiddenObj) {
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