// LazyImage.jsx
import React from 'react';

function LazyImage({ src, alt, ...props }) {
    return <img loading="lazy" src={src} alt={alt} {...props} />;
}

export default LazyImage;
