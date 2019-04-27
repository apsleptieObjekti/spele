var IntroState = new Kiwi.State('IntroState');
IntroState.create = function () {
    //This state is currently skipped, but can be used as a main menu page.
    console.log('\nIntro state');
    this.BG = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.startBG, 0, 0);
    this.addChild(this.BG);

    this.spelet_button = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.spelet_button, 440, 300);
    this.addChild(this.spelet_button);
    this.spelet_button.input.onDown.add(this.goLevels, this);
}

IntroState.goLevels = function () {
    game.states.switchState("Levels");
}