import React, { Component } from 'react';

export class LeftContent extends Component {
    render() {
        return (
            <div>
                <div className="row-12">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={3} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={4} />
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/slider-mbpro.PNG" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider-ip11pm.PNG" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slder-ipp.PNG" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider-app.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider-aw.PNG" className="d-block w-100" alt="..." />
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>
                {/* /.row */}
            </div>
        );
    }
}

export default LeftContent;
