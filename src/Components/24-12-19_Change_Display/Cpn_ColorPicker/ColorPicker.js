import React, { Component } from 'react';
import $ from 'jquery';
import { Card, Input, Button, Row, Col } from 'antd';
import './CP.scss';

export class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['crimson','darkblue','darkorange'],
        };
    }
    showColor=(color)=>{
        return {
            backgroundColor : color
        };
    }
    addArrColor = () => {
        var arr = this.state.colors;
        arr.splice(arr.length,0,this.txtColor.state.value);
        this.setState({colors: arr});
        // console.log(this.state.colors);
    }
    delArrColor = () => {
        var arr = this.state.colors;
        var pos = arr.indexOf(this.txtColor.state.value);
        arr.splice(pos,1);
        this.setState({colors: arr});
        // console.log(this.state.colors);
    }
    chooseColor(colorName)
    {
        this.props.onReceiveColor(colorName);
        // return console.log('Choose Color: '+ colorName);
    }
    InsertCol = () => {
        const elmColors = this.state.colors.map((color,index) => {
            return <span 
                className={ this.props.color === color? 'squareColor active': 'squareColor' } 
                key={ index } 
                style={ this.showColor(color) } 
                onClick={ (colorName) => { this.chooseColor(color) } }
                >
                <small>{ color }</small>
            </span>
        })
        return elmColors;
    }
    
    render() {
        return (
            <div>
                <Card className="cardColor" title="COLOR PICKER">
                    <Row justify="center">
                        <Col xl={24} md={18}>
                            <Input id="txtColor" className="mt-20" ref={ (inputCol) => { this.txtColor= inputCol }} placeholder="Input Color"/>
                        </Col>
                        <Col xl={12} md={3}>
                            <Button className="mt-20" type="primary" onClick={ () => this.addArrColor() }>Add Color</Button>
                        </Col>
                        <Col xl={12} md={3}>
                            <Button className="mt-20" type="danger" onClick={ () => this.delArrColor() }>Del Color</Button>
                        </Col>
                    </Row>
                    <br />
                    { this.InsertCol() }
                </Card>
            </div>
        );
    }
}

export default ColorPicker;
