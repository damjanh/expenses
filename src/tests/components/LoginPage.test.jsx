import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('Should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage startLoginProp={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin when login button is clicked', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLoginProp={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
