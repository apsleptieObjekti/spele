var Preloader = new KiwiLoadingScreen('Preloader', 'IntroState', {width: 1024, height: 768}, 'assets/loading/');

Preloader.preload = function () {
    //Have to call the super preload
    KiwiLoadingScreen.prototype.preload.call(this);
    //TITLE
    this.addImage('startBG', 'assets/img/startScreen/BG.jpg');
    this.addImage('spelet_button', 'assets/img/startScreen/spelet_button.png');
    // this.addImage('dungeon_button', 'assets/img/startScreen/dungeon_button.png');
    // this.addImage('study_button', 'assets/img/startScreen/study_button.png');
    // this.addImage('tavern_button', 'assets/img/startScreen/tavern_button.png');

    //Levels
    this.addImage('levels', 'assets/img/levels/levels.jpg');
    this.addImage('first_button', 'assets/img/levels/1_button.png');
    this.addImage('second_button', 'assets/img/levels/2_button.png');
    this.addImage('third_button', 'assets/img/levels/3_button.png');
    this.addImage('fourth_button', 'assets/img/levels/4_button.png');

    //UI
    this.addImage('back_arrow', 'assets/img/ui/back_arrow.jpeg');
    this.addImage('arrow', 'assets/img/ui/arrow.png');//TODO delete this
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

    //SCHOOL
    this.addImage('schoolBG', 'assets/img/school/BG.jpg');
    this.addImage('hidden_exit', 'assets/img/school/hidden_exit.png');
    this.addImage('hidden_dators_poga', 'assets/img/school/hidden_dators_poga.png');

    this.addImage('UI_exit', 'assets/img/school/UI_exit.png');
    this.addImage('UI_dators_poga', 'assets/img/school/UI_dators_poga.png');

    //LIVINGROOM
    this.addImage('livingRoomBG', 'assets/img/livingRoom/BG.jpg');
    this.addImage('hidden_dators', 'assets/img/livingRoom/hidden_dators.png');
    this.addImage('hidden_detektors', 'assets/img/livingRoom/hidden_detektors.png');
    this.addImage('hidden_gludeklis', 'assets/img/livingRoom/hidden_gludeklis.png');
    this.addImage('hidden_kakis', 'assets/img/livingRoom/hidden_kakis.png');
    this.addImage('hidden_pagarinatajs', 'assets/img/livingRoom/hidden_pagarinatajs.png');
    this.addImage('hidden_panna', 'assets/img/livingRoom/hidden_panna.png');
    this.addImage('hidden_serkocini', 'assets/img/livingRoom/hidden_serkocini.png');
    this.addImage('hidden_spuldzite', 'assets/img/livingRoom/hidden_spuldzite.png');
    this.addImage('hidden_svece', 'assets/img/livingRoom/hidden_svece.png');

    this.addImage('UI_dators', 'assets/img/livingRoom/UI_dators.png');
    this.addImage('UI_detektors', 'assets/img/livingRoom/UI_detektors.png');
    this.addImage('UI_gludeklis', 'assets/img/livingRoom/UI_gludeklis.png');
    this.addImage('UI_kakis', 'assets/img/livingRoom/UI_kakis.png');
    this.addImage('UI_pagarinatajs', 'assets/img/livingRoom/UI_pagarinatajs.png');
    this.addImage('UI_panna', 'assets/img/livingRoom/UI_panna.png');
    this.addImage('UI_serkocini', 'assets/img/livingRoom/UI_serkocini.png');
    this.addImage('UI_spuldzite', 'assets/img/livingRoom/UI_spuldzite.png');
    this.addImage('UI_svece', 'assets/img/livingRoom/UI_svece.png');
    // this.addImage('hidden_candelabra', 'assets/img/tavernScreen/hidden_candelabra.png');
    // this.addImage('hidden_envelope', 'assets/img/tavernScreen/hidden_envelope.png');
    // this.addImage('hidden_teddy', 'assets/img/tavernScreen/hidden_teddy.png');
    // this.addImage('hidden_wheel', 'assets/img/tavernScreen/hidden_wheel.png');

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