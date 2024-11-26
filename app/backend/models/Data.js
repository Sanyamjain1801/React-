const mongoose = require("mongoose");
const { GiCheckedShield } = require("react-icons/gi");
const { Schema } = mongoose;
const DataSchema = new Schema({
  EID: {
    type: Number,
    required: true,
  },

  manualCheckbox: {
    type: Boolean,
    required: true,
  },

  automationCheckbox: {
    type: Boolean,
    required: true,
  },

  testCaseScripted: {
    type: Number,
    required: true,
  },

  timeTakenForTestCase: {
    type: Number,
    required: true,
  },

  NumberOfTestCaseExecuted: {
    type: Number,
    required: true,
  },
  TimeTakenForExecution: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Data = mongoose.model("data", DataSchema);
module.exports = Data;
