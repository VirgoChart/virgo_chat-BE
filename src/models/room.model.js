import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    notification: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notification",
      required: true,
    },
    roomName: {
      type: String,
    },
    roomImage: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    members: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        role: {
          type: String,
          enum: ["admin", "member"],
          default: "member",
        },
        nickName: {
          type: String,
        },
        joinedAt: {
          type: Date,
          default: Date.now,
        },
        latestDeletedAt: {
          type: Date,
        },
        _id: false,
      },
    ],
    roomType: {
      type: String,
      enum: ["private", "group"],
      default: "private",
    },
    settings: {
      allowFileSharing: {
        type: Boolean,
        default: true,
      },
      adminOnlyMessages: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true },
  { _id: false },
);

const Room = mongoose.model("Room", roomSchema);

export default Room;