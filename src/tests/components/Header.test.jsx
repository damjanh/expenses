import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';

// React test renderer example. Here for future reference.
// test('Should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startLogoutProp={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on logout button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogoutProp={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
