import styled from "styled-components";

interface Ref {
  scroll?: number;
}
export const HomeContainer = styled.div<Ref>`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background: #fec3bd;
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 790px) {
        flex-direction: column;
        justify-content: center;
      }
      .name {
        letter-spacing: 2px;
        color: #d73234;
        flex: 0.7;
        @media (max-width: 790px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .infoName {
          font-size: 90px;
          @media (max-width: 1250px) {
            font-size: 80px;
          }
          @media (max-width: 1000px) {
            font-size: 70px;
          }
          @media (max-width: 790px) {
            font-size: 100px;
          }
          font-weight: 800;
          text-transform: uppercase;
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
          font-size: 50px;
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

          color: #fff;
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

        background: #d73234;
        top: -300px;

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
          box-shadow: 0 0 0 50px rgba(215, 50, 52, 0.2),
            0 0 0 100px rgba(215, 50, 52, 0.2),
            0 0 0 150px rgba(215, 50, 52, 0.1);
        }
        background: #d73234;
        opacity: 0.5;
        top: -350px;
        left: 50px;
        border-radius: 50%;
        transition: 0.5s;
        box-shadow: 0 0 0 50px rgba(215, 50, 52, 0.2),
          0 0 0 100px rgba(215, 50, 52, 0.2), 0 0 0 150px rgba(215, 50, 52, 0.2),
          0 0 0 200px rgba(215, 50, 52, 0.2), 0 0 0 250px rgba(215, 50, 52, 0.1);
      }
    }
  }
`;
