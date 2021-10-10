import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//animations
import { motion } from "framer-motion";
import { PageAnim } from "../components/Animate/Anim";

const MovieDetail = () => {
  const hist = useHistory();
  const path = hist.location.pathname;
  const [movies, SetMovies] = useState(MovieState);
  const [movie, SetMovie] = useState(null);

  useEffect(() => {
    const currMovie = movies.filter((cMovie) => cMovie.url === path);
    SetMovie(currMovie[0]);
  }, [movies, path]);

  const Award = ({ title, description }) => {
    return (
      <AwardStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </AwardStyle>
    );
  };
  return (
    <>
      {movie && (
        <Details
          variants={PageAnim}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImgDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImgDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
    border-radius: 0.5rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImgDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
