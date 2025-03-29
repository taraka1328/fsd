import React from "react";
import "./imageGrid.css"; 
const images = [
  {
  src: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd",
  width: 450,
  height: 500,
  },
  {
  src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  width: 450,
  height: 500,
  },
  {
  src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  width: 450,
  height: 500,
  },
  {
  src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  width: 450,
  height: 500,
  },
  {
  src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  width: 450,
  height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1491146179969-d674118945ff", // Forest trees
    width: 450,
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd", // Sky reflection
    width: 450,
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd", // Nature
    width: 450,
    height: 500,
  },
  ];
  const ImageGridDemo = () => { return (
    <div> ImageGridDemo
      <div id="img-wrapper">
        {
          images.map((image,index) => { return (
            <div key={index}>
            <img src={image.src} height='200px' width='300px' alt=""
            />
            </div>
           );
        }
        )
        }
      </div>
    </div>
  );
};
export default ImageGridDemo;
      