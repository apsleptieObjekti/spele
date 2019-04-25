

var game = new Kiwi.Game('content', 'fd', null, { renderer: Kiwi.RENDERER_CANVAS, debug: Kiwi.DEBUG_OFF });
game.states.addState(Preloader);
game.states.addState(IntroState);
game.states.addState(Levels);
game.states.addState(School);
game.states.addState(LivingRoom);
//TODO delete Dungeon
game.states.addState(Dungeon);

game.states.switchState("Preloader");