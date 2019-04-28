var game = new Kiwi.Game('content', 'fd', null, { renderer: Kiwi.RENDERER_CANVAS, debug: Kiwi.DEBUG_OFF });
game.states.addState(Preloader);
game.states.addState(IntroState);
game.states.addState(Levels);
game.states.addState(School);
game.states.addState(LivingRoom);
game.states.addState(Street);
game.states.addState(Mall);
game.states.switchState("Preloader");