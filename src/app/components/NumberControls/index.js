import React from 'react';
import styled from 'styled-components';

const NumberControlWrapper = styled.section`
display: flex;
flex-direction: column;
max-width: 3em;

button {
    flex: 1;
    display: block;
}

input{
    flex: 4;
    display: block;
    text-align: center;
    width: 80%;
    margin: 0.2rem auto;
}
`;

const noChangeStub = (value) => { console.warn(`No error handler for`, value, this) }

export default class NumberControls extends React.Component {
    render(){
        let value = parseInt(this.props.value) || 0;
        let onChange = this.props.onChange? this.props.onChange.bind(this) : noChangeStub.bind(this);
        return  <NumberControlWrapper>
                    <button onClick={() => onChange(value+1)}>⬆️</button>
                    <input type="text" value={value}/>
                    <button onClick={() => onChange(value-1)}>⬇️</button>
                </NumberControlWrapper>

    }
}