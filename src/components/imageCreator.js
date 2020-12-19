import React from "react";

const ImageCreator = (props) => {
  return (
    <article className="slider__article --small">
      <div
        className="img__container"
        style={{ backgroundImage: props.infos.name }}
        id="capture"
      >
        <div
          className="article__text"
          style={{ backgroundColor: props.infos.color }}
        >
          <p className="card__title">Hello {props.cardInfo[1]}! 🎅</p>
          <p className="card__subtitle">
            {props.cardInfo[0]} has a special message for you:
          </p>
          <p className="card__text">{props.cardInfo[2]}</p>
          <svg
            className="slider__wave"
            width="100%"
            height="81"
            viewBox="0 0 100% 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 67.3527L12.2083 71.8429C24.4167 76.333 48.8333 85.3134 73.25 78.5781C97.6667 71.8429 122.083 49.392 146.5 42.6567C170.917 35.9214 195.333 44.9018 219.75 44.9018C244.167 44.9018 268.583 35.9214 280.792 31.4312L293 26.9411V0H280.792C268.583 0 244.167 0 219.75 0C195.333 0 170.917 0 146.5 0C122.083 0 97.6667 0 73.25 0C48.8333 0 24.4167 0 12.2083 0H0V67.3527Z"
              fill={props.infos.color}
            />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default ImageCreator;
