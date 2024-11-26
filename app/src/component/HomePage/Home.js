import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [checked, setchecked] = useState({
    checkbox1: false,
    checkbox2: false,
  });
  const handlechange = (event) => {
    const { name, checked } = event.target;
    setchecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const navigate = useNavigate();
  const [empid, setempid] = useState();
  console.log({
    empid,
  });

  const [TSScript, setTSScript] = useState();
  console.log({
    TSScript,
  });

  const [TTForTC, setTTForTC] = useState();
  console.log({
    TTForTC,
  });

  const [NTC, setNTC] = useState();
  console.log({
    NTC,
  });

  const [TTE, setTTE] = useState();
  console.log({
    TTE,
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "http://localhost:5000/api/data/adddetails/",
        {
          EID: empid,
          testCaseScripted: TSScript,
          timeTakenForTestCase: TTForTC,
          NumberOfTestCaseExecuted: NTC,
          TimeTakenForExecution: TTE,
          manualCheckbox: checked.checkbox1,
          automationCheckbox: checked.checkbox2,
        }
      );
      console.log(data);
      navigate("/portal", {
        state: {
          testCaseScripted: data.testCaseScripted,
          timeTakenForTestCase: data.timeTakenForTestCase,
          NumberOfTestCaseExecuted: data.NumberOfTestCaseExecuted,
          TimeTakenForExecution: data.TimeTakenForExecution,
        },
      });
    } catch (error) {
      console.log("in catch block");
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <form style={{ height: 600, width: 400 }} action="">
          <h1>Associate Portal</h1>
          <div className="form-group">
            <label className="form-label" htmlFor="psid" id="EPSID">
              Employee PS Id:
            </label>
            <input
              type="textarea"
              required
              value={empid}
              onChange={(e) => setempid(e.target.value)}
              className="form-control"
              id="psid"
              placeholder="Enter a valid id"
            />
          </div>

          <div className="testing">
            <label className="form-label" htmlFor="psid" id="EPSID">
              Type Of Testing:&nbsp;&nbsp;
            </label>
            <input
              type="checkbox"
              id="maual"
              name="checkbox1"
              checked={checked.checkbox1}
              onChange={handlechange}
              value="manual"
            />
            <label htmlFor="manual">&nbsp;Manual&nbsp;&nbsp;</label>

            <input
              type="checkbox"
              id="Automation"
              name="checkbox2"
              checked1={checked.checkbox2}
              onChange={handlechange}
              value="Automation"
            />
            <label htmlFor="Automation">&nbsp;Automation</label>
          </div>
          <br></br>

          <div className="form-group">
            <label htmlFor="test-case-scripted" className="form-label">
              No of test cases scripted:
            </label>
            <input
              type="textarea"
              required
              value={TSScript}
              onChange={(e) => setTSScript(e.target.value)}
              className="form-control"
              id="test-case-scripted"
              placeholder="Enter number of TC scripted"
            />
          </div>

          <div className="form-group">
            <label htmlFor="time_taken_for_testCase" className="form-label">
              Time taken for test case scripting(In min):
            </label>
            <input
              type="textarea"
              required
              value={TTForTC}
              onChange={(e) => setTTForTC(e.target.value)}
              className="form-control"
              id="time_taken_for_testCase"
              placeholder="Enter time taken of TC"
            />
          </div>

          <div className="form-group">
            <label htmlFor="No of test case" className="form-label">
              No of test cases executed:
            </label>
            <input
              type="textarea"
              required
              value={NTC}
              onChange={(e) => setNTC(e.target.value)}
              className="form-control"
              id="No of test case"
              placeholder="Enter number of TC executed"
            />
          </div>

          <div className="form-group">
            <label htmlFor="time_taken" className="form-label">
              Time taken for execution(In min):
            </label>
            <input
              type="textarea"
              required
              value={TTE}
              onChange={(e) => setTTE(e.target.value)}
              className="form-control"
              id="time_taken"
              placeholder="Enter time taken for execution"
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
