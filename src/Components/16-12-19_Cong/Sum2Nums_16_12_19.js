import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import Cpn_Table_Bus from './Cpn_Table_Bus/Cpn_Table_Bus';

export class Sum2Nums_16_12_19 extends Component {
    constructor(props) {
        super(props);
        this.state={
            deleteid : '-1',
            editing : true,
            infoBus:[
                {
                    id : '1',
                    name : 'Bus A',
                    from : '1',
                    arrive : '2',
                    numCustomer : '20',
                },
                {
                    id : '2',
                    name : 'Bus B',
                    from : '3',
                    arrive : '4',
                    numCustomer : '15',
                },
                {
                    id : '3',
                    name : 'Bus C',
                    from : '5',
                    arrive : '6',
                    numCustomer : '10',
                },
                {
                    id : '4',
                    name : 'Bus D',
                    from : '6',
                    arrive : '7',
                    numCustomer : '10',
                },
                {
                    id : '5',
                    name : 'Bus E',
                    from : '7',
                    arrive : '8',
                    numCustomer : '10',
                },
                {
                    id : '6',
                    name : 'Bus F',
                    from : '8',
                    arrive : '9',
                    numCustomer : '10',
                },
            ]
        }
    }
    
    calSum = () =>{
        var a = document.getElementById("txt1").value;
        var b = document.getElementById("txt2").value;
        if(isNaN(a)||a=="") //Cách nào cũng đc nhưng này sẽ so cả data type: a === ""
        {
            alert("a phải là số");
            $("#txt1").val("");
            return;
        }
        if(isNaN(b)||b=="")
        {
            alert("b phải là số");
            $("#txt2").val("");
            return;
        }
        
        a= parseInt(a);
        b= parseInt(b);
        document.getElementById("txtkq").value = a+b;
    }
    checkMath = () =>{
        var a = document.getElementById("2a").value;
        var b = document.getElementById("2b").value;
        var c = document.getElementById("2kq").value;
        if(isNaN(a)||a=="") //Cách nào cũng đc nhưng này sẽ so cả data type: a === ""
        {
            alert("a phải là số");
            $("#2a").val("");
            return;
        }
        if(isNaN(b)||b=="")
        {
            alert("b phải là số");
            $("#2b").val("");
            return;
        }
        if(isNaN(c)||b=="")
        {
            alert("c phải là số");
            $("#2kq").val("");
            return;
        }
        
        a= parseInt(a);
        b= parseInt(b);
        c= parseInt(c);
        var pt = document.getElementById("2pt").value;

        if(pt=="+")
        {
            if(c==a+b)
            {
                $("#2kq").css("background","#007bff");
                $("#2kq").css("color","#fff");
            }
            else{
                $("#2kq").css("background","white");
                $("#2kq").val("");
            }
        }
        else if(pt=="-")
        {
            if(c==a-b)
            {
                $("#2kq").css("background","#007bff");
                $("#2kq").css("color","#fff");
            }
            else{
                $("#2kq").css("background","white");
                $("#2kq").val("");
            }
        }
        else if(pt=="*")
        {
            if(c==a*b)
            {
                $("#2kq").css("background","#007bff");
                $("#2kq").css("color","#fff");
            }
            else{
                $("#2kq").css("background","white");
                $("#2kq").val("");
            }
        }
        else if(pt=="/")
        {
            if(c==a/b)
            {
                $("#2kq").css("background","#007bff");
                $("#2kq").css("color","#fff");
            }
            else{
                $("#2kq").css("background","white");
                $("#2kq").val("");
            }
        }
    } 
    getValueInput = () =>{
        return console.log(this.txtName.value);
    }
    showInfoBus = () =>{
        const lstInfoBus = this.state.infoBus.map((item,index) => 
            <div className="col-4" style={{margin: '40px 0'}}>
                <Cpn_Table_Bus key={index} stt={ item.id } name={ item.name } from={ item.from } arrive={ item.arrive } num={ item.numCustomer } />
            </div>
        );
        return lstInfoBus;
    }
    render() {
        // console.log(this.props.ten);
        // console.log(this.props.children);
        console.log('ID cần xóa: '+ this.state.deleteid);
        return (
            <div className="container">
                <div className="row font-weight-bolder text-center">
                    {/* <img src={ this.props.srcImg } alt="iPhone 11" width="100px"/> */}
                    {/* <p style={{margin: "0  38%"}}>{ this.props.ten } biết đến ReactJS nhờ { this.props.children }</p> */}
                </div>
                <Button variant="dark">Adrian</Button>
                {/* <div className="row font-weight-bolder">
                    <div className="col-4">
                        <table border="1">
                            <tbody>
                                <tr>
                                    <td>Nhập a:</td>
                                    <td>
                                        <input type="text" name="a" id="txt1"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nhập b:</td>
                                    <td>
                                        <input type="text" name="b" id="txt2"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="button" name="btnKQ" id="btnKQ" value="Cộng" onClick={ () => this.calSum() }/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kết quả:</td>
                                    <td>
                                        <input type="text" name="kq" id="txtkq"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-4">
                            <table border="1">
                                <tbody>
                                    <tr>
                                        <td>Nhập a:</td>
                                        <td>
                                            <input type="text" name="2a" id="2a"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nhập b:</td>
                                        <td>
                                            <input type="text" name="2b" id="2b"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <select name="2pt" id="2pt">
                                                <option value="+">+</option>
                                                <option value="-">-</option>
                                                <option value="*">x</option>
                                                <option value="/">/</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Kết Quả: 
                                        </td>
                                        <td>
                                            <input type="text" name="2kq" id="2kq"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <input type="button" value="Kiểm tra" onClick={ () => this.checkMath() } />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-8">
                                <input ref={ (input) => {this.txtName = input }} className="form-control" placeholder="Input me please ^^"/>
                            </div>
                            <div className="col-4">
                                <Button className="float-right" variant="danger" onClick={ () => this.getValueInput() }>Get Value</Button>
                            </div>
                        </div>
                    </div>
                </div>  */}
                <br />
                <h5 className="font-weight-bolder">DS CÁC TUYẾN XE BUÝT:</h5> <br />
                <div className="row">
                    { this.showInfoBus() }
                </div>
            </div>
        );
    }
}

export default Sum2Nums_16_12_19;
