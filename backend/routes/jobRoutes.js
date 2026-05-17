const express = require("express");
const router = express.Router();
const Job = require("../models/Job");
const auth = require("../middleware/auth");


// =========================
// GET ALL JOBS (PUBLIC)
// =========================
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// =========================
// GET SINGLE JOB (PUBLIC)
// =========================
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// =========================
// CREATE JOB (PROTECTED)
// =========================
router.post("/", auth, async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// =========================
// UPDATE JOB STATUS (PROTECTED)
// =========================
router.patch("/:id", auth, async (req, res) => {
  try {
    const updated = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// =========================
// DELETE JOB (PROTECTED)
// =========================
router.delete("/:id", auth, async (req, res) => {
  try {
    const deleted = await Job.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


// =========================
// EXPORT ROUTER
// =========================
module.exports = router;