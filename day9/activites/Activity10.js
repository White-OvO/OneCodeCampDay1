//Create a function getUserData that simulates fetching user data from a server. It should accept a callback function as a parameter. Call the callback function with a user object once the data is retrieved.

function getUserData(callback) {
    const user ={ 
        id:123,
        name:"Christopher",
        email:"chris@gmail.com"
    };

    // call the provided call back function w the user object

    callback(user);
} 



function displayUserData(user) {
    console.log("User ID: " , user.id);
    console.log("User name: ",  user.name);
    console.log("Email Address: ", user.email);
}

getUserData(displayUserData);

// output
//UserID : 123
//Username: Christopher
//EmailAddress: chris@gmail.com