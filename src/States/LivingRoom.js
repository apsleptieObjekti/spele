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

    // var arrow = new Kiwi.GameObjects.Sprite(this, LivingRoom.textures.back_arrow, 15, 15);
    // arrow.input.onDown.add(this.goBack, this);
    // this.addChild(arrow);

    //add hidden objects and their corresponding UI preview images
    this.addHiddenObject('dators', 360, 356, 220, 700);
    this.addHiddenObject('detektors', 180, 90, 80, 660);
    this.addHiddenObject('gludeklis', 785, 475, 84, 690);
    this.addHiddenObject('kakis', 510, 370, 100, 720);
    this.addHiddenObject('pagarinatajs', 700, 470, 230, 660);
    this.addHiddenObject('panna', 40, 300, 290, 720);
    this.addHiddenObject('serkocini', 960, 570, 290, 690);
    this.addHiddenObject('spuldzite', 260, 220, 180, 720);
    this.addHiddenObject('svece', 940, 500, 370, 660);
    // this.addHiddenObject('candelabra', 610-67, 322-75);
    // this.addHiddenObject('envelope', 505-29, 392-16);
    // this.addHiddenObject('teddy', 16-16, 478-15);
    // this.addHiddenObject('wheel', 251-26, 211-83);
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
 * This method scales a hidden object
 * @method doHint
 * @public
 */
LivingRoom.doHint = function () {
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

LivingRoom.goBack = function () {
    game.states.switchState("IntroState");
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
    }
}