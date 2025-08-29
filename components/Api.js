export default class Api {
  constructor({ baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;  
  }

  getUserInfo(){
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
     .then(res => this._checkResponses(res))
    }  
     
    updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })  
    .then(res => this._checkResponses(res))
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
     .then(res => this._checkResponses(res))
  }

  addNewCard(data) { 
return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
  })
   .then(res => this._checkResponses(res))
}


  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {  
      method: 'DELETE',
      headers: this._headers
    }) 
    .then(res => this._checkResponses(res))
  }

  updateAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })  
     .then(res => this._checkResponses(res))
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })  
    .then(res => this._checkResponses(res))
  }

 removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })  
    .then(res => this._checkResponses(res))
  }

  _checkResponses(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

}
