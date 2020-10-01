import React, { Component, Fragment } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      alcool: 0,
      gasolina: 0
    };
  }

  calc() {
    if (!this.state.alcool || !this.state.gasolina) {
      alert('Digite um valor para calcular');
      return;
    }

    let division = this.state.alcool / this.state.gasolina;

    if (division < 0.7) {
      alert('Abasteça com Álcool!')
    } else {
      alert('Abasteça com gasolina!')
    }
  }

  render() {
    return (
      <Fragment>
        <h3>Descubra o combústivel mais vantajoso! </h3>
        <div>
          <div>
            <label>
              Valor do Álcool
              <input
                type="number"
                min="1"
                max="200"
                value={this.state.alcool}
                onChange={event =>
                  this.setState({ alcool: event.target.value })
                }
              />
            </label>

            <label>
              Valor gasolina
              <input
                type="number"
                min="1"
                max="200"
                value={this.state.gasolina}
                onChange={event =>
                  this.setState({ gasolina: event.target.value })
                }
              />
            </label>
          </div>

          <div>
            <p>
              <button class="waves-effect waves-light btn" onClick={() => this.calc()}>Calcular</button>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}
