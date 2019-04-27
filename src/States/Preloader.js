var Preloader = new KiwiLoadingScreen('Preloader', 'IntroState', {width: 1024, height: 768}, 'assets/loading/');

Preloader.preload = function () {
    //Have to call the super preload
    KiwiLoadingScreen.prototype.preload.call(this);
    //TITLE
    this.addImage('startBG', 'assets/img/startScreen/BG.jpg');
    this.addImage('spelet_button', 'assets/img/startScreen/spelet_button.png');

    //Levels
    this.addImage('levels', 'assets/img/levels/levels.jpg');
    this.addImage('first_button', 'assets/img/levels/1_button.png');
    this.addImage('second_button', 'assets/img/levels/2_button.png');
    this.addImage('third_button', 'assets/img/levels/3_button.png');
    this.addImage('fourth_button', 'assets/img/levels/4_button.png');

    //UI
    this.addImage('back_arrow', 'assets/img/ui/back_arrow.jpeg');

    //SCHOOL
    this.addImage('schoolBG', 'assets/img/school/BG.jpg');
    this.addImage('Hidden_aparats', 'assets/img/school/Hidden_aparats.png');
    this.addImage('Hidden_evakuacija', 'assets/img/school/Hidden_evakuacija.png');
    this.addImage('Hidden_masina_school', 'assets/img/school/Hidden_masina.png');
    this.addImage('Hidden_plakats', 'assets/img/school/Hidden_plakats.png');
    this.addImage('Hidden_skolotaja', 'assets/img/school/Hidden_skolotaja.png');
    this.addImage('Hidden_zime_school', 'assets/img/school/Hidden_zime.png');


    this.addImage('UI_aparats', 'assets/img/school/UI_aparats.png');
    this.addImage('UI_evakuacija', 'assets/img/school/UI_evakuacija.png');
    this.addImage('UI_masina_school', 'assets/img/school/UI_masina.png');
    this.addImage('UI_plakats', 'assets/img/school/UI_plakats.png');
    this.addImage('UI_skolotaja', 'assets/img/school/UI_skolotaja.png');
    this.addImage('UI_zime_school', 'assets/img/school/UI_zime.png');

    //STREET
    this.addImage('StreetBG', 'assets/img/street/BG.jpg');
    this.addImage('Hidden_hidrants', 'assets/img/street/Hidden_hidrants.png');
    this.addImage('Hidden_kapnes', 'assets/img/street/Hidden_kapnes.png');
    this.addImage('Hidden_masina', 'assets/img/street/Hidden_masina.png');
    this.addImage('Hidden_piebrauktuve', 'assets/img/street/Hidden_piebrauktuve.png');
    this.addImage('Hidden_ugunsdzesejs', 'assets/img/street/Hidden_ugunsdzesejs.png');
    this.addImage('Hidden_vieta', 'assets/img/street/Hidden_vieta.png');
    this.addImage('Hidden_zime', 'assets/img/street/Hidden_zime.png');

    this.addImage('UI_hidrants', 'assets/img/street/UI_hidrants.png');
    this.addImage('UI_kapnes', 'assets/img/street/UI_kapnes.png');
    this.addImage('UI_masina', 'assets/img/street/UI_masina.png');
    this.addImage('UI_piebrauktuve', 'assets/img/street/UI_piebrauktuve.png');
    this.addImage('UI_ugunsdzesejs', 'assets/img/street/UI_ugunsdzesejs.png');
    this.addImage('UI_vieta', 'assets/img/street/UI_vieta.png');
    this.addImage('UI_zime', 'assets/img/street/UI_zime.png');

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

    //MALL
    this.addImage('mallBG', 'assets/img/mall/BG.jpg');
    this.addImage('Hidden_apsargs', 'assets/img/mall/Hidden_apsargs.png');
    this.addImage('Hidden_izeja', 'assets/img/mall/Hidden_izeja.png');
    this.addImage('Hidden_krans', 'assets/img/mall/Hidden_krans.png');
    this.addImage('Hidden_lifts', 'assets/img/mall/Hidden_lifts.png');
    this.addImage('Hidden_plans', 'assets/img/mall/Hidden_plans.png');
    this.addImage('Hidden_virziens', 'assets/img/mall/Hidden_virziens.png');

    this.addImage('UI_apsargs', 'assets/img/mall/UI_apsargs.png');
    this.addImage('UI_izeja', 'assets/img/mall/UI_izeja.png');
    this.addImage('UI_krans', 'assets/img/mall/UI_krans.png');
    this.addImage('UI_lifts', 'assets/img/mall/UI_lifts.png');
    this.addImage('UI_plans', 'assets/img/mall/UI_plans.png');
    this.addImage('UI_virziens', 'assets/img/mall/UI_virziens.png');
};