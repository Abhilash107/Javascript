// const promise = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log('Async tasks');
//         resolve()
//     }, 2000)
// })

<<<<<<< HEAD

=======
>>>>>>> 9a37b72468cc582010d103ecc2571982066009e1
// promise.then(function(){
//     console.log("promise consumed");
// })



// const promiseTwo = new Promise(function (resolve, reject){
//     setTimeout(()=>{
//         console.log('Async task 2');
//         resolve()
//     }, 1000)
// })

// .then(function(){
//     console.log('Async task resolved');
// })



// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             username: 'Abhi',
//             email: 'abhi@gmail.com'
//         })
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



const promiseFour = new Promise(function(resolve, reject){
    resolve({
        username: 'Papun',
        email: 'abhi123@gmail.com'
    })
})


    //*  handling by then & catch
// promiseFour
// .then(function(user){
//     console.log(user);
<<<<<<< HEAD
//     return user.email
// })
// .then( (email)=>{
//     console.log(email);
=======
//     return user.username
// })
// .then( (username)=>{
//     console.log(username);
>>>>>>> 9a37b72468cc582010d103ecc2571982066009e1
// })
// .catch( (error)=>{
//     console.log(error);
// } )



    //* handling by async await  (use try, catch)
async function consumePromiseFour(){
    try {
<<<<<<< HEAD
        const response = await promiseFour
        console.log(response.email);
=======
        console.log(await promiseFour)
>>>>>>> 9a37b72468cc582010d103ecc2571982066009e1
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour()


<<<<<<< HEAD
//* The statement await promiseFour.email doesn't work because promiseFour is a promise that resolves to an object containing the email property. When you use await, you need to await the entire promise to get the resolved value (the object), not just a property of it.


=======
>>>>>>> 9a37b72468cc582010d103ecc2571982066009e1