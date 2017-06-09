import {Hex, hex_to_pixel, create_hex_cells, hex_stringify, hex_hash,
Layout, Point, layout_flat, layout_pointy } from 'hexs6';
import * as nodeMoji from 'node-emoji';
import HexTile from './tile';
import React, {
  Component
} from 'react';

export default class HexMap extends Component {
    init(){
        this.state = {};
        this.styles = {
            position: "relative"
        };


        this.layout = !!this.props.flat ?
            Layout(layout_flat, Point(1, 1), Point(0, 0)) : 
            Layout(layout_pointy, Point(1, 1), Point(0, 0));


        this.state.radius = this.props.radius || 1;
        let cells = create_hex_cells(this.state.radius);
        console.log("Cells?",this.state.radius,cells);
        this.state.cells = cells;
        this.state.cellSize = this.props.cellSize || 30;
    }

    render() {
        this.init();

        this.state.tiles = this.state.cells.map((cell)=>{
                return <HexTile layout={this.layout} pos={cell} key={hex_hash(cell)} 
                height={this.state.cellSize} 
                width={this.state.cellSize}
                emoji="rocket">{cell}</HexTile>;
        });
        return <div style={this.styles} className="hexworld">
            {this.state.tiles}
        </div>
    }
}
