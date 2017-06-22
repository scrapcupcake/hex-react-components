import {Hex, hex_to_pixel, Layout, Point, layout_flat, layout_pointy, hex_stringify} from 'hexs6';
import * as nodeMoji from 'node-emoji';

import React, {
  Component
} from 'react';

const emojiStyle = {
    fontFamily: "Segoe UI Emoji",
    fontSize: "8em",
    transform: "translateX(-37%) translateY(20%)",
    stroke: "white",
    fill: "white",
    "transition": "all 0.5s"
}

export default class HexTile extends Component {
  render() {
      this.state = {};
    //TODO: Remove and replace with a console.warn for unknown emoji
    let emojiCode = this.props.emoji || (this.props.pos?this.props.pos.emoji:undefined) || undefined;
    emojiCode = emojiCode? nodeMoji.get(`:${emojiCode}:`) : '';
    let layout = !!this.props.layout ? this.props.layout : Layout(layout_flat, Point(1, 1), Point(0, 0));
    let posTest = this.props.pos || new Hex(0,0,0);
    let posData = hex_to_pixel(layout, posTest);
    let fill = this.props.fill || "black";

    this.state.left = `${this.props.width * posData.x/2}px`;
    this.state.top = `${this.props.height * -posData.y/2}px`;
    this.styles = {left: this.state.left, top: this.state.top, position:"absolute"};
    this.emojiStyles = Object.assign({},emojiStyle);
    let pointy = layout.orientation === layout_pointy;
    if(pointy){
        this.styles.transform = "rotateZ(-30deg)";
        this.emojiStyles.transformOrigin = "50% 50%";
        this.emojiStyles.transform = "rotateZ(30deg) translateX(-37%) translateY(20%)";
    }
      
    return (
    <svg className="hex"
    style={this.styles}
    viewBox="0 0 300 300"
    height={this.props.height}
    width={this.props.width}>
        <defs>
            <polygon points="300,150 225,280 75,280 0,150 75,20 225,20" id="a"></polygon>
            <clipPath id="b">
                <use xlinkHref="#a"/>
            </clipPath>
        </defs>
        <use xlinkHref="#a"/>
        <g clipPath="url(#b)">
            <use xlinkHref="#a" fill={fill} fillOpacity="1" stroke="#F00" strokeWidth="0"/>
            <text style={this.emojiStyles} className="actor" fill={this.props.emojiColor} x="150" y="150">
                {emojiCode}
            </text>
        </g>
    </svg>
    );
  }
}