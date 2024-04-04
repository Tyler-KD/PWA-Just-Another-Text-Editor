import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database.
// This function is used to store or update data in an IndexedDB database in the user's browser.
// The data to be store is passed as parameters to the function.
// The id is used as the key for the data, and content is the data itself.
export const putDb = async (id, content) => {
  console.log('PUT to the database');
  // Opening a connection to an IndexedDB database named 'jate'
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  // This line is making a request to put (or update if it already exists) an object in the store.
  // The object has two properties: (id and jate), where jate is set to the content passed to the function.
  const request = store.put({ id: id, jate: content });
  const result = await request;
  console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database.
// This function is used to retrieve data from an IndexedDB database in the user's browser.
// Index db is trying to parse the data by using a split string function but since getAll()
// returns an array of data it can't split since it's not a string.
// All the data you're trying to retrieve exists in that single item from get(1)
export const getDb = async () => {
  console.log('GET all from the database');
  // Opening a connection to an IndexedDB database named 'jate'
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // This line is making a request to get an object from the store with a key of 1.
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
