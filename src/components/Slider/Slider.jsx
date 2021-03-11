import React, { useRef, useState, useEffect } from "react";
import "./Slider.css";

import PropTypes from "prop-types";

function Slider(props) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (selected === props.images.length - 1) {
        setSelected(0);
      } else {
        setSelected(selected + 1);
      }
    }, props.interval);

    return () => {
      clearTimeout(timeout);
    };
  }, [selected, props.images.length]);

  return (
    <div className="slider__wrapper">
      <div className="slider">
        <div className="images">
          {props.images.map((m, i) => (
            <img
              key={i}
              src={m}
              alt={"image-" + i}
              style={{ marginLeft: i === selected ? `${-100 * i}%` : 0 }}
            />
          ))}
        </div>
        <div className="dots">
          {props.images.map((m, i) => (
            <label
              key={i}
              htmlFor={"image__slider__r-" + i}
              className={i === selected ? "image__slider__current__label" : ""}
              onClick={() => setSelected(i)}
            ></label>
          ))}
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.array.isRequired,
  interval: PropTypes.number.isRequired,
};

export default Slider;
