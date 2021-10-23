import styled from "styled-components";

export const SkillSetKit = styled.div`
  height: 100vh;
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  background: linear-gradient(
    -30deg,
    #1ec4e9 0%,
    #673ab7 50%,
    #07203f 50%,
    #607d8b 100%
  );
  .skill__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 430px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
      gap: 10px;
    }
    width: 100%;
    height: 100%;

    .skill__card {
      width: 25%;
      height: 120px;
      position: relative;
      z-index: 2;
      display: grid;
      place-items: center;
      background: #fff;
      border-radius: 10px;
      margin: 50px;
      @media (max-width: 650px) {
        width: 180px;
        height: 120px;
        margin: 40px;
        place-self: center;
      }
      :nth-child(1) {
        .skill__content {
          svg {
            circle {
              :nth-child(2) {
                stroke-dashoffset: 30;
              }
            }
          }
        }
      }
      :nth-child(2) {
        .skill__content {
          svg {
            circle {
              :nth-child(2) {
                stroke-dashoffset: 30;
              }
            }
          }
        }
      }
      :nth-child(3) {
        .skill__content {
          svg {
            circle {
              :nth-child(2) {
                stroke-dashoffset: 10;
              }
            }
          }
        }
      }
      :nth-child(4) {
        .skill__content {
          svg {
            circle {
              :nth-child(2) {
                stroke-dashoffset: 20;
              }
            }
          }
        }
      }
      :nth-child(5) {
        .skill__content {
          svg {
            circle {
              :nth-child(2) {
                stroke-dashoffset: 40;
              }
            }
          }
        }
      }
      :nth-child(6) {
        .skill__content {
          svg {
            circle {
              :nth-child(2) {
                stroke-dashoffset: 30;
              }
            }
          }
        }
      }
      :hover {
        .skill__img {
          width: 150px;
          height: 100px;
          @media (max-width: 1000px) {
            width: 100px;
            height: 80px;
            top: calc(50% - 40px);
            left: -50px;
          }
          @media (max-width: 750px) {
            width: 80px;
            height: 80px;
            top: calc(50% - 40px);
            left: -40px;
          }
          left: -75px;
          top: calc(50% - 50px);
          ::before {
            transform: skewX(45deg) translateX(-150px);
          }
          img {
            transform: translateY(20px);
            @media (max-width: 430px) {
              transform: none;
            }
          }
          h3 {
            transform: translateY(100px);
          }
        }
      }
      .skill__img {
        position: absolute;
        top: 10px;
        left: 10px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);

        border-radius: 10px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        z-index: 1;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: flex;
        transition: all 0.4s ease;
        overflow: hidden;

        ::before {
          position: absolute;
          content: "";
          width: 50px;
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          transform: skewX(45deg) translateX(150px);
          transition: 0.5s;
        }
        img {
          max-width: 50px;
          margin-bottom: 10px;
          transition: 0.5s;
          @media (max-width: 430px) {
            max-width: 30px;
          }
        }
        h3 {
          background: #e63946;
          opacity: 0.5;
          backdrop-filter: blur(15px);
          padding: 8px 16px;
          border-radius: 10px;
          color: #fff;
          text-transform: uppercase;
          transition: 0.5s;
          font-size: 10px;
          box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.3);
          @media (max-width: 430px) {
            display: none;
          }
        }
      }
      .skill__content {
        width: 120px;
        height: 120px;
        display: grid;
        place-items: center;
        position: relative;
        border-radius: 50%;
        @media (max-width: 430px) {
          width: 50px;
          height: 50px;
        }
        svg {
          width: 120px;
          height: 120px;
          fill: none;
          @media (max-width: 430px) {
            display: none;
          }
          circle {
            width: 100%;
            height: 100%;
            stroke: #f1faee;
            stroke-width: 7;
            transform: translate(10px, 10px);
            stroke-linecap: round;
            :nth-child(2) {
              stroke: #457b9d;
              stroke-dasharray: 185px;
            }
            @media (max-width: 430px) {
              display: none;
            }
            @media (max-width: 430px) {
              display: none;
            }
          }
        }
        .skill__number {
          display: grid;
          place-items: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          h3 {
            font-size: 1rem;
          }
          @media (max-width: 430px) {
            position: relative;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;
