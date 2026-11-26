import { Character, Scene } from "@/types";
import mongoose from "mongoose";

export interface IScript extends mongoose.Document {
  name: string;
  owner: string;
  startingScene: string;
  scenes: Scene[];
  characters: Character[];
}

const CharacterSchema = new mongoose.Schema({ name: String, desc: String });

const ScriptSchema = new mongoose.Schema({
  name: { type: String },
  owner: { type: String },
  viewers: [{ type: String }],
  startingScene: { type: String },
  scenes: [
    {
      name: { type: String },
      id: { type: Number },
      startNode: { type: Number },
      characters: [{ name: { type: String }, desc: { type: String } }],
      passages: [
        {
          name: { type: String },
          text: { type: String },
          pid: { type: Number },
          links: [
            {
              name: { type: String },
              link: { type: String },
              pid: { type: Number },
              condition: { type: String },
            },
          ],
          position: { x: { type: Number }, y: { type: Number } },
        },
      ],
      location: { type: String },
    },
  ],
  characters: [{ name: String, desc: String }],
});

export default mongoose.models.Script ||
  mongoose.model<IScript>("Script", ScriptSchema);
