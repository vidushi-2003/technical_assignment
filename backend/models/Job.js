const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    location: String,
    contactEmail: String,
    status: {
      type: String,
      default: "Open",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);