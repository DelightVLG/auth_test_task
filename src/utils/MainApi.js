const MAINAPI_URL = 'http://emphasoft-test-assignment.herokuapp.com';

const checkResponse = (res) => (res.ok
  ? res.json()
  : res.json()
    .then((err) => Promise.reject(new Error(`${err.message} (${res.status} ${res.statusText})`))));

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  getToken(username, password) {
    return fetch(`${this._baseUrl}/api-token-auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => checkResponse(res));
  }

  getUsers(token) {
    return fetch(`${this._baseUrl}/api/v1/users/`, {
      method: 'GET',
      headers: {
        authorization: `Token ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => checkResponse(res));
  }
}

const mainApi = new MainApi({
  baseUrl: MAINAPI_URL,
});

export default mainApi;
