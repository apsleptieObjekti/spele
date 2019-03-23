var Preloader = new KiwiLoadingScreen('Preloader', 'IntroState', {width: 1024, height: 768}, 'assets/loading/');

Preloader.preload = function () {
    //Have to call the super preload
    KiwiLoadingScreen.prototype.preload.call(this);
    //TITLE
    this.addImage('startBG', 'assets/img/startScreen/BG.jpg');
    this.addImage('levels', 'assets/img/startScreen/levels.jpg');
    this.addImage('dungeon_button', 'assets/img/startScreen/dungeon_button.png');
    // this.addImage('study_button', 'assets/img/startScreen/study_button.png');
    // this.addImage('tavern_button', 'assets/img/startScreen/tavern_button.png');

    //UI
    this.addImage('arrow', 'assets/img/ui/arrow.png');
    this.addImage('button', 'assets/img/ui/button.png');

    //DUNGEON
    this.addImage('dungeonBG', 'assets/img/dungeonScreen/BG.jpg');
    this.addImage('hidden_candle', 'assets/img/dungeonScreen/hidden_candle.png');
    this.addImage('hidden_coin', 'assets/img/dungeonScreen/hidden_coin.png');
    this.addImage('hidden_mug', 'assets/img/dungeonScreen/hidden_mug.png');
    this.addImage('hidden_skull', 'assets/img/dungeonScreen/hidden_skull.png');
    this.addImage('hidden_telescope', 'assets/img/dungeonScreen/hidden_telescope.png');

    this.addImage('UI_candle', 'assets/img/dungeonScreen/UI_candle.png');
    this.addImage('UI_coin', 'assets/img/dungeonScreen/UI_coin.png');
    this.addImage('UI_mug', 'assets/img/dungeonScreen/UI_mug.png');
    this.addImage('UI_skull', 'assets/img/dungeonScreen/UI_skull.png');
    this.addImage('UI_telescope', 'assets/img/dungeonScreen/UI_telescope.png');

    //STUDY
    // this.addImage('studyBG', 'assets/img/studyScreen/BG.jpg');
    // this.addImage('hidden_bwlloes', 'assets/img/studyScreen/hidden_bwlloes.png');
    // this.addImage('hidden_cross', 'assets/img/studyScreen/hidden_cross.png');
    // this.addImage('hidden_flag', 'assets/img/studyScreen/hidden_flag.png');
    // this.addImage('hidden_glasses', 'assets/img/studyScreen/hidden_glasses.png');
    // this.addImage('hidden_telescope2', 'assets/img/studyScreen/hidden_telescope2.png');
    //
    // this.addImage('UI_bwlloes', 'assets/img/studyScreen/UI_bwlloes.png');
    // this.addImage('UI_cross', 'assets/img/studyScreen/UI_cross.png');
    // this.addImage('UI_flag', 'assets/img/studyScreen/UI_flag.png');
    // this.addImage('UI_glasses', 'assets/img/studyScreen/UI_glasses.png');
    // this.addImage('UI_telescope2', 'assets/img/studyScreen/UI_telescope2.png');
    //
    // //TAVERN
    // this.addImage('tavernBG', 'assets/img/tavernScreen/BG.jpg');
    // this.addImage('hidden_apple', 'assets/img/tavernScreen/hidden_apple.png');
    // this.addImage('hidden_candelabra', 'assets/img/tavernScreen/hidden_candelabra.png');
    // this.addImage('hidden_envelope', 'assets/img/tavernScreen/hidden_envelope.png');
    // this.addImage('hidden_teddy', 'assets/img/tavernScreen/hidden_teddy.png');
    // this.addImage('hidden_wheel', 'assets/img/tavernScreen/hidden_wheel.png');
    //
    // this.addImage('UI_apple', 'assets/img/tavernScreen/UI_apple.png');
    // this.addImage('UI_candelabra', 'assets/img/tavernScreen/UI_candelabra.png');
    // this.addImage('UI_envelope', 'assets/img/tavernScreen/UI_envelope.png');
    // this.addImage('UI_teddy', 'assets/img/tavernScreen/UI_teddy.png');
    // this.addImage('UI_wheel', 'assets/img/tavernScreen/UI_wheel.png');
};