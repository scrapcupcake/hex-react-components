import React from 'react';

class HexMapStateControls extends React.Component {
    render(){
        return (
            <section>
                <header>
                    Hex Map State Controls
                </header>
                <main>
                    <label for="MapRadius">Map Radius</label><input type="number" name="MapRadius" />
                </main>
            </section>
        );
    }
}

export default HexMapStateControls;