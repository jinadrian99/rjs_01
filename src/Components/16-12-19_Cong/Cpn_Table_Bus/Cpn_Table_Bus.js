import React, { Component } from 'react';
import './Cpn_Table_Bus.css'

export class Cpn_Table_Bus extends Component{
    render() {
        return (
            <table className="tableBus" border={1}> 
                <tbody>
                    <tr>
                        <td>
                            STT:
                        </td>
                        <td>
                            { this.props.stt }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Tên Tuyến:
                        </td>
                        <td>
                            { this.props.name }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Từ: 
                        </td>
                        <td>
                            Quận { this.props.from }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Đến:
                        </td>
                        <td>
                            Quận { this.props.arrive }
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Số lượng KH: 
                        </td>
                        <td>
                            { this.props.num }
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
} 

export default Cpn_Table_Bus;