import Movie from "./movie.model.js";

export const all = async function (req, res, next) {
  try {
    const movies = await Movie.find({});
    return res.json({
      data: movies,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Error",
      error,
    });
  }
};

export const show = async function (req, res, next) {
  try {
    const foundMovie = await Movie.findById(req.params.id);
    return res.json({ data: foundMovie });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Error",
      error,
    });
  }
};

export const create = async function (req, res, next) {
  try {
    const createdMovie = await Movie.create(req.body);
    return res.json({ data: createdMovie });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Error",
      error,
    });
  }
};

export const update = async function (req, res, next) {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.json({ data: updatedMovie });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Error",
      error,
    });
  }
};

export const destroy = async function (req, res, next) {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);

    return res.json({
      message: "Movie Deleted",
      data: deletedMovie,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Error",
      error,
    });
  }
};
