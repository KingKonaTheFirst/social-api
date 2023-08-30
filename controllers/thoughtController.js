const { Thought, User } = require("../models");
const thoughtController = {
  getAllThought(req, res) {
    Thought.find({})
      .populate({ path: "user", select: "-__v" })
      .select("__v")
      .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData)).catch(err => {
        console.log(err);
        res.status(500).json(err)
      });
  },

  getThoughtById({ params }, res){
    Thought.find({ _id: params.id })
  }
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
};
