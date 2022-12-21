import React from 'react';

import { Container } from './styles';

const Header = () => {
  return (

    <Container>

      <header>
        <h1>
          Prove os
          melhores Deliciosos
          pratos.
        </h1>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eaque accusantium delectus veritatis nemo enim rem assumenda totam!
            Hic doloribus dolorum molestias cupiditate vel exercitationem,
            dolores repudiandae mollitia itaque consequuntur aliquam?
        </p>
        <button>
          
            Cardápio
       
        </button>
      </header>

      <div className="form">
        <form>

          <p>Reserva de Mesa</p>

          <div className="fields">
            <div className="field">
              <label > Nome Completo </label>
              <input type="text" name="name" />
            </div>

            <div className="field">
              <label>Email </label>
              <input type="email" name="emai" />
            </div>

            <div className="field">
              <select name="Pessoas" id="">
                <option> -- Quantas Pessoas -- </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>

            <div className="field">

              <input type="date" name="birth_at" />
            </div>
            <div className="field">
              <label>Hora</label>
              <input type="time" name="birth_at" />
            </div>
          </div>

          <div className="actions">

            <button type="submit">
              Reservar
            </button>
          </div>
        </form>
      </div>

       {/* <FormSchedule /> */}
    </Container>

  )
}

export default Header;
