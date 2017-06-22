import {Hex, hex_to_pixel, create_hex_cells, hex_stringify, hex_hash,
Layout, Point, layout_flat, layout_pointy } from 'hexs6';
import HexTile from '../HexTile';
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
            Layout(layout_flat, Point(1, 1), Point(0, 0)):
            Layout(layout_pointy, Point(1, 1), Point(0, 0));

        this.state.radius = this.props.radius || 1;
        let cells = !!this.props.cells ? this.props.cells : create_hex_cells(this.state.radius);
        console.log("Cells?",cells);
        this.state.cells = cells;
        this.state.cellSize = this.props.cellSize || 30;
        this.styles.left = `${250}px`;
        this.styles.top = `${150}px`;
        this.styles.padding = 0;
        this.styles.margin = 0;
        this.styles.height = `${400}px}`;
    }

    render() {
        this.init();

        
        this.state.tiles = this.state.cells.map((cell)=>{
                return <HexTile layout={this.layout} pos={cell} key={hex_hash(cell)} 
                height={this.state.cellSize} 
                width={this.state.cellSize}>{cell}</HexTile>;
        });
        let inherit_props = {
            height: this.state.cellSize, width: this.state.cellSize,
            layout: this.layout
        }
        if(this.props.children){
            let processed_children = React.Children.map(this.props.children, 
            (child) => {
                switch(child.type){
                    case HexTile:
                        return React.cloneElement(child, inherit_props);
                    default:
                    return child;
                }
            });
            this.state.tiles = [...this.state.tiles,...processed_children];

        }
        /*{[...this.state.tiles,...this.props.children]}*/
        return <div style={this.styles}>
            {this.state.tiles}
        </div>
    }
}
