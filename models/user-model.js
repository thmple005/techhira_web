import mongoose from "mongoose";

const User = new mongoose.Schema({
  userName: {
    type: String
  },
  password: {
    type: String
  },
  email:{
    type: String
  }
});

User.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
  },
});
const modelName = 'user';
// const UserContactUs = mongoose.models[modelName] || mongoose.model(modelName, userContactUsSchema);

export default mongoose.models[modelName] || mongoose.model(modelName, User);
