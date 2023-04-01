import React from "react";
import memez from "./meme.webp";
import memedata from "./memedata";

const Main = () => {
  const [meme, setmemeimages] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: memez,
  });
  const [allMemeImage, setAllMemeImage] = React.useState(memedata);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImage(data));
  }, []);
  function showImage() {
    // const memeImage = memedata.data.memes;
    const memeImage = allMemeImage.data.memes;
    // const memes = Math.floor(Math.random() * memeImage.length);
    const memes = Math.floor(Math.random() * memeImage.length);
    // setmemeimages(memeImage[memes].url);

    setmemeimages((prev) => ({
      ...prev,
      randomImage: memeImage[memes].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setmemeimages((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <main className="main6">
      <div className="item-flex">
        <input
          type="text"
          name="topText"
          className="text-one"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          className="text-two"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button type="button" className="button6" onClick={showImage}>
        Get a new meme image
      </button>
      <div className="image6">
        <img src={meme.randomImage} alt="memeimage" />
        <div className="output">
          <p className="output-one">{meme.topText}</p>
          <p className="output-two">{meme.bottomText}</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
