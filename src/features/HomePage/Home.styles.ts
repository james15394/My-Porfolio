import styled from "styled-components";

interface Ref {
  scroll?: number;
}
export const HomeContainer = styled.div<Ref>`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);

  overflow: hidden;
  .intro {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000;
    .intro__wrap {
      width: 80%;
      height: 100%;
      padding: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 790px) {
        flex-direction: column;
        justify-content: center;
      }
      .name {
        letter-spacing: 2px;
        color: #fff;
        flex: 0.7;
        .scroll {
          margin-top: 20px;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 12px;
          position: relative;
          ::after {
            position: absolute;
            content: "";
            height: 100px;
            overflow: hidden;
            width: 2px;
            border-radius: 30px;
            bottom: -110px;
            left: 3px;
            background: #fff;
          }
        }
        .line {
          width: 150px;
          height: 30px;
          position: relative;
          z-index: 122;
          margin: 30px 0;
          ::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 70%;
            height: 5px;
            border-radius: 30px;
            background: #d73234;
            z-index: 1;
          }
          ::after {
            position: absolute;
            content: "";
            bottom: 0;
            right: 0;
            width: 70%;
            height: 5px;
            border-radius: 30px;
            background: #d73234;
            z-index: 1;
          }
        }
        @media (max-width: 790px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .infoName {
          font-size: clamp(3rem, 2vw + 4rem, 5rem);

          font-weight: 800;
          text-transform: uppercase;
          @supports (-webkit-text-stroke: 1px black) {
            -webkit-text-stroke: 3px #fff;
            -webkit-text-fill-color: transparent;
          }
        }
        .job {
          font-size: 30px;
          @media (max-width: 1250px) {
            font-size: 20px;
          }
          @media (max-width: 1000px) {
            font-size: 15px;
          }
          @media (max-width: 790px) {
            font-size: 40px;
            margin-top: 20px;
          }
          font-weight: 500;
        }
      }
      .jobDes {
        position: relative;
        text-transform: uppercase;
        z-index: 1;
        flex: 1;
        @media (max-width: 790px) {
          display: none;
        }
        h2 {
          font-size: 80px;
          @media (max-width: 1250px) {
            font-size: 40px;
          }
          @media (max-width: 1000px) {
            font-size: 30px;
            top: -50px;
          }
          @media (max-width: 900px) {
            top: -20px;
            left: 120px;
          }

          color: #d73234;
          letter-spacing: 2px;
          font-weight: 1000;
          position: absolute;
          left: 150px;
          top: -100px;
          z-index: 1;
          transition: 0.5s;
        }
      }
      .circle {
        position: absolute;
        width: 500px;
        height: 500px;
        @media (max-width: 1250px) {
          width: 400px;
          height: 400px;
          top: -250px;
        }
        @media (max-width: 1000px) {
          width: 350px;
          height: 350px;
          top: -200px;
        }
        @media (max-width: 900px) {
          left: 70px;
          width: 300px;
          height: 300px;
          top: -150px;
        }

        background: #fff;
        top: -300px;
        box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.1);
        left: 100px;
        border-radius: 50%;
        transition: 0.5s;
      }
      .circle1 {
        position: absolute;
        width: 600px;
        height: 600px;
        @media (max-width: 1250px) {
          width: 500px;
          height: 500px;
          top: -300px;
        }
        @media (max-width: 900px) {
          display: none;
        }
        @media (max-width: 1250px) {
          width: 500px;
          height: 500px;
          top: -300px;
        }
        @media (max-width: 1000px) {
          width: 450px;
          height: 450px;
          top: -250px;
          box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.2),
            0 0 0 100px rgba(255, 255, 255, 0.2),
            0 0 0 150px rgba(255, 255, 255, 0.1);
        }
        background: rgba(255, 255, 255, 0.8);
        opacity: 0.5;
        top: -350px;
        left: 50px;
        border-radius: 50%;
        transition: 0.5s;
        box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.1),
          0 0 0 100px rgba(255, 255, 255, 0.1),
          0 0 0 150px rgba(255, 255, 255, 0.1),
          0 0 0 200px rgba(255, 255, 255, 0.1),
          0 0 0 250px rgba(255, 255, 255, 0.05);
      }
    }
  }
`;
