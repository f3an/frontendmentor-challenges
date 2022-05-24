export default function fetchRequest(API_ENDPOINT, setState) {
  const url = `https://restcountries.com/v3.1/${API_ENDPOINT}`;
  //random number
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert("Country not found. Try again");
      throw new Error("Something went wrong");
    })
    .then((response) => setState(response))
    .catch((error) => {
      throw error;
    });
  //create file
}
