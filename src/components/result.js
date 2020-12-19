import React, { useEffect, useState } from "react";
import ImageCreator from "./imageCreator";
import domtoimage from "dom-to-image";

const Result = (props) => {
  const [url, setUrl] = useState("");

  const options = {
    quality: 0.99,
  };
  const downloadFile = () => {
    var node = document.getElementById("capture");
    domtoimage
      .toPng(node, options)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        setUrl(img.src);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  useEffect(() => {
    downloadFile();
  });

  return (
    <div>
      <p className="picker__title">
        Here your card! click on download, to have it and send it to the person
        you love
      </p>
      <ImageCreator cardInfo={props.cardInfo} infos={props.infos} />
      <a
        href={url}
        disabled={url !== "" ? false : true}
        className="btn--small"
        onClick={(e) => downloadFile()}
        download={`card`}
      >
        Download{" "}
        <img
          src="./img/dl-btn.png"
          alt="download file"
          srcSet="./img/dl-btn.svg"
        ></img>
      </a>
    </div>
  );
};

export default Result;
