const bcrypt = require('bcrypt')
//this causes code to break untl you actually set up knex
// const user = require("../db/user");

//below we have the round
bcrypt.genSalt(12, (err, salt) => {
    console.log('salt: ', salt);
  bcrypt.hash("I've been kissed by a rose on the grey I've been kissed by a rose on the grey And if I should fall, will it all go away? I've been kissed by a rose on the grey", salt,(err, hash) => {
    console.log('hash: ', hash);
  });
});
//the above code should generate something like this:
/*
salt: $2a$10$g3Z.hfLsyIw5hoI1UlYCNe
hash: $2a$10$g3Z.hfLsyIw5hoI1UlYCNeEyohk/VhbYYt6TtiXtZymvcHc8nhwPW
*/
bcrypt.compare("I've been kissed by a rose on the grey I've been kissed by a rose on the grey And if I should fall, will it all go away? I've been kissed by a rose on the grey", '$2a$12$tWgV9PoGJpKHLmL8e90rJ.w5MckejDsg6VTBAw1g6ky/hH36erP3q', (err, isMatch) => {
  console.log('is a match: ', isMatch)
});
/*
the above code should generate something like this:
salt: $2a$10$zKvn22LfoDpgjmJ68ZFlNO
is a match:  true
hash: $2a$10$zKvn22LfoDpgjmJ68ZFlNO1diXKambKcqYjMQgRBRNGPC3U1TCcWi
*/

/*
OR
 if != should return something like this in terminal:
 salt: $2a$10$a4SsuiE47yOfCPZXHkeSpe
 is a match:  false
 hash: $2a$10$a4SsuiE47yOfCPZXHkeSpeJwLiicvKezqYO06r0t1eONwwoFcFyaC
*/
