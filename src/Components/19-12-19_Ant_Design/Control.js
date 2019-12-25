import React,{ Component } from 'react';
import Cpn_Header from './Cpn_Header/Cpn_Header';
import Cpn_Display_Protocol from './Cpn_Display_Protocol/Cpn_Display_Protocol';

export class Control extends Component{
    render() {
        return (
            <div className="container">
                <Cpn_Header imgSrc='images/19-12-19_Ant_Design_i/logoAdrian.png' />
                <Cpn_Display_Protocol />
            </div>
        );
    }
}

export default Control;
