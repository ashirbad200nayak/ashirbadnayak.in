import React from 'react';
import Avatar from 'react-avatar';
import my_image from '../imag-assets/my_image.png';
const CircularImage = ({src,  alt, name, size }) => {
    // const src = src;
    return (
    <Avatar
      src={src}      // Provide the image source
      alt={alt}      // Alt text for the image
      name={name}    // Display name or initials for the avatar
      size={size}    // Specify the size of the avatar
      round={true}   // Make the avatar circular
    />
  );
};

export default CircularImage;




// import React from 'react';
// import './CircularImage.css'; // Import your CSS file
// // import my_image from '../imag-assets/my_image.png';
// const CircularImage = ({ src, alt, name, size }) => {
//   return (
//     <img
//       src={src}
//       alt={alt}
//       className="circular-image"
//       style={{ width: size, height: size }}
//     />
//   );
// };

// export default CircularImage;

