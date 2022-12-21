import styled from 'styled-components';

export const Container = styled.section`
    flex-direction: column;
    /* padding-top: 0; */
    /* margin-top: 0; */
    /* background-color: red; */
    /* height: auto; */
    margin-bottom: 40px;
    padding: 20px;
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
        /* gap: 3rem; */
        align-items: center;
        text-align: -webkit-center;
        margin-top: 32px;
        .card {
            text-align: center;
            padding-top: 50px;
            padding: 30px;
            width: 335px;
            border-radius: 2.5rem;
            box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
            background-color: #fff;
            margin-top: 40px;
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
    .containerButton {
        padding-top: 50px;
        /* display: flex; */
        text-align-last: center;
        button {
        align-items: center;

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




    @media (min-width: 767px) {
        .cards {
            display: grid;
            grid-template-columns: 1fr 1fr ;
            .card {
              width: 250px;
            }
        }
    }

    @media (min-width: 1024px) {
        /* margin-bottom: 10rem; */
        header {
            padding-top: 50px;
            h2 {
                font-size: 48px;
                font-weight: 700;
            }

        }
        .cards {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            justify-items: center;
            .card {
                h4 {
                    font-size: 1.5rem;
                }
            }
        }
    }
`;
