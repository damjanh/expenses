import { login, logout } from '../../actions/auth';

test('Should setup login action object', () => {
    const action = login('uid1234');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'uid1234',
    });
});

test('Should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
});
