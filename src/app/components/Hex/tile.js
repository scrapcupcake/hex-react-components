import {Hex, hex_to_pixel, Layout, Point, layout_flat, layout_pointy} from 'hexs6';
import * as nodeMoji from 'node-emoji';

import React, {
  Component
} from 'react';

export default class HexTile extends Component {
  render() {
      this.state = {};
    //TODO: Remove and replace with a console.warn for unknown emoji
    let emojiCode = nodeMoji.get(`:${this.props.emoji}:`);
    emojiCode = emojiCode ? emojiCode  : '';
    let layout = !!this.props.layout ? this.props.layout : Layout(layout_flat, Point(1, 1), Point(0, 0));
    let posData = hex_to_pixel(layout, this.props.pos);

    let emojiStyle = {color: "red", backgroundColor:"red"};
    this.state.left = `${this.props.width * posData.x/1.8}px`;
    this.state.top = `${this.props.height * -posData.y/1.9}px`;
    this.styles = {position:"absolute", left: this.state.left, top: this.state.top};
      
    return (
    <svg className="hex"
    style={this.styles}
    viewBox="0 0 30 30"
    height={this.props.height}
    width={this.props.width}>
        <defs>
            <path d="M15 0L0 7.5v15L15 30l15-7.5v-15L15 0z" id="a"/>
            <clipPath id="b">
                <use xlinkHref="#a"/>
            </clipPath>
        </defs>
        <use xlinkHref="#a"/>
        <g clipPath="url(#b)">
            <use xlinkHref="#a" fillOpacity="0" stroke="#F00" strokeWidth="0"/>
            <text className="actor" fill={this.props.emojiColor} x="3.5" y="20">
                {emojiCode}
            </text>
        </g>
    </svg>
    );
  }
}
