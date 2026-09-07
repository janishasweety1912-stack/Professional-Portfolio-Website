const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "Full Stack",
    },

    image: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    technologies: [
      {
        type: String,
      },
    ],

    githubLink: {
      type: String,
      default: "",
    },

    liveLink: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);