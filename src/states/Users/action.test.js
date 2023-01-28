/**
 * skenario test
 *
 * - asyncRegisterUser thunk
 *  - should dispatch action correctly when data register success
 *  - should dispatch action and call alert correctly when data register failed
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncRegisterUser } from './action';

const fakeRegisterResponse = [
  {
    user: {
      id: 'bakoy-123',
      name: 'bakoy',
      email: 'bakoy@mail.com',
      avatar: 'https://generated-image-url.jpg',
    },
  },
];

const fakeDataRegister = { name: 'bakoy', email: 'bakoy@mail.com', password: '123456' };
const fakeDataRegisterFail = { name: '', email: '', password: '' };

const fakeErrorResponse = new Error('"name" is not allowed to be empty');

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    api._register = api.register;
  });

  afterEach(() => {
    api._register = api.register;

    delete api._register;
  });

  it('should dispatch action correctly when data register success', async () => {
    api.register = () => Promise.resolve(fakeRegisterResponse);
    const dispatch = jest.fn();
    await asyncRegisterUser(fakeDataRegister)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data register failed', async () => {
    api.register = () => Promise.reject(fakeErrorResponse);
    const dispatch = jest.fn();
    window.alert = jest.fn();
    await asyncRegisterUser(fakeDataRegisterFail)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
