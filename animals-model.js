const db = require('./connection');

module.exports = {
  insert,
  remove,
  findById
}

async function insert(animal) {

    db('animals').insert()
 
}



function remove(id) {
  return null;
}

function findById(id) {
    return db('hobbits').where({ id }).first()
  }