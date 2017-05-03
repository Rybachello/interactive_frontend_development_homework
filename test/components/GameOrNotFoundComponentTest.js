import React from 'react';
import {shallow} from 'enzyme';
import GameOrNotFound from '../../src/components/GameOrNotFoundComponent';
import NumberGameApp from '../../src/components/NumberGameAppComponent';
import WordGameApp from '../../src/components/WordGameAppComponent';


describe('GameOrNotFound', () => {
  it('renders', () => {
    expect(shallow(
        <GameOrNotFound/>,
    )).to.exist;
  });
  it('renders game not find if cannot game ', () => {
    const gameOrNotFoundComponent = shallow(<GameOrNotFound gameId='asdf' game = {undefined}/>);
    expect(gameOrNotFoundComponent).
        to.
        contain(<p>Game asdf not found</p>);
  });
  it('renders Number game when game type is guess word', () => {
    const gameOrNotFoundComponent = shallow(<GameOrNotFound gameId='asdf' game = {{type:'guess_number'}}/>);
    expect(gameOrNotFoundComponent).
        to.
        contain(<NumberGameApp game ={{type:'guess_number'}} onNumberSubmit = {undefined}/>);
  });
  it('renders Word game when game type is guess word', () => {
    const gameOrNotFoundComponent = shallow(<GameOrNotFound gameId='asdf' game = {{type:'guess_word'}}/>);
    expect(gameOrNotFoundComponent).
        to.
        contain(<WordGameApp game ={{type:'guess_word'}} onWordSubmit = {undefined}/>);
  });
});


