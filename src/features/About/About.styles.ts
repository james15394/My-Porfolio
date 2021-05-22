import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.div`
  position: relative;
  background: #032e42;
  width: 100%;
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow: hidden;
  color: #fff;

  .wrapper {
    width: 80%;
    display: flex;
    max-height: 700px;
    padding: 80px 30px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    @media (max-width: 430px) {
      width: 90%;
      flex-direction: column;
      justify-content: center;
    }
    .left {
      font-size: clamp(2rem, 2vw + 1.5rem, 5rem);
      letter-spacing: 2px;
      font-weight: 1000;
      position: relative;
      color: #fff;
      margin-right: 50px;
      @media (max-width: 800px) {
          display: none;
      }
    }
    .right {
      background: rgba(215, 50, 52);
      padding: 50px 20px;
      margin-left: 50px;
      max-height: 700px;
      min-width: 400px;
      max-width: 700px;
      position: relative;
      box-shadow: -30px 30px 30px rgba(0, 0, 0, 0.3);
      flex: 1;
      position: relative;
      overflow: hidden;
      @media (max-width: 430px) {
        padding: 20px;
        width: 100%;
        margin-left: 0;
        box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.3);
      }
      .banner {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 20%;
        background: #fff;
        z-index: 10000;
        box-shadow: none;
      }
      h3 {
        letter-spacing: 2px;
        margin-bottom: 20px;
        font-size: clamp(0.8rem, 2vw + 1rem, 2rem);
        @media (max-width: 430px) {
          font-size: 2em;
        }
      }
      .description {
        line-height: 30px;
        font-size: clamp(0.6rem, 1vw + 0.5rem, 1.2rem);
        @media (max-width: 430px) {
          font-size: 1em;
        }
        span {
          font-weight: 900;
        }
      }
      hr {
        margin: 20px 0;
        background: #fff;
        height: 2px;
      }
      p {
        margin: 10px 0;
        :nth-child(5) {
          font-weight: 700;
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
