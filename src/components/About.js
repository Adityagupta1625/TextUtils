export default function About(props) {
  let myStyle = {
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div className="container" style={myStyle}>
   
      <h1 className="my-3" style={myStyle} >
        About Us
      </h1>
      <div classclassName="accordion" id="accordionExample">
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong>Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            classclassName="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             Can be used with any browser like firefox,opera etc and can be used to analayze any facebook text,pdf text or a simple word document.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>Free to Use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              It is a free to use application you need to buy anyanything you can use it whenever you want. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Anaylze Your Text
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             TextUtils provides you the facility to analyze youe text ,count words,remove punctutation etc in a very user freindly way.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
