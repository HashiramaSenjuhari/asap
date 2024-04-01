import express from "express";
import Song from "../../model/song";

export const deleteSong = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;
    const song = await Song.findByIdAndDelete(id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.status(200).json({ message: "Song deleted" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
