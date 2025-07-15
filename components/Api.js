fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
  headers: {
    authorization: "a9da7302-26b6-4b61-b642-c878d2a906d1"
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });
