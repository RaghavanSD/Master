import React, { useState } from "react";




const Main = () => {
  const [val, setVal] = useState([{ value: 1, color: "#6F98A8" },
  { value: 2, color: "#2B8EAD" },
  { value: 3, color: "#6f848c" },
  { value: 4, color: "#93d8ed" },
  { value: 5, color: "#2F454E" },
  { value: 6, color: "#BFBFBF" },
  { value: 7, color: "#b8abab" },
  { value: 8, color: "#cedbe0" },
  { value: 9, color: '#1ba8de' }]);


  const handleShuffle = () => {

    let viewShuffle = val.sort(() => Math.random() - 0.5)
    setVal([]);
    setVal(val => val.concat(viewShuffle));


  }

  const handleSort = () => {
    let viewSort = val.sort((a, b) => {
      if (a.value > b.value) return 1;
      if (a.value < b.value) return -1;
      return 0;
    });
    setVal([]);
    setVal(val => val.concat(viewSort));

  }
  return (
    <div className="row jumbotron">

      <div className="col-md-9 " >
        <div className="row visible-xs  ml-5 d-xs-block d-md-none d-sm-none d-lg-none ">
          <div className="col-xs-6 p-1">
            <button type="button" class="btn btn-primary btn-sm mb-button" onClick={handleShuffle}>SHUFFLE</button>
          </div>
          <div className="col-xs-6 p-1">
            <button type="button" class="btn btn-primary btn-sm mb-button " onClick={handleSort}>SORT</button>
          </div>
        </div>

        <div className="row" >
          {val.map((m, i) => <div className="col-md-4 number-content" key={m.i} style={{ background: `${m.color}`, borderColor: `${m.color}` }}>
            {m.value}
          </div>)}
        </div>

      </div>


      <div className="col-md-3 d-none d-lg-block d-sm-none d-md-block">
        <div className="row ">
          <div className="col-md-12 col-xs-6">
            <button type="button" class="btn btn-primary btn-lg desk-button" onClick={handleShuffle}> SHUFFLE</button>
          </div>
          <div className="col-md-12 col-xs-6">
            <button type="button" class="btn btn-primary btn-lg desk-button" onClick={handleSort}>SORT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
