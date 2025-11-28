import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  try {
    const options = {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      family: 4,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
      w: 'majority'
    };

    // Handle SSL/TLS for production
    if (process.env.NODE_ENV === 'production') {
      options.tls = true;
      options.tlsAllowInvalidCertificates = false;
      options.tlsAllowInvalidHostnames = false;
    }

    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    console.error("Connection string present:", process.env.MONGODB_URI ? "Yes" : "No");
    
    // Log more details in production
    if (process.env.NODE_ENV === 'production') {
      console.error("Full error:", JSON.stringify(error, null, 2));
    }
    
    // Don't exit in production, let it retry
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    }
  }
};

export default connectDB;
