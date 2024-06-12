function CalculatorBody(props) {
  return (
    <div className="fullbody">
      <div className="upper">
        <div className="screen">
          <div className="screen_firstline">
            <div className="screendata" id="answer_area">
              <label name="answer_area" id="answer_area">
                {props.answer}
              </label>
            </div>
          </div>
          <div className="screen_secondline">
            <div className="screendata" id="history_area">
              <label name="history_area" id="history_area">
                {props.history}
              </label>
            </div>
            <div className="screendata" id="sign_area">
              <label name="current_sign" id="current_sign">
                {props.currentSign}
              </label>
            </div>
          </div>
          <div className="screen_thirdline">
            <div className="screendata" id="entry_area">
              <label name="entry_area" id="entry_area">
                {props.entry}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="row">
          <div className="btn" onClick={props.handleClick} id="left_btn">
            <p className="numberlabel" id="7">
              7
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="8">
              8
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="9">
              9
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="C">
              C
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel canceleverything" id="CE">
              CE
            </p>
          </div>
        </div>
        <div className="row midrow">
          <div className="btn" onClick={props.handleClick} id="left_btn">
            <p className="numberlabel" id="4">
              4
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="5">
              5
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="6">
              6
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="*">
              &#215;
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="+">
              &#43;
            </p>
          </div>
        </div>
        <div className="row midrow">
          <div className="btn" onClick={props.handleClick} id="left_btn">
            <p className="numberlabel" id="1">
              1
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="2">
              2
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="3">
              3
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="/">
              &#247;
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel" id="-">
              &#45;
            </p>
          </div>
        </div>
        <div className="row">
          <div className="btn" onClick={props.handleClick} id="left_btn">
            <p className="numberlabel" id="0">
              0
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel point" id=".">
              .
            </p>
          </div>
          <div className="btn" onClick={props.handleClick}>
            <p className="numberlabel percentage" id="%">
              &#37;
            </p>
          </div>
          <div className="btn equals" onClick={props.handleClick}>
            <p className="numberlabel" id="=">
              &#61;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CalculatorBody;
