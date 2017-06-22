import React, {
  Component
} from 'react';

export default class HexLife extends Component {
    //Note: This is currently *only* the description portion of this component.
    //In future, this will be expanded to be the container for editing the list 
    //of current simulation populations and their rules.
    //However, as of right now, that's a V2 and on feature. For V1, I've got an explanation of how the 
    //one mode the sim runs, so I'll put it in the spot I want people to expect the UX for
    //this future feature will go. Eventually this actual content will be behind a 'Click to Read' button.
    render(){
        return <section className="HexLife">
            <header>
            <p>The current featured Sim is a <abbr title="Cellular Automata">CA</abbr> based 
            on <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a>.</p>
            </header>
            <main>
            <p>Unlike the other CA examples I have seen, this was written for a Hexagonal grid. 
            This was done because I did not like the properties 
            of either <a href="https://en.wikipedia.org/wiki/Moore_neighborhood">Moore Neighbors</a> or <a href="https://en.wikipedia.org/wiki/Von_Neumann_neighborhood">Von Neumann Neighbors</a>.
             </p>
             <p>
             Largely, this complaint stems from the poor mapping between the distance functions
              used by both of the above and a euclidean plane, causing visible artifacts in the layout.
              Sometimes, especially when modeling human made structures from many cultures, these artifacts 
              are desireable, and create pleasant, sim-city like patterns.
             </p>
             <p>However, I wished to create a set of CA that work with neighbors 
             that are equidistant when mapped to the euclidean plane. I could have gone with triangles, 
             and may subdivide the hexes into triangles eventually. For this version, I went with hex.</p>
             <p>I hope this, along with some jittering and scrambling algorithms, 
             can lead to CA that feel more organic for outdoor, top-down map generation.</p>
             </main>
             <footer>Many thanks to:
             <ul>
                <li><a href="https://twitter.com/numberphile">Numberphile</a> and <a href="https://en.wikipedia.org/wiki/John_Horton_Conway">John Conway</a> for their <a href="http://www.numberphile.com/videos/john_conway_invent.html">episode describing CA</a> that got me interested in the subject recently.</li>
                 <li><a href="https://twitter.com/redblobgames">Amit Patel's</a> excellent articles on  <a href="http://www.redblobgames.com/grids/hexagons/">Hexagon algorithms conceptually</a>  and <a href="www.redblobgames.com/grids/hexagons/implementation.html">Hex implementation guide</a> from which I made my <a href="https://github.com/scrapcupcake/hexs6">hexs6 library</a> which is still very <abbr title="Work in Progress">WIP</abbr>.
                 </li>
                 <li><a href="https://twitter.com/thecodingtrain">The Coding Train</a> for the video series starting with <a href="https://www.youtube.com/watch?v=DKGodqDs9sA">7.1: Cellular Automata - The Nature of Code</a>, 
                 I found these amusing, accessible, and very useful to making sure I was on the right track.</li>
                </ul>
             </footer>
        </section>
    }
}