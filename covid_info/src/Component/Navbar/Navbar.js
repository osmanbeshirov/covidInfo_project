import React, { Component } from 'react';
import logo from '../Navbar/nav_photos/logo.jpg';
import phone from './nav_photos/telephone.png'

import covidLogo from './nav_photos/covidLogo.png'
import emblem from './nav_photos/emblem.png'

import call from './nav_photos/call.png'

import call2 from './nav_photos/phone-call.png'
import "../Navbar/navbar_style.css";


class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" >
                            <a class="navbar-brand" href="#">
                                <img src={emblem} width='200' />
                            </a>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Statistika</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Vaksinasiya</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href='#'>Xəbərlər</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href='#'>Mühüm məlumatlar</a>
                                </li>
                            </ul>
                            <div className='rightSection' data-toggle='modal' data-target='#modal'>
                                <a href='#'>
                                    <img src={call2} width='30'></img>
                                    <span className='phones'>Qaynar xətlər</span>
                                </a>
                            </div>

                            <div className='modal' id='modal'>
                                <div className='modal-dialog modal-lg'>
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h3 class="modal-title">QAYNAR XƏTLƏR!</h3>
                                            <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div>
                                                <p className='consept-title'>AZƏRBAYCAN RESPUBLİKASI NAZİRLƏR KABİNETİ YANINDA OPERATİV QƏRARGAH</p>
                                                <p className='consept-context'>
                                                    <a href='#'>Telefon: (+994 12) 492-41-61,</a>
                                                    <a href='#'>(+994 12) 492-75-54,</a>  <br></br>
                                                    <a href='#'>(+994 12) 505-03-30</a> </p>
                                            </div>
                                            <div>
                                                <p className='consept-title'>AZƏRBAYCAN RESPUBLİKASI XARİCİ İŞLƏR NAZİRLİYİNİN QAYNAR XƏTTİ</p>
                                                <p className='consept-context'> <a href='#'>Telefon:(+994 12) 596-94-49</a> </p>

                                            </div>

                                            <div>
                                                <p className='consept-title'>TƏCİLİ TİBBİ YARDIM</p>
                                                <p className='consept-context'> <a href='#'>Telefon: 103</a></p>
                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bağla</button>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}


export default Navbar;