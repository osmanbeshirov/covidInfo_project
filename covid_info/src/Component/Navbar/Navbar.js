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
                                <img src={emblem} width='200'/>
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
                            <div className='rightSection'>
                                <a href='#'>
                                    <img src={call2} width='30'></img>
                                    <span className='phones'>Qaynar xətlər</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}


export default Navbar;