var result;
export function callPostApi(username, password) {
    return  fetch(url+ '/api/login', {
        method: 'POST', headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }, body: JSON.stringify({
          username: username,
          password: password
        }),
      })
        .then(res => res.json())
        .then(res => {
            result = JSON.stringify(res)
        }).catch((error) => {
          alert(error.message);
        });
}