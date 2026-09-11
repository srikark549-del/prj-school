export function getAllNotes(req, res) {
  res.status(200).send("You fetched all the notes");
}

export function createNote(req, res) {
  res.status(201).json({ message: "You created a new note" });
}

export function updateNote(req, res) {
  res.status(200).json({ message: "You updated the note" });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "You deleted the note" });
}