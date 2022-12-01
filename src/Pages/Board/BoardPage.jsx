import React from "react";
import { useState, useEffect } from "react";
import styles from "./BoardPage.module.css";
function BoardPage() {
  const [rac, setRac] = useState(8);
  const [arr, setArr] = useState([]);
  const [val, setVal] = useState([0, 0]);
  useEffect(() => {
    var dummy1 = [];
    for (let i = 0; i < rac; i++) {
      var dummy2 = [];
      for (let j = 0; j < rac; j++) {
        dummy2.push(j);
      }
      dummy1.push(dummy2);
    }
    setArr(dummy1);
    console.log(arr);
  }, []);

  const changeBlock = (dir) => {
    if (dir === "l") {
      if (val[1] - 1 < 0) {
        setVal([val[0], rac - 1]);
      } else {
        setVal([val[0], val[1] - 1]);
      }
      console.log(val);
    } else if (dir === "r") {
        if (val[1] + 1 === rac) {
            setVal([val[0], 0]);
          } else {
            setVal([val[0], val[1] + 1]);
          }

    } else if (dir === "t") {
        if (val[0] - 1 <0) {
            setVal([rac-1, val[1]]);
          } else {
            setVal([val[0]-1, val[1]]);
          }
    } else {
        if (val[0] + 1 ===rac) {
            setVal([0, val[1]]);
          } else {
            setVal([val[0]+1, val[1]]);
          }
    }
  };
  return (
    <>
      <div className={styles.holder}  >
        <div>
          {arr.map((data, index) => {
            return (
              <div className="d-flex">
                {data.map((data, index1) => {
                  return (
                    <div
                    onClick={()=>setVal([index,index1])}
                      className="box"
                      style={{
                        cursor:'pointer',
                        backgroundColor:
                          val[0] === index && val[1] === index1 ? "green" : "",
                          border: '1px solid black',
                          margin: '2px'
                      }}
                    >
                      <p>
                        {index},{index1}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.buttons}>
          <button
            className="btn btn-primary mb-12"
            onClick={() => changeBlock("l")}
          >
            Left
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => changeBlock("r")}
          >
            Right
          </button>
          <button className="btn btn-danger" onClick={() => changeBlock("t")}>
            Top
          </button>
          <button className="btn btn-success" onClick={() => changeBlock("b")}>
            Bottom
          </button>
        </div>
      </div>
    </>
  );
}

export default BoardPage;
