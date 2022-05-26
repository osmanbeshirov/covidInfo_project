import React, { Component } from 'react'

import '../Footer/footer.css'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div class="footer">
                        <div className="row">
                            <div className='icons'>
                                <a href="https://www.facebook.com/KoronavirusInfoPortali" target='_blank'><i class="fa fa-facebook"></i></a>
                                <a href="https://www.instagram.com/koronavirusinfoaz/" target='_blank'><i class="fa fa-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UCn1bzI10cMV4nXACoIp4ayg" target='_blank'><i class="fa fa-youtube"></i></a>
                            </div>

                        </div>

                        <div className="row content">
                            <ul>
                                <li><a href="#">Azərbaycan Respublikasının Nazirlər Kabineti</a></li>
                                <li><a href="#">Azərbaycan Respublikası Səhiyyə Nazirliyi</a></li>
                                <li><a href="#">İcbari Tibbi Sığorta Üzrə Dövlət Agentliyi</a></li>
                                <li><a href="#">Worl Health Organization</a></li>
                            </ul>
                        </div>

                        <div className="row">
                            <p>© 2022 NAZİRLƏR KABİNETİ YANINDA OPERATİV QƏRARGAH ||
                                BÜTÜN HÜQUQLAR QORUNUR  </p>

                        </div>
                    </div>
                </footer>

            </React.Fragment>
        )
    }
}
