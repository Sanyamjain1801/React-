import { useLocation } from "react-router-dom";
import "./Manager.css";
import React, { useRef, useState, useEffect } from "react";

const Manager = () => {
  const location = useLocation();
  const ref1 = useRef(location.state.testCaseScripted);
  const ref2 = useRef(location.state.timeTakenForTestCase);
  const ref3 = useRef(location.state.NumberOfTestCaseExecuted);
  const ref4 = useRef(location.state.TimeTakenForExecution);
  
  const [result, setResult] = useState(null);
  useEffect(() => {
    if (ref1.current && ref2.current) {
      setResult(ref1.current / ref2.current);
    }
  }, []);

  const [result1, setResult1] = useState(null);
  useEffect(() => {
    if (ref3.current && ref4.current) {
      setResult1(ref3.current / ref4.current);
    }
  }, []);

  return (
    <>
      <div className="wrapper">
        <h1>Manager Portal</h1>
        <table>
          <tbody style={{ width: 100 }}>
            <tr>
              <td>Scrippting productivity:</td>
              <td style={{ width: 100 }}>
                {result !== null && <div>{result}</div>}
              </td>
            </tr>
            <tr style={{ height: 50 }}>
              <td>Execution productivity:</td>
              <td>{result1 !== null && <div>{result1}</div>}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Manager;
