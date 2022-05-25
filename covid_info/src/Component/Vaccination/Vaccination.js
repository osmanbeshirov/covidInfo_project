import React, { Component } from 'react';

import '../Vaccination/vaccination.css';

class Vaccination extends Component {
    render() {
        return (
            <React.Fragment>

                <div className='mainTable'>
                    <div className='header'>
                        <h1>{this.props.header}</h1>

                    </div>
                    <div className='contentTable'>
                        <table class="table bg-light table-hover table-striped border-0">
                            <thead>
                                <tr className='bg-primary'>
                                    <th scope="col">ID</th>
                                    <th scope="col">Ad</th>
                                    <th scope="col">Tip</th>
                                    <th scope="col">Adres</th>
                                    <th scope="col">Telefon</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>5 nömrəli Şəhər Poliklinikası (Sinovac)</td>
                                    <td>Dövlət</td>
                                    <td>Nəsimi rayonu, Bakıxanov 42</td>
                                    <td>(+99412) 440-39-39</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Bakı sağlamlıq mərkəzi (Pfizer)</td>
                                    <td>Özəl</td>
                                    <td>Bakı, Azadlıq 112</td>
                                    <td>(+99412) 440-00-57</td>
                                </tr>
                                <tr>
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
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td scop="row">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td scop="row">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td scop="row">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td scop="row">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td scop="row">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td scop="row">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <button type="button" className="btn btn-success addition">Bir az daha</button>

                </div>

            </React.Fragment>
        )
    }
}

export default Vaccination;