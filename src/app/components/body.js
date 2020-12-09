
import React from 'react';
import Navbar from './navbar';
import Api from '../Api';

class Body extends React.Component {
    test = e => {
        e.preventDefault();
        this.fff();
    }

    fff = async () => {
        try {
            const data = await Api('/test');
            console.log(data);
        } catch (e) {
            console.log('error', e);
        }
        // fetch(proxyUrl)
        //     .then(blob => blob.json())
        //     .then(data => {
        //         console.table(data);
        //         return data;
        //     })
        //     .catch(e => {
        //         console.log(e);
        //         return e;
        //     });
    }

    render() {
        return (<div id="page-wrapper" className="gray-bg">
            <Navbar />
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>Agregar Cliente</h2>
                </div>
            </div>
            <div className="wrapper wrapper-content ">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox">
                            <div className="ibox-title">
                                <h5>Cliente</h5>
                                <div className="ibox-tools">

                                </div>
                            </div>
                            <div className="ibox-content">
                                <button className="btn btn-w-m btn-primary" onClick={this.test}>Test</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Body;



