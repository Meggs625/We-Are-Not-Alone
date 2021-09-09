const baseURL = 'http://localhost:3001/sightings';

export const fetchData = () => {
  return fetch(`${baseURL}`)
    .then((res) => res.ok ? res.json() : console.log(res))
}

export const postData = (newData) => {
  return fetch(`${baseURL}`, {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const deleteData = (id) => {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json'
      }
  })
}