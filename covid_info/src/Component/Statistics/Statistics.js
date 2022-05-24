import React, { Component } from 'react';
import aze from './photos/azerbaijan.png';

import '../Statistics/statistics.css'

class Statistics extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='statMain'>
                    <div className='statHeader'>
                        <h1>{this.props.header}</h1>
                    </div>

                    <div className='stats'>
                        <div className='leftSide'>
                            <img src={aze} width='120'></img>
                            <h3>Ölkədədaxili ümumi vəziyyət</h3>
                        </div>

                        <div className='rightSide'>
                            <div class="card text-bg-light mb-3">
                                <div class="card-header">Virusa yoluxan</div>
                                <div class="card-body">
                                    <h3 className='card-title'>792714</h3>
                                </div>
                            </div>
                            <div class="card text-bg-light mb-3">
                                <div class="card-header">Yeni yoluxan</div>
                                <div class="card-body">
                                    <h3 className='card-title'>2</h3>
                                </div>
                            </div>
                            <div class="card text-bg-light mb-3">
                                <div class="card-header">Sağalan</div>
                                <div class="card-body">
                                    <h3 className='card-title'>782957</h3>
                                </div>
                            </div>
                            <div class="card text-bg-light mb-3">
                                <div class="card-header">Ölüm halı</div>
                                <div class="card-body">
                                    <h3 className='card-title'>9710</h3>
                                </div>
                            </div>
                            <div class="card text-bg-light mb-3">
                                <div class="card-header">Aktiv koronavirus xəstəsi</div>
                                <div class="card-body">
                                    <h3 className='card-title'>47</h3>
                                </div>
                            </div>
                            <div class="card text-bg-light mb-3">
                                <div class="card-header">Vaksinasiya</div>
                                <div class="card-body">
                                    <h3 className='card-title'>13707007</h3>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </React.Fragment>
        )
    }
}

export default Statistics;