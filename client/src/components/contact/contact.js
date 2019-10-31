import React, { Component } from 'react'
import Contact from '../home/home-components/contact';

export default class contact extends Component {
    componentDidMount(){
        window.scrollTo(0, 0); 
    }

    render() {
        return (
            <div>
                <Contact />
            </div>
        )
    }
}
