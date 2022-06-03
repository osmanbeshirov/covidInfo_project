import React, { Component } from 'react';

import logo3 from './photos/arrow-27-35.png'

import {Link} from 'react-router-dom'

import '../Heading/heading.css'

class Heading extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='conta'>
                    <div className='left-aside'>
                        <h1>Çətin günlər geridə qaldı...</h1>
                        <p>Hər keçən gün sağlam həyata bir addım daha yaxınlaşırıq.
                            Pandemiyaya təmamilə qalib gəlmək üçün hər birimiz peyvənd olunmalıyıq.</p>

                        <Link to='/vaccine_stations'>
                            <button type="button" class="btn btn-primary btn-lg"><img src={logo3} width='35' />Vaksinasiya mərkəzləri</button>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Heading;