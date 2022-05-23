// const dataApi = (data) => {
//   return fetch('https://awesome-profile-cards.herokuapp.com/card', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   }).then((response) => response.json());
// };
// export default dataApi;
// const url_local = 'http://localhost:4000/card';
const url_local = 'https://promo-p-module-4-team-1.herokuapp.com/card';

const dataApi = (data) => {
  return fetch(url_local, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((dataResponse) => {
      return dataResponse;
    });
};
export default dataApi;
