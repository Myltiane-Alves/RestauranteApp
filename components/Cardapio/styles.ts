import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: column;
    /* padding-top: 0; */
    /* margin-top: 0; */
    /* background-color: red; */
    height: auto;
    /* margin-bottom: 66rem; */
    header {
      padding-top: 40px;
      h2 {
        color: #0081cf;
        font-size: 32px;
        line-height: 30px;
        font-weight: 700;
        text-align: center;

      }

    }
    .cards {
        flex-direction: column;
        gap: 3rem;
        align-items: center;
        margin-top: 3rem;
        padding: 20px;
        .card {
            text-align: center;
            padding: 3rem 2rem;
            border-radius: 2.5rem;
            box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
            background-color: #fff;
            margin-bottom: 15px;
            img {
                width: 6rem;
                margin-bottom: 1.5rem;
            }
            h3 {
                color: #0081cf;
                font-size: 28px;
                font-weight: 700;
            }
            p {
                font-size: 18px;
                font-weight: 500;
                line-height: 18px;
                color: #5e5e5e;

            }

        }
    }

`;
