import React from 'react';

class SearchBar extends React.Component { //criou método para receber a informação que o usuário digitou, função chamada com onChange={this.onInputChange} dentro do input text, não colocar parenteses dentro da função no REACT para que a função possa ser chamada no futuro
   // onInputChange(Event){ 
       //console.log(Event.target.value); // imprimiu no console, é preciso declarar o Event como props
    //}

    //onInputClick(Event){ //mesmo exemplo do onchangem com o onClick, no input text = onClick={this.onInputClick} 
       // console.log('Input was clicked');
    //}
    //recurso opcional para dentro do input text arrow function (e)=>console.log(e.target.value)
    //onChange={(e) => this.setState({term: e.target.value.toUpperCase()}) }, fez com que todas as letras fossme maiúsculas na barra de pesquisa.

    //resolvendo erro de type undefine: this.drive = this.drive.bind(this); or
    // definir arrow function apos o evento chamado  exemplo 1, or
    //

    state = {term :''};

    onFormSubmit = (Event) => { //evita que o formulário se submeta automaticamente ai clicar nele e não chama o evento, exemplo 1
        Event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() { 
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field"> 
                        <label>Image Search</label>
                          <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value}) }
                            /> 
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;