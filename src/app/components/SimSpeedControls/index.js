import React, {
  Component
} from 'react';
import styled from 'styled-components';
import NumberControls from '../NumberControls';
import seedrandom from 'seedrandom';

const PresetsWrapper = styled.section`
display: flex;
flex: 1;
flex-direction: column;
flex-wrap: wrap;
max-width: 5rem;
margin-left: 0.2em;

button {
    flex:1;
    flex-basis: 50%;
    max-width: 2.5rem;
    min-height: 50%;
}
`

const SimSpeedStyle = styled.section`
width: 200px;
margin: 0.7em;
border: 3px dashed black;

padding: 0.6rem;
background-color: lightgrey;

button {
    box-shadow: 2px 2px #000000A0, 2px -2px #000000A0, -2px 2px #000000A0, -2px -2px #000000A0;
    background-color: transparent;
    border: 2px solid transparent;
    box-sizing: border-box;
    padding: 0;
    border-image-source: url(/sprite-border.gif);
    border-image-slice: 22;
    border-image-repeat: round;
    border-image-width: 35px;
}

main {
    width: 80%;
    margin: auto;
    display: flex;
}
header nav{
    margin: auto;
}
header {
    margin-bottom: 0.5em;
}

header nav {
    width: 80%;
    margin: auto;
    display: flex;
}

header nav button {
    flex: 1;
    font-size: 1.2rem;
    line-height: 1rem;
}

.Play {
    background-color: yellow;
}
.Pause {
    background-color: green;
}
`;


export default class SimSpeedControls extends Component {
    //
    constructor(props){
        super(props);
        this.setSpeed = this.setSpeed.bind(this);
        this.state = {
            simSpeed: props.simSpeed || 15,
            playing: props.playing || false
        };
    }

    setSpeed(simSpeed){
        if(simSpeed <= 0 || simSpeed === "auto"){
            this.setState({simSpeed, playing: false});
        }else{
            this.setState({simSpeed});
        }
    }
    render(){
        let playPause = this.state.playing?
        <button className="Pause" onClick={() => this.setState({playing:false})}>⏸</button> :
        <button className="Play" onClick={() => this.setState({playing:true})}>▶️</button>;


        return <SimSpeedStyle>
        <header>Simulation Speed
                <nav>
                    {playPause}
                </nav> 
        </header>
        <main>
                <NumberControls value={this.state.simSpeed} onChange={(simSpeed) => this.setState({simSpeed})} />
                <PresetsWrapper>
                    <button onClick={() => this.setSpeed(30)}>30</button>
                    <button onClick={() => this.setSpeed(60)}>60</button>
                    <button onClick={() => this.setSpeed(0)}>0</button>
                    <button onClick={() => this.setSpeed("auto")}>Auto</button>
                </PresetsWrapper>
        </main>
        <footer></footer>
        </SimSpeedStyle>
    }
}
