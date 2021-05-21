/**
 * @jest-environment jsdom
 */
import {pushToHistory} from '../scripts/router.js';

// test if the length of the history stack and the current stack object is currect
describe('test pushToHistory', () => {

    test('test settings', () => {
        let hist = pushToHistory('settings', 0);
        expect(hist.length).toBe(history.length);
        expect(hist.state.page).toBe('settings');
    });
    test('test entry', () => {
        let hist = pushToHistory('entry', 10);
        expect(hist.length).toBe(history.length);
        expect(hist.state.page).toBe('entry10');
    });
    test('test home', () => {
        let hist = pushToHistory('home', 0);
        expect(hist.length).toBe(history.length);
        expect(hist.state.page).toBe(undefined);
    });
});
