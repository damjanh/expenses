import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'uid1234',
    };
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid: 'uid1234',
    });
});

test('Should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT',
    };
    const state = authReducer({ uid: 'uid1234' }, action);
    expect(state).toEqual({
        uid: undefined,
    });
});
