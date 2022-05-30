import React, { Component } from 'react';

import '../Infos/infos.css';


import wash from '../Infos/photos/wash-your-hands.png';
import meet from './photos/shaking-hands.png'
import group from './photos/avoid-crowds.png'
import home from './photos/stay-at-home.png';
import old from './photos/old-people.png';
import distance from './photos/social-distancing.png'

export default class Infos extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='mainInfos'>
                    <div className='headerInfos'>
                        <h1>Mühüm məlumatlar</h1>
                    </div>
                    <div className='contentInfos'>
                        <div className='cardInfo'>
                            <div className='cardHeader'>
                                <img src={wash} />
                            </div>
                            <div className='cardContent'>
                                <h4 className='heading-content'>Əllərinizi tez-tez yuyun</h4>
                                <p className='footer-content'>Əllərinizi tez-tez və ən azından 20 saniyə ərzində sabunla yuyun</p>
                            </div>
                        </div>
                        <div className='cardInfo'>
                            <div className='cardHeader'>
                                <img src={meet} />
                            </div>
                            <div className='cardContent'>
                                <h4 className='heading-content'>Əl-ələ görüşməyin</h4>
                                <p className='footer-content'>İctimai yer, ofis və ya evdə şəxslərlə əl-ələ görüşməyin</p>
                            </div>
                        </div>
                        <div className='cardInfo'>
                            <div className='cardHeader'>
                                <img src={group} />
                            </div>
                            <div className='cardContent'>
                                <h4 className='heading-content'>Qruplarda cəmləşməyin</h4>
                                <p className='footer-content'>İctimai yerlərdə 10 nəfərdən artıq qruplarda cəmləşməyin</p>
                            </div>
                        </div>
                        <div className='cardInfo'>
                            <div className='cardHeader'>
                                <img src={home} />
                            </div>
                            <div className='cardContent'>
                                <h4 className='heading-content'>Evdə qalın</h4>
                                <p className='footer-content'>Evdən tez-tez çıxma hallarını azaltmaq məqsədi ilə iki həftəlik dərman, qida və digər zəruri məhsulları tədarük edin</p>
                            </div>
                        </div>
                        <div className='cardInfo'>
                            <div className='cardHeader'>
                                <img src={old} />
                            </div>
                            <div className='cardContent'>
                                <h4 className='heading-content'>Yaşlı insanlar</h4>
                                <p className='footer-content'>Yaşınız 65-dən yuxarıdırsa evdə qalın</p>
                            </div>
                        </div>
                        <div className='cardInfo'>
                            <div className='cardHeader'>
                                <img src={distance} />
                            </div>
                            <div className='cardContent'>
                                <h4 className='heading-content'>Məsafə saxlayın</h4>
                                <p className='footer-content'>İnsanlararası 2 metrlik məsafəni saxlayın</p>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
