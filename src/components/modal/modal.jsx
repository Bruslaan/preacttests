
import SVG from "./arrowSVG";
import { useState } from "preact/hooks";
import { h } from "preact";

const Switch = (
  <label className="switch">
    <input type="checkbox" checked />
    <span className="slider round"></span>
  </label>
);

const Modal = () => {
  const exampleConsent = [
   
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div>
      <div className="overlay"></div>
      <div className="modal">
        <div>
          <div className="modalContainer">
            <span className="modalTitle">
              test
            </span>
            <p className="modalSubtitle">
     test
            </p>

            <ul>
              {exampleConsent.map((consent, index) => {
                return (
                  <li className="accordionListItem">
                    <button
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? -1 : index)
                      }
                      className="accordionHeader"
                    >
                      <span className="accordionTitle">{consent.name}</span>
                      <div className="leftSlot">
                        <span className="labelSpan">
                          {consent.required ? "Immer activ" : Switch}
                        </span>
                        <span
                          className={
                            activeIndex === index
                              ? "rotateTop svgStyle"
                              : " rotateBottom svgStyle"
                          }
                        >
                          <SVG />
                        </span>
                      </div>
                    </button>
                    <div
                      className="panel"
                      style={{
                        display: activeIndex === index ? "block" : "none",
                      }}
                    >
                      <div>
                        <p className="modalSubtitle">
                          {consent.description}
                        </p>

                        <ul>
                          {consent.tools?.map((tool) => 
                            ( <li className="">
                              <div className="toolHeader">
                                <span>{tool.name}</span>
                                {Switch}
                              </div>
                              <p className="modalSubtitle">
                                {tool.description}
                              </p>
                            </li>)
                          )}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="modalButtons">
            <button className="buttonStyle secondarybutton">
              Alle ablehnen
            </button>
            <button className="buttonStyle primarybutton">Alle zulassen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
