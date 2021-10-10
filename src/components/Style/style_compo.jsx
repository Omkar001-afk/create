import { motion } from "framer-motion";
import styled from "styled-components";

export const Ab = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Desc = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1500px) {
    padding: 0;
    bottom {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Img = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
