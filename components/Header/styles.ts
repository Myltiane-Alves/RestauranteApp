import styled from 'styled-components';

export const Container = styled.section`
  flex-direction: column;
  background: url('../../images/banner-1-1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 1rem;
  padding: 10px;
  height: auto;
  header {

    padding-bottom: 20px;
    h1 {
      color: #F7F0F3;
      font-size: 36px;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    p {
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        color: #FFF;
    }
    button {
      background-color: #0081cf;
      font-weight: bold;
      color: #fff;
      border-radius: 5%;
      /* padding: 1rem 2rem; */
      width: 150px;
      height: 50px;
      border: none;
      font-weight: 500;
      transition: 0.2s;
      cursor: pointer;
      .link {

        display: inline-block;
        font-weight: bold;
        color: #fff;
        border-radius: 5rem ;
        padding: 1rem 2rem;
        border: none;
        font-weight: 500;
        transition: 0.2s;
        cursor: pointer;
        text-decoration: none;
      }
  }

  }

  .form {
    form {
      border-top: 10px solid #3AB8FB;
      background: rgba(0, 0, 0, 0.5);
      flex-direction: column;
      /* padding-top: 20px; */
      padding: 20px;
      width: 360px;
      p {
        font-size: 25px;
        font-weight: 500;
        line-height: 25px;
        color: #fff;
      }
      .fields {
        flex-direction: column;
      }
      .field {

        position: relative;
        flex-direction: column;
        margin-bottom: 20px;
        label {
        font-size: 16px;
        color: #fff;
        position: absolute;
        top: 15px;
        left: 15px;
        z-index: 2;
        }
        .label{
        color: #fff;
        font-size: 20px;
        height: 40px;
        }
        input,  select {
            border: 1px solid;
            line-height: 0.5em;
            padding: 10px;
            padding-top: 25px;
            font-size: 16px;
            outline: none;
            border-radius: 10px;
            position: relative;
            z-index: 1;
            width: 100%;
            color: #FFF;
            background-color: transparent;
            &:focus {
                border-color: gray;
                + label {
                color: gray;
                }
            }
            option {
            color:  #3AB8FB;
            }
        }
      }
      .actions {
        button {

            background-color: #0081cf;
            font-weight: bold;
            color: #fff;
            border-radius: 5%;
            /* padding: 1rem 2rem; */
            width: 150px;
            height: 50px;
            border: none;
            font-weight: 500;
            transition: 0.2s;
            cursor: pointer;
        }
      }
    }

  }

`;

