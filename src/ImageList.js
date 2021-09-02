import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

export default function ImageList (props) {
  console.log (props.images);
  let counter = 0;

  const images = props.images.map (image => {
    return <ImageCard image={image} key={image.id} counter={counter++} />;
  });

  return (
    <div className="image-list">
      {images}
    </div>
  );
}
