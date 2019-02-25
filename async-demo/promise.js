

//takes an argument that is a function with two parms
const p = new Promise((resolve, reject) => {
//kick off some async work, maybe a db, a timer, something async

setTimeout(() =>{

    reject(new Error('message'));
    //resolve(1);

}, 2000);



}); 

p
    .then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message));