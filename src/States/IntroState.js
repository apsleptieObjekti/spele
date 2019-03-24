var IntroState = new Kiwi.State('IntroState');
IntroState.create = function () {
    //This state is currently skipped, but can be used as a main menu page.
    console.log('\nIntro state');
    this.BG = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.startBG, 0, 0);
    this.addChild(this.BG);

    this.spelet_button = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.spelet_button, 440, 300);
    this.addChild(this.spelet_button);
    this.spelet_button.input.onDown.add(this.goLevels, this);
    //
    // this.studyBtn = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.study_button, 398, 482);
    // this.addChild(this.studyBtn);
    // this.studyBtn.input.onDown.add(this.goStudy, this);
    //
    // this.tavernBtn = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.tavern_button, 647, 482);
    // this.addChild(this.tavernBtn);
    // this.tavernBtn.input.onDown.add(this.goTavern, this);
}

IntroState.goLevels = function () {
    game.states.switchState("Levels");
}

IntroState.goDungeon = function () {
    game.states.switchState("Dungeon");
}

IntroState.goStudy = function () {
    game.states.switchState("Study");
}

IntroState.goTavern = function () {
    game.states.switchState("Tavern");
}