import React, { useState } from "react";
import Slider from "react-slick";
import Result from "./result";

export default function MultipleItems(props) {
  const [selectedCard, setSelectedCard] = useState("");
  const [cardInfos, setCardInfos] = useState({});

  const clearSelection = () => {
    setSelectedCard("");
    setCardInfos({
      name: "",
      color: "",
    });
    let articles = document.querySelectorAll(".slider__article");
    for (let index = 0; index < articles.length; index++) {
      articles[index].style.opacity = 1;
    }
  };

  const selectItem = (e) => {
    clearSelection();
    setSelectedCard(e.target);
    console.log(e.currentTarget.childNodes[0].style.backgroundImage);
    let itemInfos = {
      name: e.currentTarget.childNodes[0].style.backgroundImage,
      color: e.currentTarget.childNodes[0].children[0].style.backgroundColor,
    };
    setCardInfos(itemInfos);
    e.currentTarget.style.opacity = 0.5;
    props.nextStep(2);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {props.step === 1 ? (
        <div className="picker">
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <style>{cssstyle}</style>
          <p className="picker__title"> Choose your template </p>
          <Slider {...settings}>
            {props.cardsList.map((card) => {
              return (
                <article
                  className="slider__article"
                  onClick={(e) => selectItem(e)}
                >
                  <div
                    className="img__container"
                    style={{
                      backgroundImage: `url(./img/cards/${card.name}.jpg)`,
                    }}
                  >
                    <div
                      className="article__text"
                      style={{ backgroundColor: card.color }}
                    >
                      <p className="card__title">
                        Hello {props.cardInfo[1]}! 🎅
                      </p>
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
                          fill={card.color}
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              );
            })}
          </Slider>
        </div>
      ) : (
        <Result cardInfo={props.cardInfo} infos={cardInfos} />
      )}
    </div>
  );
}

const cssstyle = `
h3 {
    background: #5f9ea0;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`;
