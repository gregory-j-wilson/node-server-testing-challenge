
exports.seed = function(knex, Promise) {
  
  return knex('animals')
    .truncate()
    .then(function() {
      return knex('animals').insert([
        { animal_name: 'Lion King' },
        { animal_name: 'Bashful Bear' },
        { animal_name: 'Beautiful Bird' },
        { animal_name: 'Dancing Dolphin' },
      ]);
    });
    
};