
import { Document, Schema, model, models } from "mongoose";

export interface Image extends Document {
  title: string;
  transformation: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object; // Record<string, any>;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: {
    _id: string;
    firstName: string;
    lastName: string;
  }
  updatedAt?: Date;
}


const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformation: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: String, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model('Image', ImageSchema);
