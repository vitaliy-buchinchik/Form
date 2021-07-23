'use strict';

const personName = document.getElementById('name');
const personTel = document.getElementById('tel');
const btn = document.getElementById('btn');

const URL = 'https://asiansy.com/test/test.php';

const makeOrder = (name, tel) => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
    info: JSON.stringify({
      name: name.value,
      phone: tel.value,
    }),
  })
    .then(response => {
      if(response.ok) {
        return response.json()
      }

      return response.json().then(error => {
        const err = new Error('Форма заполнена не правильно');
        err.data = error;
        alert(err);
      })
    })
}

btn.onclick(makeOrder(personName, personTel));
