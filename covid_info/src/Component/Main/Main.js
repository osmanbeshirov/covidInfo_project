import React, { Component } from 'react'
import Heading from '../Heading/Heading'
import Infos from '../Infos/Infos'
import News from '../News/News'
import Statistics from '../Statistics/Statistics'
import Vaccination from '../Vaccination/Vaccination'

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Heading/>
                <Statistics header="Statistika" />
                <Vaccination header="Vaksinasiya mərkəzləri" />
                <News/>
                <Infos/>
            </React.Fragment>
        )
    }
}
