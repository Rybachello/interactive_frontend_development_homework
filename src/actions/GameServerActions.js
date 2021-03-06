import jsonAjax from '../JSONAjaxRequest';

import {
  createGamePostSucceeded,
  createGamePostFailed,
  guessPostSucceeded,
  guessPostFailed,
} from './index';
import {push} from 'connected-react-router';

const SERVER_ADDRESS = 'http://localhost:8081';

export const postCreateGame = ({type}) => (dispatch) => {
  jsonAjax(
      SERVER_ADDRESS + '/games',
      'POST',
      {type},
      ({id, type, status}) => {
        dispatch(push('/ongoingGames'));
        dispatch(createGamePostSucceeded({id, type, status}));
      },
      ({error}) => dispatch(createGamePostFailed({error})),
  );
};

export const postGuess = ({guess, id}) => (dispatch) => {
  jsonAjax(
      SERVER_ADDRESS + `/games/${id}/moves`,
      'POST',
      {guess},
      ({move, game}) => dispatch(guessPostSucceeded({move, game})),
      ({error}) => dispatch(guessPostFailed({error, id})),
  );
};
