import styled from 'styled-components';

export const Container = styled.section`
  .cards {
    border-radius: 1rem;
    overflow: hidden;
    height: 40rem;
    background: url("../../images/contact.jpg") center no-repeat fixed;
    position: relative;
    .cards::after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #129bf6;
      opacity: 0.2;
      z-index: 0;
    }
    .card {
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 95%;
      h2 {
        flex-direction: column;
        font-size: 2rem;
        font-weight: 700;
        color: #1F2525;
        margin-bottom: 1rem;
        text-align: center;
      }

      form {
        position: relative;
        flex-direction: column;
        .field {
            flex-direction: column;
            input {
               width: 100%;
               height: 40px;
               display: block;
               border-radius: 100px;
               /* padding: 1.5rem 0; */
               text-indent: 32px;
               outline: none;
               border: none;
            }

            input::placeholder {
              color: #9f9f9f;
            }
        }
        .containerButton {
            padding-top: 40px;
            button {

                transform: translateY(-50%);
                width: 100%;
                border-radius: 100px;
                border: none;
                font-size: 18px;
                font-weight: 500;
                color: #fff;
                height: 40px;
                background-color: #0081cf;
            }

        }
      }

    }
  }

  @media (max-width: 768px) {
    .cards {
      form button {
        width: 100%;
      }
    }
  }
  @media (min-width: 1024px) {
    margin-bottom: 100px;
    .cards {
      height: 30rem;
      .card {
        h2 {
          font-size: 2.8rem;
          font-weight: 700;
          color: #1F2525;
        }
        width: 50%;
        form {
          button {
            position: absolute;
            /* top: -37%; */
            width: 25%;
            /* right: 1rem; */
            /* height: 50px; */
            text-align: center;
            padding: 3px;
            font-size: 1rem;
          }
        }
      }
    }
  }
`;


/*
@media (max-width: 1200px) {
   .row {
    height: 40rem;
    .col {
      width: 50%;
      h2 {
       font-size: 3.5rem;
     }
    }
  }
}

@media (max-width: 996px) {
  .row .col {
    width: 70%;
  }
}

@media (max-width: 567px) {
  .row h2 {
    font-size: 2.5rem;
    .col {
      width: 80%;
    }
    form button {
      padding: 1rem 2rem;
    }
  }
}


*/
