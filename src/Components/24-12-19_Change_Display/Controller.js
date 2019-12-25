import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ColorPicker from './Cpn_ColorPicker/ColorPicker';
import Result from './Cpn_Result/Result';

export class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Color: 'crimson'
        };
    }
    onSetColor = (params) => {
        this.setState({ Color: params});
        console.log(this.state.Color);
        // console.log('onSetColor: ', params);
    }
    render() {
        return (
            <Row gutter={8} justify="center">
                <Col xl={12} md={24}>
                    <ColorPicker color={ this.state.Color } onReceiveColor={ this.onSetColor } />
                </Col>
                <Col xl={12} md={24}>
                    <Result color={ this.state.Color }/>
                </Col>
            </Row>
        );
    }
}

export default Controller;
