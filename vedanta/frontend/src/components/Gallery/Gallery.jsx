import React, { useEffect, useState } from "react";
import Styles from "./Gallery.module.css";
import FsLightbox from "fslightbox-react";
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [toggler, setToggler] = useState(0);
  const[slide, setSlide]=useState(1);
  useEffect(() => {
    fetch('http://localhost:5000/api/gallery')
    .then((res)=> res.json())
    .then((data)=> setImages(data))
    .catch((err)=> console.error("Error fetching gallery:",err));
  }, []);

  const openLightbox = (index) => {
    setSlide(index + 1);
    setToggler((prev)=>prev + 1);
  };

 
  return (
    <>
      <div className={Styles.galleryGrid}>
        {images.map((img, index) => (
          <div
            key={img._id}
            className={Styles.galleryItem}
            onClick={() => openLightbox(index)}
          >
            <img
              src={img.url}
              alt={img.title}
              className={Styles.galleryImage}
            />
            <p className={Styles.galleryTitle}>{img.title}</p>
          </div>
        ))}
      </div>
      {images.length > 0 &&(
          <FsLightbox
            toggler={toggler}
            sources={images.map((img) => img.url)}
            slide={slide}
          />
      )}
    </>
  );
};

export default Gallery;
