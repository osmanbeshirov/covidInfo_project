import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import '../News/news.css'

import minister from '../News/photos/minister.png'

export default class News extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='main'>
                    <h1 className='heading'>Xəbərlər</h1>

                    <div className='categories'>
                        <div className='category'>
                            <h4>Azərbaycan Respublikasının Prezidenti</h4>
                        </div>
                        <div className='category'>
                            <h4>Azərbaycan Respublikasının Birinci Vitse-Prezidenti</h4>
                        </div>
                        <div className='category'>
                            <h4>Operativ Qərargah</h4>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <Link className='routLink' to='minister/:id'>
                            <div class="card">
                                <img src={minister} class="card-img-top" alt={minister} />
                                <div class="card-body news-info">
                                    <p className='date-info'>12.01.2021 - 16:00</p>
                                    <p class="card-text">Azərbaycan Respublikasının Prezidenti İlham Əliyevin sədrliyi ilə 2020-ci ilin yekunlarına həsr olunmuş videoformatda müşavirə keçirilib</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col">
                        <Link className='routLink' to='minister/:id'>
                            <div class="card">
                                <img src={minister} class="card-img-top" alt={minister} />
                                <div class="card-body news-info">
                                    <p className='date-info'>12.01.2021 - 16:00</p>
                                    <p class="card-text">Azərbaycan Respublikasının Prezidenti İlham Əliyevin sədrliyi ilə 2020-ci ilin yekunlarına həsr olunmuş videoformatda müşavirə keçirilib</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col">
                        <Link className='routLink' to='minister/:id'>
                            <div class="card">
                                <img src={minister} class="card-img-top" alt={minister} />
                                <div class="card-body news-info">
                                    <p className='date-info'>12.01.2021 - 16:00</p>
                                    <p class="card-text">Azərbaycan Respublikasının Prezidenti İlham Əliyevin sədrliyi ilə 2020-ci ilin yekunlarına həsr olunmuş videoformatda müşavirə keçirilib</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col">
                        <Link className='routLink' to='minister/:id'>
                            <div class="card">
                                <img src={minister} class="card-img-top" alt={minister} />
                                <div class="card-body news-info">
                                    <p className='date-info'>12.01.2021 - 16:00</p>
                                    <p class="card-text">Azərbaycan Respublikasının Prezidenti İlham Əliyevin sədrliyi ilə 2020-ci ilin yekunlarına həsr olunmuş videoformatda müşavirə keçirilib</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col">
                        <Link className='routLink' to='minister/:id'>
                            <div class="card">
                                <img src={minister} class="card-img-top" alt={minister} />
                                <div class="card-body news-info">
                                    <p className='date-info'>12.01.2021 - 16:00</p>
                                    <p class="card-text">Azərbaycan Respublikasının Prezidenti İlham Əliyevin sədrliyi ilə 2020-ci ilin yekunlarına həsr olunmuş videoformatda müşavirə keçirilib</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col">
                        <Link className='routLink' to='minister/:id'>
                            <div class="card">
                                <img src={minister} class="card-img-top" alt={minister} />
                                <div class="card-body news-info">
                                    <p className='date-info'>12.01.2021 - 16:00</p>
                                    <p class="card-text">Azərbaycan Respublikasının Prezidenti İlham Əliyevin sədrliyi ilə 2020-ci ilin yekunlarına həsr olunmuş videoformatda müşavirə keçirilib</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                   
                    
                   
                   
                </div>
            </React.Fragment>
        )
    }
}
