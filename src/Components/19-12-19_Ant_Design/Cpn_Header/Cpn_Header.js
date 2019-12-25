import React, { Component } from 'react';
import { Button, Menu, Layout, Avatar, Dropdown, Icon, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './Cpn_Header.css';

const { Header, Sider, Footer } = Layout
const menu_PH = (
    <Menu className="nav_dropdown_PH">
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            Phác họa
        </a>
        </Menu.Item>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            Giấy
        </a>
        </Menu.Item>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Chì
        </a>
        </Menu.Item>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Gôm
        </a>
        </Menu.Item>
    </Menu>
    );
const menu_B = (
    <Menu className="nav_dropdown_PH">
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            Bút
        </a>
        </Menu.Item>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            Bút Line
        </a>
        </Menu.Item>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Bút Marker
        </a>
        </Menu.Item>
        <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            
        </a>
        </Menu.Item>
    </Menu>
    );

export class Cpn_Header extends Component{
    render(){
        return (
            <div>
                <Header style={{padding:'4px', background: 'white'}}>
                    <img style={{ float: 'left', marginLeft: '-20px' }} className="ant-menu-item" src={ this.props.imgSrc }/>
                    <Menu theme='light' mode="horizontal">
                        <Menu.Item style={{marginLeft: '-470px'}}><b>REGISTER</b></Menu.Item>
                        <Menu.Item><b>LOGIN</b></Menu.Item>
                        <Menu.Item><b>SHOPPING BAG</b></Menu.Item>
                        <Avatar size='large' style={{ float: 'right', marginTop:'3px' }} icon='user'/>
                    </Menu>
                </Header>
                <Row className="row-nav" style={{height:'50px', lineHeight: '40px'}}>
                    <Col span="12">      
                        <Dropdown overlay={menu_PH}>
                            <a className="ant-dropdown-link" href="#">
                            PHÁC HỌA <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Col>
                    <Col span="12">
                        <Dropdown overlay={menu_B}>
                            <a className="ant-dropdown-link" href="#">
                            BÚT <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        );
    }
}
 
export default Cpn_Header;
