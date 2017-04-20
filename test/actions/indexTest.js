import {postCreateGame, postGuess} from '../../src/actions/gameServerActions';
import {
    CREATE_GAME_POST_REQUESTED,
    CREATE_GAME_POST_SUCCEEDED,
    CREATE_GAME_POST_FAILED,
    GUESS_POST_FAILED,
    GUESS_POST_REQUESTED,
    GUESS_POST_SUCCEEDED
} from '../../src/actions/index';
describe('actions:', () => {
    describe('create game post', () => {
        let xhr;
        let requests;
        let dispatch;

        beforeEach(() => {
            global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

            requests = [];
            xhr.onCreate = (xhr) => requests.push(xhr);
            dispatch = sinon.stub();
        });

        afterEach(() => {
            xhr.restore();
        });

        it('dispatches postCreateGame failed when xhr fails', () => {
            postCreateGame('guess_number')(dispatch);

            requests[0].respond(503, {}, JSON.stringify({error: 'error'}));
            expect(dispatch).to.have.been.calledWith({
                type: CREATE_GAME_POST_FAILED,
                payload: {error: 'error'}
            });
        });

        it('dispatches postCreateGame when xhr succeeds', () => {
            postCreateGame('guess_word')(dispatch);

            requests[0].respond(201, {}, JSON.stringify({id: 'asd2ef3-fas3tgs', type: 'guess_word', status: 'finished'}));
            expect(dispatch).to.have.been.calledWith({
                type: CREATE_GAME_POST_SUCCEEDED,
                payload: {
                    id: 'asd2ef3-fas3tgs',
                    type: 'guess_word',
                    status: 'finished'
                }
            });
        });
    });

    describe('guess word/number post ', () => {
        let xhr;
        let requests;
        let dispatch;

        beforeEach(() => {
            global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

            requests = [];
            xhr.onCreate = (xhr) => requests.push(xhr);
            dispatch = sinon.stub();
        });

        afterEach(() => {
            xhr.restore();
        });

        it('dispatches postGuess failed when xhr fails', () => {
            postGuess({guess: '4', id: 'a23rf-4qwef'})(dispatch);

            requests[0].respond(502, {}, JSON.stringify({error: 'error'}));
            expect(dispatch).to.have.been.calledWith({
                type: GUESS_POST_FAILED,
                payload: {error: 'error', id: 'a23rf-4qwef'}
            });
        });

    });
});
