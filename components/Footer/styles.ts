import styled from "styled-components";

export const Container = styled.footer`
  background-color: #000;
  padding: 16px;
  display: flex;
  flex-direction: column;
  .content {
    flex-direction: column;
    display: flex;
    .box-1 {
      flex-direction: column;
      display: flex;
      h2 {
        font-size: 32px;
        line-height: 30px;
        font-weight: 700;
        color: #3AB8FB;
      }
      div {
        width: 250px;
        p {
          font-size: 16px;
          line-height: 22px;
          color: #fff;
        }
      }
      .containerIcons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
        img {
          width: 40px;
        }
        span {
          font-size: 16px;
          line-height: 22px;
          color: #fff;
        }
      }
    }
    .box, .boxLink{
      display: flex;
      flex-direction: column;
      h4 {
        font-size: 24px;
        line-height: 20px;
        font-weight: 700;
        color: #3AB8FB;
      }
      ul {
        margin: 0;
        padding: 0;

        li {
          list-style: none;
          font-size: 16px;
          line-height: 22px;
          color: #fff;
          text-align: left;
        }
      }
    }
    /* .boxLink {
      padding-left: 70px;
    } */

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      /* background-color: #111; */
    }

    @media (min-width: 1200px) {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      padding: 50px;
      .boxLink {
        padding-left: 70px;
      }

    }
  }

`;
