var IntroState = new Kiwi.State('IntroState');
IntroState.create = function () {
    //This state is currently skipped, but can be used as a main menu page.
    console.log('\nIntro state');
    this.BG = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.startBG, 0, 0);
    this.addChild(this.BG);

    this.dungeonBtn = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.dungeon_button, 425, 282);
    this.addChild(this.dungeonBtn);
    this.dungeonBtn.input.onDown.add(this.goToLevels, this);
    //
    // this.studyBtn = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.study_button, 398, 482);
    // this.addChild(this.studyBtn);
    // this.studyBtn.input.onDown.add(this.goStudy, this);
    //
    // this.tavernBtn = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.tavern_button, 647, 482);
    // this.addChild(this.tavernBtn);
    // this.tavernBtn.input.onDown.add(this.goTavern, this);
}

IntroState.goToLevels = function () {
    this.BG = new Kiwi.GameObjects.Sprite(IntroState, IntroState.textures.levels, 0, 0);
    this.addChild(this.BG);
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