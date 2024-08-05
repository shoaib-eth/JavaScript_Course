// Create an object to store user information
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'johndoe@example.com',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
    }
};

// Accessing user information
console.log(`Full Name: ${user.firstName} ${user.lastName}`); 
console.log(`Age: ${user.age}`);
console.log(`Email: ${user.email}`);
console.log(`Address: ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zipCode}`);

// Updating user information
user.age = 26;
user.email = 'johndoe@gmail.com';
user.address.city = 'San Francisco';

// Display updated user information
console.log(`Updated Age: ${user.age}`);
console.log(`Updated Email: ${user.email}`);
console.log(`Updated Address: ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.zipCode}`);