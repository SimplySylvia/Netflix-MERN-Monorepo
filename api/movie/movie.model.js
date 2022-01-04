import mongoose from "mongoose";

const Movie = new mongoose.model(
  "Movie",
  new mongoose.Schema(
    {
      title: { type: String, required: true },
      previewArtSmall: { type: String },
      previewArtLarge: { type: String },
      logo: { type: String },
      rating: { type: String },
      length: { type: Number },
      description: { type: String },
      releaseYear: { type: String },
      genres: [String],
      isHD: { type: Boolean },
    },
    { timestamps: true }
  )
);

export default Movie;
