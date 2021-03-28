import styled from "styled-components";

export const ServiceContainer = styled.div`
  background: #f19f44;
  display: grid;
  place-items: center;
  min-height: 100vh;
  position: relative;
  z-index: 100;
  overflow: hidden;
  .service {
    position: relative;
    height: 100%;
    display: grid;
    place-items: center;
    ::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#e63946, #457b9d);
      clip-path: circle(20% at 100% 70%);
    }
    ::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#457b9d, #f1faee);
      clip-path: circle(20% at 14% 16%);
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

    .service__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      height: 100%;
      width: 100%;
      border-radius: 15px;
      overflow: hidden;
      transition: 0.2s;
      :hover {
        background: rgba(255, 255, 255, 0.3);
      }
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
      background-clip: padding-box;
      padding: 10px;
      :nth-child(2) {
        .service__img {
          background: linear-gradient(#0575e6, #021b79);
        }
      }
      :nth-child(1) {
        .service__img {
          background: linear-gradient(#cb2d3e, #ef473a);
        }
      }
      :nth-child(3) {
        .service__img {
          background: linear-gradient(#f9d924, #ff2c24);
        }
      }
      .service__img {
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 50%;
        img {
          width: 100px;
          height: 100px;
        }
      }
      .service__content {
        color: #000;
        letter-spacing: 1.5px;
        line-height: 2;
      }
    }
  }
`;
