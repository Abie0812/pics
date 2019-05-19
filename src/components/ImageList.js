import './ImageList.css';
import React from 'react';

const ImageList = props => {
    console.log(props);
    const images = props.images.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular} />
    });

    return <div className="image-list">{images}</div>
};

export default ImageList;