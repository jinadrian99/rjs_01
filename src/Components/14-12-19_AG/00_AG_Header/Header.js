import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-2">
                <a href="index.html"><img src="images/Logo_raw_01.png" width="100px" height="100px" alt="" /></a>
            </div>
            <div className="col-10">
                <div className="row">
                <div className="col-6">
                    <input className="form-control mr-sm-2" type="search" aria-label="Search" placeholder="Tìm kiếm." />
                </div>
                <div className="mng-btn col-6">
                    <button type="button" className="btn btn-dark">SEARCH</button>
                    <button type="button" className="btn btn-dark">LOGIN</button>
                    <button type="button" className="btn btn-dark">REGISTER</button>
                    <button type="button" className="btn btn-dark">
                    <a href="shoppingBag.html" className="text-decoration-none" style={{color: 'azure'}}>
                        <img src="images/icon-shopping-bag.png" alt="" width="20px" height="20px" /> MY BAG
                    </a>
                    </button>
                </div>                     
                </div>
                <div className="row">
                <div className="col-12">
                    <nav className="nav-menu navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle font-weight-bold" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            IPHONE
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="iphone11PM.html">Iphone 11 Pro MAX</a>
                            <a className="dropdown-item" href="">Iphone 11 Pro</a>
                            <a className="dropdown-item" href="">Iphone 11</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="">Iphone XS MAX</a>
                            <a className="dropdown-item" href="">Iphone XS</a>
                            <a className="dropdown-item" href="">Iphone XR</a>
                            <a className="dropdown-item" href="">Iphone X</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="">Phụ kiện</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle font-weight-bold" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            IPAD
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="">Ipad Pro</a>
                            <a className="dropdown-item" href="">Ipad Air</a>
                            <a className="dropdown-item" href="">Ipad Mini</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="">Phụ kiện</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle font-weight-bold" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            MACBOOK
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="">Macbook Pro</a>
                            <a className="dropdown-item" href="">Macbook Air</a>
                            <a className="dropdown-item" href="">Macbook 12"</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="">Phụ kiện</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle font-weight-bold" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            APPLE WATCH
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="">Apple Watch Series 5</a>
                            <a className="dropdown-item" href="">Apple Watch Series 4</a>
                            <a className="dropdown-item" href="">Apple Watch Series 3</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="">Phụ kiện</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle font-weight-bold" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            AIRPODS
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="">Airpods Pro</a>
                            <a className="dropdown-item" href="">Airpods 2</a>
                            <a className="dropdown-item" href="">Airpods</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="">Phụ kiện</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </nav>     
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Header;
