const db = require('./connection');

module.exports = {
  insert,
  remove,
  findById,
  find
}


//---------------------------------------------

function find() {

    return db('animals')
    
}

async function insert(animal) {

    return db('animals')
        .insert(animal, 'id')
        .then(([id]) => {
            return findById(id)
        })
 
}


function remove(id) {
    return db('animals').where({ id }).del();
}


//--------------------------------------


function findById(id) {
    return db('animals').where({ id }).first()
  }