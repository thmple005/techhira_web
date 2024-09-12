import mongoose from "mongoose";

const UserContactUs = new mongoose.Schema({
  name: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""

  },
  services: {
    type: String,
    default: ""
  },
  message: {
    type: String,
    default: ""
  },
  number:{
    type:String,
    default: ""
  }
});

UserContactUs.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
  },
});
const modelName = 'usercontactus';
// const UserContactUs = mongoose.models[modelName] || mongoose.model(modelName, userContactUsSchema);

export default mongoose.models[modelName] || mongoose.model(modelName, UserContactUs);
