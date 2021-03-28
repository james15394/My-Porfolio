import styled from "styled-components";

export const AboutContainer = styled.div`
  position: relative;
  background: #f6bac6;
  width: 100%;
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow: hidden;
  color: #d73234;

  .wrapper {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ::before {
      position: absolute;
    }

    .left {
      font-size: 4em;
      letter-spacing: 2px;
      font-weight: 1000;
      flex: 0.7;
    }
    .right {
      background: #f3eee8;
      padding: 50px 20px;
      margin-left: 50px;
      position: relative;
      box-shadow: -30px 30px 30px rgba(0, 0, 0, 0.3);
      flex: 1;
      position: relative;
      overflow: hidden;
      .banner {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 20%;
        background: #d73234;
        z-index: 10000;
        box-shadow: none;
      }
      h3 {
        letter-spacing: 2px;
        margin-bottom: 20px;
        font-size: 30px;
      }
      .description {
        line-height: 30px;
        font-size: 20px;
        span {
          font-weight: 900;
        }
      }
      hr {
        margin: 20px 0;
        background: #d73234;
        height: 2px;
      }
      p {
        margin: 10px 0;
        :nth-child(5) {
          font-weight: 700;
        }
      }
    }
  }
`;
