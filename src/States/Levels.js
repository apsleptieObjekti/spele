var Levels = new Kiwi.State('Levels');
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
Levels.create = function () {
    //add bg
    this.bg = new Kiwi.GameObjects.Sprite(this, Levels.textures.levels, 0, 0);
    this.addChild(this.bg);

    this.first_button = new Kiwi.GameObjects.Sprite(Levels, Levels.textures.first_button, 263, 210);
    this.addChild(this.first_button);
    this.first_button.input.onDown.add(this.goSchool, this);

    this.second_button = new Kiwi.GameObjects.Sprite(Levels, Levels.textures.second_button, 413, 210);
    this.addChild(this.second_button);
    this.second_button.input.onDown.add(this.goLivingRoom, this);

    this.third_button = new Kiwi.GameObjects.Sprite(Levels, Levels.textures.third_button, 563, 210);
    this.addChild(this.third_button);
    this.third_button.input.onDown.add(this.goStreet, this);

    this.fourth_button = new Kiwi.GameObjects.Sprite(Levels, Levels.textures.fourth_button, 713, 210);
    this.addChild(this.fourth_button);
    this.fourth_button.input.onDown.add(this.goMall, this);
}

Levels.goMall = function () {
    game.states.switchState("Mall");
}

Levels.goSchool = function () {
    game.states.switchState("School");
}

Levels.goLivingRoom = function () {
    game.states.switchState("LivingRoom");
}

Levels.goStreet = function () {
    game.states.switchState("Street");
}