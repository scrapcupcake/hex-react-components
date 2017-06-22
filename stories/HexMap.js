import React from 'react';

import { storiesOf } from '@storybook/react';

import HexMap from "../src/app/components/Hex";
import HexTile from "../src/app/components/HexTile";
import styled from 'styled-components';
import {Hex, Point, hex_add, hex_direction_names_horizontal, hex_direction_names_vertical, hex_direction,
     hex_stringify, Layout, layout_flat, layout_pointy, hex_rotate_left, hex_rotate_right,
    hex_neighbor, wraparound_bounds} from 'hexs6';

const HexMapWrap = styled.div`
height: 500px;
width: 500px;
position: relative;
left: 100px;
top: 150px;
`

const HexMapCenterWrap = styled.div`
height: 700px;
width: 700px;
position: relative;
left: 200px;
top: 250px;
`

let stories = storiesOf('HexMaps', module).
add('Radius 1', () => <HexMapWrap><HexMap radius="1" /></HexMapWrap> ).
add('Radius 3', () => <HexMapWrap><HexMap radius="3" /></HexMapWrap>).
add('Radius 7', () => <HexMapCenterWrap><HexMap radius="7" /></HexMapCenterWrap>);

let center = Hex(0,0,0);
let pointy_layout = Layout(layout_pointy, Point(1, 1), Point(0, 0));
 hex_direction_names_horizontal.forEach((direction_name) => {
    let direction = hex_add(center,hex_direction(direction_name));
    stories.add(`Pointy Directions ${direction_name}`, () => {
        return <HexMapWrap>
        <HexTile fill="darkred" layout={pointy_layout} height={30} width={30} pos={center}/>
        <HexTile fill="green" layout={pointy_layout} height={30} width={30}  pos={direction}/>
        </HexMapWrap>
    });
});

let flat_layout = Layout(layout_flat, Point(1, 1), Point(0, 0));
hex_direction_names_vertical.forEach((direction_name) => {
    let direction = hex_add(center,hex_direction(direction_name, false));
    stories.add(`Flat Directions ${direction_name}`, () => {
        return <HexMapWrap>
        <HexTile fill="darkred" layout={flat_layout} height={30} width={30} pos={center}/>
        <HexTile fill="green" layout={flat_layout} height={30} width={30}  pos={direction}/>
        </HexMapWrap>
    });
});

let greenChild = hex_add(center, hex_direction("NorthEast")); //Todo, find a more fluent way to write these :p
greenChild = wraparound_bounds(greenChild ,2);
let greenChild2 = hex_add(greenChild, hex_direction("NorthEast"));
greenChild2 = wraparound_bounds(greenChild2,2);
let greenChild3 = hex_add(greenChild2, hex_direction("NorthEast"));
greenChild3 = wraparound_bounds(greenChild3 ,2);
let redChild = hex_add(greenChild3, hex_direction("SouthEast"));
redChild = wraparound_bounds(redChild,2);
let redChild2 = hex_add(redChild, hex_direction("NorthEast"));
redChild2 = wraparound_bounds(redChild2,2);
let redChild3 = hex_add(redChild2, hex_direction("NorthEast"));
redChild3 = wraparound_bounds(redChild3,2);
let whiteChild=wraparound_bounds(hex_add(redChild3,hex_direction("NorthWest")),2);
let whiteChild2=wraparound_bounds(hex_add(whiteChild,hex_direction("West")),2);
let whiteChild3=wraparound_bounds(hex_add(whiteChild2,hex_direction("West")),2);

stories.add("Radius 3 wraparound tests", () => 
<HexMapWrap><HexMap flat={false} radius={3}>
<HexTile fill="lightgreen" emoji="1" pos={greenChild}/>
<HexTile fill="green" emoji="2" pos={greenChild2}/>
<HexTile fill="darkgreen" emoji="3" pos={greenChild3}/>
<HexTile fill="darkred" emoji="4" pos={redChild}/>
<HexTile fill="red" emoji="5" pos={redChild2}/>
<HexTile fill="black" emoji="6" pos={redChild3}/>
<HexTile fill="black" emoji="7" pos={whiteChild}/>
<HexTile fill="black" emoji="8" pos={whiteChild2}/>
<HexTile fill="black" emoji="9" pos={whiteChild3}/>
</HexMap></HexMapWrap>);
//stories.add('Radius 3 with two children, wraparound test');


let twoOut = hex_rotate_right(hex_add(hex_add(hex_add(center,hex_direction(0)), hex_direction(0)),hex_direction(0)));
let left_tile = hex_rotate_left(twoOut);
let left_left = hex_rotate_left(left_tile);
let right_tile = hex_rotate_right(twoOut);
let right_right = hex_rotate_right(right_tile);
stories.add("Rotations are correct", () => {
    return <HexMapWrap>
        <HexTile layout={pointy_layout} height={30} width={30} pos={center}/>
        <HexTile layout={pointy_layout} height={30} width={30}  pos={twoOut}/>
        <HexTile fill="red" layout={pointy_layout} height={30} width={30}  pos={left_tile}/>
        <HexTile fill="darkred" layout={pointy_layout} height={30} width={30}  pos={left_left}/>
        <HexTile fill="lightgreen" layout={pointy_layout} height={30} width={30}  pos={right_tile}/>
        <HexTile fill="darkgreen" layout={pointy_layout} height={30} width={30}  pos={right_right}/>
    </HexMapWrap>
});

let neighbor = hex_neighbor(Hex(1,-3,2), 2);
let origin =  Hex(1, -3, 2);
stories.add("Neighbors are correct", () => {
    return <HexMapWrap>
        <HexTile fill="red" layout={pointy_layout} height={50} width={50}  pos={origin}/>
        <HexTile fill="darkgreen" layout={pointy_layout} height={50} width={50}  pos={neighbor}/>
    </HexMapWrap>
});

export default stories;