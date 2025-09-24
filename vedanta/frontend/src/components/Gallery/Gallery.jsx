import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../sanity";
import Styles from "./Gallery.module.css";
import FsLightbox from "fslightbox-react";
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [toggler, setToggler] = useState(0);
  const[slide, setSlide]=useState(1);
  useEffect(() => {
    const query = `*[_type == "galleryImage"]{ _id, title, image}`;
    client.fetch(query).then((data) => setImages(data));
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
              src={urlFor(img.image).width(1200).url()}
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
            sources={images.length>0? images.map((img) => urlFor(img.image).url()):[]}
            slide={slide}
          />
      )}
    </>
  );
};

export default Gallery;
