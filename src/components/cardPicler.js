import React, { useState } from "react";
import Slider from "react-slick";

const cardsList = [
  {
    name: "bg1",
    color: "#172830",
  },
  {
    name: "bg2",
    color: "#4B4B4B",
  },
  {
    name: "bg3",
    color: "#3E63A8",
  },
  {
    name: "bg4",
    color: "#978463",
  },
  {
    name: "bg5",
    color: "#A4A083",
  },
  {
    name: "bg6",
    color: "#4E6244",
  },
  {
    name: "bg7",
    color: "#1A2C38",
  },
  {
    name: "bg8",
    color: "#BD8844",
  },
];

export default function CardPicker(props) {
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
    let itemInfos = {
      name: e.currentTarget.childNodes[0].style.backgroundImage,
      color: e.currentTarget.childNodes[0].children[0].style.backgroundColor,
    };
    setCardInfos(itemInfos);
    e.currentTarget.style.opacity = 0.5;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 995,
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
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="col-lg-6">
      <div className="picker">
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <p className="picker__title"> Choose your template </p>
        <Slider {...settings}>
          {cardsList.map((card) => {
            return (
              <article
                className="slider__article"
                onClick={(e) => selectItem(e)}
                key={card.name}
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
                        fillRule="evenodd"
                        clipRule="evenodd"
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
        {window.innerWidth < 994 && props.step === 1 ? (
          <button
            className="btn--small"
            onClick={(e) =>
              props.nextStep([
                {
                  key: "color",
                  value: cardInfos["color"],
                },
                {
                  key: "img",
                  value: cardInfos["name"],
                },
              ])
            }
            disabled={selectedCard === ""}
          >
            Next step
          </button>
        ) : (
          ""
        )}

        {window.innerWidth > 996 && props.step === 1 ? (
          <button
            className="btn--small"
            onClick={(e) =>
              props.nextStep([
                {
                  key: "color",
                  value: cardInfos["color"],
                },
                {
                  key: "img",
                  value: cardInfos["name"],
                },
              ])
            }
            disabled={selectedCard === ""}
          >
            Next step
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
