import React, { useEffect, useState } from "react";
import StudentData from "./SCHOOL_BOOK.csv";
import Papa from "papaparse";

const CSVParse = () => {
  const [bestStudent, setBestStudent] = useState("");
  useEffect(() => {
    Papa.parse(StudentData, {
      download: true,
      header: true,
      dynamicTyping: true,
      delimiter: "",
      skipEmptyLines: true,
      complete: (result) => {
        const sortedData = result.data.sort((a, b) => {
          if (a["AVG(YEAR)"] < b["AVG(YEAR)"]) {
            return 1;
          } else if (a["AVG(YEAR)"] === b["AVG(YEAR)"]) {
            return a["AVG(TEST)"] < b["AVG(TEST)"] ? 1 : -1;
          } else {
            return -1;
          }
        });
        setBestStudent(sortedData[0]);
      },
    });
  }, []);

  return (
    <div>
      <h1>Student with the best average: {bestStudent.Name}</h1>
    </div>
  );
};

export default CSVParse;
