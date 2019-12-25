import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark">
                    <div className="container">
                    <div className="row">
                    <div className="col-4">
                        <br />
                        <p className="font-weight-bold">APPLE GIANG TRẦN HƯNG ĐẠO</p>
                        <small>4 Trần Hưng Đạo -Phường Phạm Ngũ Lão - Quận 1 - HCM.</small> <br />
                        <small>Hotline : 0963 337 337</small> <br />
                        <small>Giờ làm việc : 9h - 21h ( CN : 18h )</small> <br />
                    </div>
                    {/* /.col-4 */}
                    <div className="col-4">
                        <br />
                        <p className="font-weight-bold">APPLE GIANG BÙI THỊ XUÂN</p>
                        <small>146 Bùi Thị Xuân - Phường Phạm Ngũ Lão - Quận 1 - HCM.</small> <br />
                        <small>Hotline : 0968 337 337</small> <br />
                        <small>Giờ làm việc : 9h - 21h ( CN : 18h )</small> <br />
                    </div>
                    {/* /.col-4 */}
                    <div className="col-4">
                        <br />
                        <p className="font-weight-bold">SỬA CHỮA VÀ BẢO HÀNH APPLE GIANG</p>
                        <small>146 Bùi Thị Xuân - Phường Phạm Ngũ Lão - Quận 1 - HCM.</small> <br />
                        <small>Hotline : 0968 337 337</small> <br />
                        <small>Giờ làm việc : 9h - 21h ( CN : 18h )</small> <br />                
                    </div>
                    {/* /.col-4 */}
                    </div>        
                    <hr className="bg-light" />
                    <div className="row">
                    <div className="col-4">
                        <img src="images/payment.png" alt="" />
                    </div>
                    {/* /.col-4 */}
                    <div className="col-4">
                        <small>
                        Bảo mật thông tin <br />
                        Nguyên tắc &amp; quy định chung <br />
                        Chính sách giao hàng &amp; vận chuyển <br />
                        Chính sách bảo hành <br />
                        Chính sách đổi, trả hàng <br /> 
                        Các phương thức thanh toán <br />
                        </small>
                    </div>
                    {/* /.col-4 */}
                    <div className="col-4">
                        <img src="images/dathongbao.png" height="100px" alt="" style={{marginTop: '25px'}} />
                    </div>
                    {/* /.col-4 */}
                    </div>
                </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
