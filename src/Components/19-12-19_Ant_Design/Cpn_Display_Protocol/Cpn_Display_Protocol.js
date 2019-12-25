import React, { Component } from 'react';
import './Cpn_Display_Protocol.css'
import { Layout, Carousel, Row, Col } from 'antd';

const { Content } = Layout

export class Cpn_Display_Protocol extends Component{
    render() {
        return (
            <Content>
                <Row>
                    <Col>    
                        <Carousel className="carouselLst" autoplay>
                            <div>
                                <img src='images/19-12-19_Ant_Design_i/sliderImage01.PNG'/>
                            </div>
                            <div>
                                <img src='images/19-12-19_Ant_Design_i/sliderImage02.PNG'/>
                            </div>
                            <div>
                                <img src='images/19-12-19_Ant_Design_i/sliderImage03.PNG'/>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default Cpn_Display_Protocol;
