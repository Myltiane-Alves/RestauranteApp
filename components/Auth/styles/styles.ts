import styled from "styled-components";

export const Container = styled.section`
  /* background-image: url("../../../src/assets/img/bg8.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: right;
  background-position-x: center;
  min-height: 300px; */
 .contact-form {
   flex-direction: column;
   background-color: #0081cf;
   padding: 40px;
    header {
      padding-top: 20px;
      align-items: center;
      /* background-color: green; */
      height: 100px;
      a {
          /* display: flex; */
          width: auto;
          cursor: pointer;
          /* background-color: yellow; */
        img {
        align-items: center;
          width: 100%;
          height: 100%;
        }
      }
      p {
        font-size: 16px;
        color: #FFFAFA;
        font-weight: 500;
        text-transform: uppercase;
      }

    }
    form {
      flex-direction: column;
      h1 {
        font-size: 32px;
        font-weight: 500;
        color: #FFFAFA;
        text-align: center;
        text-transform: uppercase;
      }
      flex-direction: column;
      /* padding: 20px; */
      /* width: 80%; */
      .fields {
        .field {

          display: grid;
          flex-direction: column;
          padding-bottom: 16px;

          input {
            font-size: 20px;
            font-weight: bold;
            outline: none;
            line-height: 32px;
            border: none;
            border-bottom: 2px solid #FFFAFA;
            padding: 10px;
            background-color: transparent;
            transition: all 0.3s ease-in-out;
          }
          input:focus {
            background-color: #ededed33;
          }
          input::placeholder {
            color: #FFFAFA;
          }
        }
        .container-btn {
          flex-direction: column;
          .btn {
            border: none;
            border-radius: 3px;
            padding: 10px 30px;
            transition: 0.5s ease-in-out;
            background-color: #FFFAFA;
            width: 100%;
            max-width: 300px;
            height: 60px;
            margin: auto;
            cursor: pointer;
            color: #156ac9;
            font-size: 16px;
            line-height: 32px;
            font-weight: 600;
        }
        .btn:hover {
            background-color: #e9e9e9;
            /* border: 1px solid #FFFAFA; */
            transition: all 0.5s ease-in-out;
            color: #156ac9;

          }
          a {
            display: block;
            font-size: 16px;
            color: #FFFAFA;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            /* border: 1px solid #FFFAFA; */
            border-radius: 3px;
            padding-top: 10px;
            transition: 0.5s ease-in-out;
          }
          a:hover {
            color: #40518a;
          }
        }
      }
    }
    .container-icons {
        padding-top: 30px;
        /* padding-left: 150px; */
        display: flex;
        justify-content: space-between;
        /* width: 400px; */
        /* text-align: right; */
        div {
          width: 100px;
          img {
            width: 50%;
          }
        }
      }
      p {
        font-size: 20px;
        line-height: 36px;
        color: #919191;
      }
  }

  @media (min-width: 768px) {
    .contact-form {
       width: 100%;
       display: flex;
       align-items: center;
      header {
        /* width: 100%; */
        align-items: center;
        display: block;
        a {
          cursor: pointer;
          align-items: center;
          img {
            width: 100%;
          }
        }
      }
      form {
        display: flex;
        align-items: center;
        width: 100%;
        h1 {
          font-size: 40px;
          text-align: initial;
        }
        div {
          input {
            width: 100%;
          }
        }
        .container-btn {
            /* width: 42%; */
            /* background-color: yellow; */
          .btn {
            width: 100%;
          }
        }
      }
    }
  }
  @media (min-width: 1280px) {
    display: flex;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr ;
    /* padding: 0; */
    /* padding: 50px; */
     .contact-form {
      width: 100%;
      padding: 50px;
      /* background-color: red; */
      .form-header {
        display: none;
      }
      width: 100%;
      form {
         /* background-color: yellow; */
        width: 100%;
        .fields {
            width: 35%;
        }
        .container-btn {
          span {
            font-size: 20px;
          }
          .btn {
            font-size: 20px;
            line-height: 36px;
          }
        }
      }

    }
  }
  `;

