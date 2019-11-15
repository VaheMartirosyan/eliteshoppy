import React, {Component} from 'react'
import Wear from "../wear/Wear";
import Person from "../wear/person/Person";

export default class Mens extends Component {
    state = {
        wearTitle: 'MEN\'S WEAR'
    }
    render() {
       const {wearTitle} = this.state
        return(
            <div>
                <Wear wear={wearTitle} />
                <Person />
            </div>
        )
    }

}