import Song from "../../model/song";
import express from "express";

export const createSinger = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { title, artist, album, year, image } = req.body;
    const newSinger = new Song({
      title,
      artist,
      album,
      year,
      image,
    });
    await newSinger.save();
    res.status(201).json({ message: "Singer created successfully" });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
