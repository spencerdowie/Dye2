import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    email: { type: String },
    password: { type: String },
  },
  { bufferCommands: true },
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
