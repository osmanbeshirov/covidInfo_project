import React, { Component } from 'react';

import { Link } from 'react-router-dom'

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
                        <Link className='routLink' to="/news/minister/id='1' ">
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
                        <Link className='routLink' to="minister/id='2' ">
                            <div class="card">
                                <img src={minister} class="card-img-top" alt={minister} />
                                <div class="card-body news-info">
                                    <p className='date-info'>03.01.2021 - 18:31</p>
                                    <p class="card-text">Azərbaycan Respublikasının Prezidenti İlham Əliyev Nyu-Yorkda BMT Baş Assambleyasının COVID-19 ilə mübarizəyə həsr edilmiş dövlət və hökumət başçıları səviyyəsində keçirilən xüsusi sessiyasında çıxış edib</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col">
                        <Link className='routLink' to="minister/id='3' ">
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
                        <Link className='routLink' to="minister/id='4' ">
                            <div class="card">
                                <img src={minister} class="card-img-top" alt={minister} />
                                <div class="card-body news-info">
                                    <p className='date-info'>31.08.2020 - 11:30</p>
                                    <p class="card-text">Azərbaycan Respublikasının Prezidenti İlham Əliyev Fövqəladə Hallar Nazirliyinin Tibb Mərkəzinin koronaviruslu xəstələrin müalicəsi üçün modul tipli hospitalın açılışında videoformatda iştirak edib</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col">
                        <Link className='routLink' to="minister/id='5' ">
                            <div class="card">
                                <img src={minister} class="card-img-top" alt={minister} />
                                <div class="card-body news-info">
                                    <p className='date-info'>29.07.2020 - 11:40</p>
                                    <p class="card-text">Azərbaycan Respublikasının Prezidenti İlham Əliyev İsmayıllıda modul tipli xəstəxananın açılışında iştirak edib</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="col">
                        <Link className='routLink' to="minister/id='6' ">
                            <div class="card">
                                <img src={minister} class="card-img-top" alt={minister} />
                                <div class="card-body news-info">
                                    <p className='date-info'>29.07.2020 - 10:30</p>
                                    <p class="card-text">Qobustanda koronaviruslu xəstələrin müalicəsi üçün nəzərdə tutulan modul tipli xəstəxananın açılışı olub</p>
                                </div>
                            </div>
                        </Link>
                    </div>



                    <button type="button" className="btn btn-success addition">Bir az daha</button>
                </div>
            </React.Fragment>
        )
    }
}
