import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  .about {
    padding: 20px;
    width: 100%;
    h2 {
      font-size: 32px;
      font-weight: bold;
      line-height: 45px;
      color: #0081cf;
    }

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #919191;
      text-align: left;
    }
    .containerButton {

      padding-bottom: 1rem;
      button {
        /* background-color: #58f6ff; */
        background-color: #0081cf;
        border: none;
        border-radius: 5px;
        width: 200px;
        height: 40px;
        cursor: pointer;
        a {
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
        }
      }
      button:hover {
        background-color: #3d9bd5;
      }
    }
  }
  .containerImg {
    /* background-image: url("../../images/restaurantee.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
    /* width: 400px; */
    width: 100%;
    height: auto;
    padding-top: 1.375rem;

  }
`;
