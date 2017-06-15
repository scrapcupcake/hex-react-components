import React from 'react';
import { PinterestBoardWidget } from 'react-pinterest';

const styleOverrides = `
            .pinterest-widget--board {
              position: relative;
            }
            li.checked{
              list-style-type:none;
              position: relative;
            }
            li.checked:before {
              content: "✔️";
              display: block;
              position: absolute;
              left: -1.5em;
            }
`;

export default class ProjectPlan extends React.Component {
  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <section>
        <header>
        <h1>Welcome to Hex React components.</h1>
        This project plan is intended for a technical audience. Hello technical audience!
        </header>
        <main>          
          The goal is to provide the following features:
          <ul>
          <li>Be an expansive if not exhaustive example of using hex cells and grids.</li>
          <li>Be an exploration of react for rendering and redux for state management and game simulation modeling.</li>
          <li>Save to LocalStorage the results of some small number of states/snapshots of the petri dish state</li>
          <li>Form the basis of a react/redux/StoryBook(/unit testing goes here?) workflow</li>
          <li>Use Emoji extensively as stand-in for other content, to be replaced as branding is supplied</li>
          <li>Provide a basic petri-dish garden</li>
          <ul>
            <li>initial seeds/configurations being saveable/urlable</li>
            <li>auto-scaling of radius to provide a high quality framerate and good full screen view</li>
            <li>multiple populations</li>
            <li>multiple life strategies</li>
            <li className="checked">Hex-grid version of the <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">CA Game of Life</a></li>
            <li>Still needs integration from previous, angular based project</li>
          </ul>
          <li>Inspiration is drawn heavily from:
            <ul>
              <li><a href="http://www.redblobgames.com/grids/hexagons/">Red Blob Games' Hex Article</a></li>
              <li>and <a href="http://www.redblobgames.com/grids/hexagons/implementation.html">Hex Implementation Article</a></li>
            </ul>
          </li>
          </ul>
          <p>Please see the Project Demo for an example of the project at present.</p>
          <section className=""></section>
        </main>
        <footer>
          <style>{styleOverrides}</style>
            <h1>Mood Board!</h1>
            <PinterestBoardWidget board="hunnietana/hex-inspiration" width={600} height={150} columns={6} />
        </footer>
      </section>
    );
  }
}
