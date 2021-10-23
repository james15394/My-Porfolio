import styled from "styled-components";

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
    height: 100%;
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
      font-size: 4em;
      letter-spacing: 2px;
      font-weight: 1000;
      position: relative;
      color: #fff;
      margin-right: 100px;
      @media (max-width: 430px) {
        font-size: 3em;
        max-height: 20%;
      }
    }
    .right {
      background: rgba(215, 50, 52);
      padding: 50px 20px;
      margin-left: 50px;
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
        font-size: 30px;
        @media (max-width: 430px) {
          font-size: 25px;
        }
      }
      .description {
        line-height: 30px;
        font-size: 20px;
        @media (max-width: 430px) {
          font-size: 15px;
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
