
//resolved Promises, can be used for unit testing. Look into this further
const p = Promise.resolve({ id: 1});
p.then(result => console.log(result)); 

const pr = Promise.reject(new Error('This is teh reason for failure...'));
pr.catch(err => console.log(err));