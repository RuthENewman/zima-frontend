class API {

  static create(user) {
  return fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: user})
  }).then(resp => resp.json());
  }

  static signin (user) {
    return fetch('http://localhost:3000/api/v1/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }).then(resp => resp.json())

  }
  static validate() {
    return this.get('http://localhost:3000/api/v1/validate')
  }

  static getOrderHistory() {
    return this.get('http://localhost:3000/api/v1/myaccount')
  }

  static get (url) {
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      },
    }).then(resp => resp.json())
  }

}

window.API = API;

export default API;
