// const STORAGE_TOKEN = 'MU3TF9XZZPG6WRHN43HDM4XULHV4L5L4J71N3YEH';        without firebase
const STORAGE_URL = 'https://remotestoragejoin-default-rtdb.europe-west1.firebasedatabase.app/';

/**
 * This function sends user data from the login form (from the "users" array) to the remote server.
 * @param {*} key - 
 * @param {*} value - 
 * @returns 
 */

async function setItem(key, value) {
  const url =  `${STORAGE_URL}/${key}.json`;
  return fetch(url, {
    method: "PUT", // Use PUT to create or replace data at a specific location
    body: JSON.stringify(value), // Just the value, no need for a payload object
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
} 

/**
 * This function loads user data from the remote server via the URL
 * @param {*} key - 
 * 
 */
async function getItem(key) {
    const url = `${STORAGE_URL}/${key}.json`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          return data;
        }
        throw new Error(`Could not find data with key ${key}.`);
      });
  }
