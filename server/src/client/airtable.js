const dotenv = require("dotenv");
dotenv.config();

const Airtable = require("airtable");

// Load Airtable environment variables
const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env;

class AirtableClient {
  constructor() {
    this.base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
      AIRTABLE_BASE_ID
    );
  }

  create = async (payload) => {
    await this.base(AIRTABLE_TABLE_NAME).create([{ fields: payload }]);
  };
}

module.exports = AirtableClient;
