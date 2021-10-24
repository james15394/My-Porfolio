import styled from "styled-components";

export const ServiceContainer = styled.div`
  background: #132a48;
  display: grid;
  place-items: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  z-index: 100;
  overflow: hidden;
  .service {
    position: relative;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    ::before {
      position: absolute;
      content: "";
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      height: 50px;
      background: linear-gradient(#ff2c24, #457b9d);
    }
    ::after {
      position: absolute;
      content: "";
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(255, 255, 255, 0.2)
      );
      width: 100%;
      height: 180%;
      top: calc(50% + 50px);
      transform: translateY(-50%);
      filter: blur(5px);
    }
  }
  .service__container {
    width: 80%;
    padding: 50px 0;
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px 20px;
    @media (max-width: 430px) {
      gap: 10px;
    }
    .service__item {
      position: relative;
      justify-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 450px;
      max-width: 300px;
      border-bottom-left-radius: 160px;
      border-bottom-right-radius: 160px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      transition: 0.2s;
      z-index: 111;
      @media (max-width: 430px) {
        height: 200px;
        width: 100%;
        flex-direction: row;
        place-self: center;
      }
      box-shadow: 0 15px 0 #fff, inset 0 -15px 0 rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(10px);
      background-clip: padding-box;
      :nth-child(2) {
        background: linear-gradient(to bottom, #0575e6, #021b79);
        .bar {
          background: #fe8f8f;
        }
        .small {
          background: #ff5c58;
          ::before {
            background: #fe8f8f;
          }
        }
      }
      :nth-child(1) {
        background: linear-gradient(to bottom, #ffec61, #f321d7);
        .bar {
          background: #f98404;
        }
        .small {
          background: #fc5404;
          ::before {
            background: #f98404;
          }
        }
      }
      :nth-child(3) {
        background: linear-gradient(to bottom, #f9d924, #ff2c24);
        .bar {
          background: #ba135d;
        }
        .small {
          background: #701940;
          ::before {
            background: #ba135d;
          }
        }
      }
      .service__img {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 20px;
        padding: 20px;
        position: relative;
        width: 100%;
        height: 5em;
        .bar {
          position: absolute;
          z-index: 1000;
          border-radius: 30px;
          border-bottom-left-radius: 0;
          height: 50px;
          width: 90%;
          left: -15px;
          box-shadow: 10px 0 #fff, inset -10px 0 rgb(255 255 255 / 30%);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          letter-spacing: 2px;
          font-weight: 800;
          font-size: 18px;
          ::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 5px;
            filter: blur(5px);
            background: rgba(0, 0, 0, 0.2);
            bottom: -7px;
            border-radius: 30px;
          }
        }
        .small {
          width: 15px;
          height: 30px;
          position: absolute;
          left: -15px;
          bottom: -18px;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
          ::before {
            position: absolute;
            content: "";
            z-index: -10;
            width: 15px;
            height: 13px;
            top: 2px;
          }
        }
        img {
          width: 3em;
          height: 3em;
        }
        @media (max-width: 800px) {
          display: none;
        }
        @media (max-width: 430px) {
          display: none;
        }
      }
      .service__content {
        color: #fff;
        letter-spacing: 1.5px;
        line-height: 2;
        padding: 20px;
        font-size: clamp(0.6rem, 1vw, 2rem);
      }
    }
  }
`;
