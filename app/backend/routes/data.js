const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Data = require("../models/Data");
const { GiConsoleController } = require("react-icons/gi");

router.post(
  "/adddetails",
  [
    body("EID", "Enter a valid Employee ID").isLength({ min: 8 }),

    body(
      "testCaseScripted",
      "Enter a valid number of test case scripted"
    ).isLength({ min: 1 }),
    body(
      "timeTakenForTestCase",
      "Enter a valid time taken for completion of test case"
    ).isLength({ min: 1 }),
    body(
      "NumberOfTestCaseExecuted",
      "Enter a valid Number of test case executed"
    ).isLength({ min: 1 }),
    body(
      "TimeTakenForExecution",
      "Enter a valid time taken for execution"
    ).isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      console.log("getting api");

      //if there are errors,return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() });
      }
      //check if the user is already exist
      let existingData = await Data.findOne({ EID: req.body.EID });
      if (existingData) {
        existingData.testCaseScripted = req.body.testCaseScripted;
        existingData.manualCheckbox = req.body.manualCheckbox;
        existingData.automationCheckbox = req.body.automationCheckbox;
        existingData.timeTakenForTestCase = req.body.timeTakenForTestCase;
        existingData.NumberOfTestCaseExecuted =
          req.body.NumberOfTestCaseExecuted;
        existingData.TimeTakenForExecution = req.body.TimeTakenForExecution;
        const saveexistingdata = await existingData.save();
        res.json(saveexistingdata);
      } else {
        //creating new user
        const data = new Data({
          EID: req.body.EID,
          manualCheckbox: req.body.manualCheckbox,
          automationCheckbox: req.body.automationCheckbox,
          testCaseScripted: req.body.testCaseScripted,
          timeTakenForTestCase: req.body.timeTakenForTestCase,
          NumberOfTestCaseExecuted: req.body.NumberOfTestCaseExecuted,
          TimeTakenForExecution: req.body.TimeTakenForExecution,
        });

        const saveData = await data.save();
        res.json(saveData);
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error1");
    }
  }
);

router.get("/getdata", async (req, res) => {
  try {
    const getdetail = await Data.find({});
    res.json(getdetail);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error1");
  }
});
module.exports = router;
