import styled from "styled-components";

export const SkillSetKit = styled.div`
  height: 100vh;
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #f19f44;
  .skill__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
    height: 100%;
    padding: 50px 100px;
    .skill__card {
      width: 33%;
      height: 150px;
      position: relative;
      z-index: 2;
      display: grid;
      place-items: center;
      background: #fff;
      border-radius: 10px;
      margin: 20px;
      :nth-child(1) {
        .skill__content {
          svg {
            circle {
              :nth-child(2) {
                stroke-dashoffset: calc(440px - (440px * 70) / 100);
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
                stroke-dashoffset: calc(440px - (440px * 70) / 100);
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
                stroke-dashoffset: calc(440px - (440px * 90) / 100);
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
                stroke-dashoffset: calc(440px - (440px * 80) / 100);
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
                stroke-dashoffset: calc(440px - (440px * 60) / 100);
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
                stroke-dashoffset: calc(440px - (440px * 70) / 100);
              }
            }
          }
        }
      }
      :hover {
        .skill__img {
          width: 150px;
          height: 100px;
          left: -75px;
          top: calc(50% - 50px);
          ::before {
            transform: skewX(45deg) translateX(-150px);
          }
          img {
            max-width: 70px;
            transform: translateY(20px);
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
          max-width: 80px;
          margin-bottom: 10px;
          transition: 0.5s;
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
          font-size: 15px;
          box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.3);
        }
      }
      .skill__content {
        width: 150px;
        height: 150px;
        display: grid;
        place-items: center;
        position: relative;
        border-radius: 50%;

        svg {
          width: 120px;
          height: 120px;
          fill: none;
          circle {
            width: 100%;
            height: 100%;
            stroke: #f1faee;
            stroke-width: 10;
            transform: translate(10px, 10px);
            stroke-linecap: round;
            :nth-child(2) {
              stroke: #457b9d;
              stroke-dasharray: 400px;
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
        }
      }
    }
  }
`;
