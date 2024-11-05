/* --------------------------------------------------- 

              EXERCISE ONE

------------------------------------------------------ */


// Base API
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// DOM elements to display data. Fixed query types for each and renamed variables to proper ones.
const Name = document.querySelector('.name');
const Blog = document.querySelector('.blog');
const Location = document.querySelector('.location');


// Note: fixed async function
async function displayUser(username) {
  // Set initial message
  Name.textContent = 'cargando...';

  try {
    // Fetch user
    const response = await fetch(`${usersEndpoint}/${username}`);

    // Check if response is ok; throw an error if not.
    if (!response.ok) throw new Error(`User not found: ${response.statusText}`);
    const data = await response.json();

    // Display fetched data
    Name.textContent = data.name || 'No name available';
    Blog.textContent = data.blog || 'No blog available';
    Location.textContent = data.location || 'No location available';

  } catch (error) {
    handleError(error);
  }
}



function handleError(err) {
  console.error('OH NO!');
  
  Name.textContent = `Algo salió mal: ${err.message}`;
}

// Fetch and display data
displayUser('stolinski').catch(handleError);