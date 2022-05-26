import React, { Component } from 'react';

import '../Infectioned/infected.css'



class Infectioned extends Component {
    render() {
        return (
            <React.Fragment>

                <div className='main-Table'>
                    <div className='header-title'>
                        <h1>{this.props.header}</h1>

                    </div>
                    <div className='contentTable'>
                        <table id='infected' class="table bg-light table-hover table-striped border-0">
                            <thead>
                                <tr className='bg-primary'>
                                    <th scope="col">ID</th>
                                    <th scope="col">Ad</th>
                                    <th scope="col">Soyad</th>
                                    <th scope="col">Ş.V seriya nömrəsi</th>
                                    <th scope="col">Ərazi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mirzə</td>
                                    <td>Kərimov</td>
                                    <td>AZE №38248537</td>
                                    <td>Bakı</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Səlim</td>
                                    <td>Məmmədov</td>
                                    <td>AZE №38373337</td>
                                    <td>Sumqayıt</td>
                                </tr>
                                {/* <tr>
                                    <th scope="row">3</th>
                                    <td scop="row">Bakı mərkəzi klinika (Pfizer)</td>
                                    <td>Özəl</td>
                                    <td>Səbail rayonu, Zərifə Əliyeva küç. 5</td>
                                    <td>(+99412) 492-10-92</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td scop="row">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr> */}
                                {/* <tr>
                                    <th scope="row">4</th>
                                    <td scop="row">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td scop="row">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr> */}
                               
                            </tbody>
                        </table>

                    </div>
                    <button type="button" disabled='true' className="btn btn-success addition">Bir az daha</button>

                </div>

            </React.Fragment>
        )
    }
}

export default Infectioned;