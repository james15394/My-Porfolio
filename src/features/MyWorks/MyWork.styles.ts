import styled from "styled-components";

export const MyWorkContainer = styled.div`
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #07203f;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1120px) {
    ::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      background: #d73234;
    }
    @media (min-width: 999px) {
      ::after {
        position: absolute;
        content: "My Works";
        top: 10%;
        left: 50%;
        color: rgba(0, 0, 0, 0.3);
        font-size: 5rem;
        font-weight: 1000;
        letter-spacing: 2px;
      }
    }
  }
  .intro {
    width: 400px;
    @media (max-width: 1520px) {
      width: 300px;
    }
    @media (max-width: 1230px) {
      width: 200px;
    }
    @media (max-width: 1120px) {
      display: none;
    }
    background: #d73234;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #fff;
    position: relative;
    z-index: 100;
    ::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.7),
        transparent
      );
      width: 300%;
      height: 100%;
      opacity: 0.2;
      z-index: -1;
    }
    h2 {
      font-size: 3rem;
      @media (max-width: 1230px) {
        font-size: 2rem;
      }
      letter-spacing: 2px;
      font-weight: 800;
      text-transform: uppercase;
    }
    p {
      @media (max-width: 1230px) {
        font-size: 13px;
      }
    }
  }
  .myWork__inner {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 100;
  }
  .myWork__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    perspective: 500px;
    padding: 0 50px;
    @media (min-width: 999px) {
      :hover {
        .myWork__item {
          transform: rotateY(25deg);
        }
      }
    }
    @media (max-width: 430px) {
      padding: 0;
    }
    .myWork__item {
      position: relative;
      width: 250px;
      height: 300px;
      @media (max-width: 999px) {
        margin: 20px;
        width: 300px;
        height: 350px;
        border-radius: 10px;
      }
      @media (max-width: 1400px) {
        width: 200px;
        height: 250px;
      }
      @media (max-width: 1120px) {
        width: 220px;
        height: 280px;
      }
      @media (max-width: 430px) {
        width: 150px;
        height: 200px;
        margin: 10px;
      }
      overflow: hidden;
      transition: 0.5s;
      transform-style: preserve-3d;

      :hover {
        transform: rotate(0deg) scale(1.25);
        z-index: 1;
        box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
        @media (min-width: 999px) {
          ~ .myWork__item {
            transform: rotateY(-25deg);
          }
        }

        .myWork__img {
          ::before {
            opacity: 1;
          }
        }
        .myWork__content {
          transform: translateY(0);
        }
      }
      .myWork__img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;

        ::before {
          position: absolute;
          content: "";
          width: 100%;
          height: 50%;
          bottom: 0;
          left: 0;

          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: 0.5s;
          z-index: 1;
          @media (max-width: 430px) {
            height: 65%;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .myWork__content {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        transform: translateY(200px);
        padding: 20px;
        @media (max-width: 1400px) {
          padding-bottom: 10px;
        }
        transition: 0.5s;
        transform-delay: 0.5s;
        color: #fff;
        z-index: 100;
        button {
          margin-top: 10px;
          font-weight: 500;
          background: #f19f44;
          @media (max-width: 1400px) {
            font-size: 13px;
          }
          a {
            color: #fff;
            letter-spacing: 2px;
          }
        }
        h3 {
          text-transform: uppercase;
          color: #fb4cab;
          text-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
          font-weight: 700;
          @media (max-width: 1400px) {
            font-size: 1rem;
            font-weight: 1000;
          }
        }
        .myWork__des {
          text-align: center;
          @media (max-width: 1400px) {
            font-size: 13px;
          }
        }
      }
    }
  }
`;
