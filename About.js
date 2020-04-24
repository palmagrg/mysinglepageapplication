import React, {Component} from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

class About extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h2>About Page</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed condimentum urna. Sed metus eros, facilisis non nulla ac, rhoncus viverra nisl. Sed tincidunt sagittis sapien at consequat. Integer dapibus bibendum sem. Nunc vehicula mattis dolor condimentum mattis. Etiam facilisis porta ultricies. Mauris non placerat lacus, quis tincidunt elit. Sed lacinia massa ac tellus condimentum, sit amet scelerisque elit lobortis. Nunc interdum, est sit amet suscipit malesuada, dui nulla cursus mi, a porttitor lectus nisi vel augue. Phasellus et lorem turpis. Vestibulum quis est ut eros congue posuere. Vivamus a feugiat justo. Cras dictum ex odio, a mattis libero efficitur vel. 
                </div>
                <Footer />
            </div>
        )
    }
}
export default About;