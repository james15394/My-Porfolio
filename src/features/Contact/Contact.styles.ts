import styled from "styled-components";

export const ContactContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  z-index: 100;
  position: relative;
  overflow: hidden;
  .img {
    position: absolute;
    top: 40%;
    right: 20%;
    z-index: 1000;
    @media (max-width: 1170px) {
      right: 10%;
    }
    img {
      width: 100%;
      height: 100%;
      filter: invert(1);
      @media (max-width: 1170px) {
        width: 80%;
        height: 80%;
      }
      @media (max-width: 890px) {
        display: none;
      }
    }
  }
  .container {
    position: absolute;
    top: 0;
    left: 0;
    // background: #fb4cab;
    background: #07203f;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
    .el {
      position: absolute;
      width: 40px;
      height: 40px;
      // background: #fb4cab;
      background: #d73234;
      transform: rotate(45deg);
      box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.2);
      ::before {
        content: "";
        position: absolute;
        top: -50%;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: 50%;
        box-shadow: 0 -20px 20px rgba(0, 0, 0, 0.1);
      }
      ::after {
        content: "";
        position: absolute;
        top: 0;
        left: -50%;
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: 50%;
        box-shadow: -20px 0 20px rgba(0, 0, 0, 0.1);
      }
    }
  }
  .contact {
    position: relative;
    width: 350px;
    height: 400px;
    @media (max-width: 500px) {
      width: 150px;
      height: 200px;
    }
    border-radius: 10px;
    background: #fff;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: 1s;
    ::before {
      content: "";
      position: absolute;
      bottom: -50px;
      left: 5%;
      width: 90%;
      height: 20px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      z-index: -1;
      filter: blur(10px);
    }
    :hover {
      transform: translateX(50%);
      .contact__img {
        transform: rotateY(-180deg);
      }
    }
    .contact__img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      position: relative;
      z-index: 1;
      transform-origin: left;
      transition: 1s;
      background: #000;
      transform-style: preserve-3d;
      ::before {
        content: "";
        position: absolute;
        bottom: -50px;
        left: 5%;
        width: 90%;
        height: 20px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        z-index: -1;
        filter: blur(10px);
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        :nth-child(2) {
          transform: rotateY(180deg);
        }
      }
    }
    .contact__content {
      display: grid;
      place-items: center;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      .contact__wrapper {
        display: flex;
        padding: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (max-width: 500px) {    
          width: 150px;
          height: 200px;
          overflow: hidden;
          padding: 0;
        }};
        h2 {
          margin-bottom: 20px;
          font-size: 2em;
          letter-spacing: 2px;
          color: #072142;
          position: relative;
          @media (max-width: 500px) {    
          display: none
        }
          ::before {
            position: absolute;
            content: "";
            width: 100px;
            height: 8px;
            background: grey;
            bottom: -15px;
          }
        }
        .contact__info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
         .MuiButton-label {
           @media (max-width: 500px) {    
          font-size: 10px;
        }
        .MuiButton-startIcon {
          margin-right: 2px;
        }
        .MuiSvgIcon-root {
          width: 0.8em;
          height: 0.8em
        }
         }
          a {
            color: #000;
          }
          button {
            text-transform: capitalize;

            :nth-child(1) {
              pointer-events: none;
              .MuiButton-startIcon {
                color: #0845ef;
              }
            }
            :nth-child(2) {
              .MuiButton-startIcon {
                color: #000;
              }
            }
            :nth-child(3) {
              .MuiButton-startIcon {
                color: #0845ef;
              }
            }
            :nth-child(4) {
              .MuiButton-startIcon {
                color: #f14336;
                pointer-events: none;
              }
              .MuiButton-label {
                text-transform: lowercase;
              }
            }
          }
        }
      }
    }
  }
`;
