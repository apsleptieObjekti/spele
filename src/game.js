

var game = new Kiwi.Game('content', 'fd', null, { renderer: Kiwi.RENDERER_CANVAS, debug: Kiwi.DEBUG_OFF });
game.states.addState(Preloader);
game.states.addState(IntroState);
game.states.addState(Levels);
game.states.addState(Dungeon);
game.states.addState(Tavern);
game.states.addState(Study);

game.states.switchState("Preloader");