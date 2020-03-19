
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: "DJSAKL32425sl", make: 'chevy', model: 'corvette', mileage: 29, transmission: 'manual', title: 'clean'  },
        { VIN: "DKJDSAKL432", make: 'ford', model: 'mustang', mileage: 29587, transmission: 'automatic', title: 'clean'  }
      ]);
    });
};
