// src/components/FloatingImage.js
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const Image = styled(motion.img)`
  position: absolute;
  animation: ${float} 4s ease-in-out infinite;
`;

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-20, 20],
    transition: {
      yoyo: Infinity,
      duration: 4,
      ease: 'easeInOut',
    },
  },
};

const FloatingImage = ({ src, alt, top, left }) => {
  return (
    <Image
      src={src}
      alt={alt}
      initial="initial"
      animate="animate"
      variants={floatingVariants}
      style={{ top, left }}
    />
  );
};

FloatingImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
};

FloatingImage.defaultProps = {
  alt: 'Floating image',
};

export default FloatingImage;
