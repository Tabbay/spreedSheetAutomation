const AirtableClient = require("../client/airtable");

module.exports.addEntry = async (req, res) => {
  const { name, email, message } = req.body;

  const airtable = new AirtableClient();
  await airtable.create({ name, email, message });
  res.status(200).json({ message: "Ticket entry created" });
};
