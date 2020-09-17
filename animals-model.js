const db = require('./connection');

module.exports = {
  insert,
  remove,
  findById
}

async function insert(animal) {

    return db('animals')
        .insert(animal, 'id')
        .then(([id]) => {
            return findById(id)
        })
 
}


function remove(id) {
  return null;
}


function findById(id) {
    return db('animals').where({ id }).first()
  }