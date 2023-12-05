const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Replace 'your-atlas-uri' with your MongoDB Atlas connection string
const atlasUri =
  "mongodb+srv://admin:FQUKQFdCZUFr11ic@cluster0.xinqmvj.mongodb.net/CyberGuardian?retryWrites=true&w=majority";

// Connect to your MongoDB Atlas database
mongoose.connect(atlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define your User schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" }
});

// Create a User model
const User = mongoose.model("User", userSchema);

// Sample admin user data
const adminUser = {
  firstName: "Saurabh",
  lastName: "Jadhav",
  email: "admin@Test.com",
  password: "",
  role: "admin"
};

// Hash the admin password before inserting
bcrypt
  .hash("admin@123", 10)
  .then(hash => {
    adminUser.password = hash;

    // Insert the admin user into the "users" collection
    return User.create(adminUser);
  })
  .then(createdUser => {
    console.log("Admin user inserted successfully:", createdUser);
  })
  .catch(error => {
    console.error("Error creating admin user:", error);
  })
  .finally(() => {
    // Close the MongoDB connection
    mongoose.connection.close();
  });
