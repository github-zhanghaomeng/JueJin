import React, { Component } from "react"
import PropTypes from 'prop-types'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <span className="todo-count"><strong>{this.props.selectCount}</strong> items left</span> 
            <ul className="filters">
                <li><a href="javascripte:;" onClick={()=>this.props.setVisibility('all')} className={this.props.visibility=="all" ? "selected" : ""}>all</a></li>
                <li><a href="javascripte:;" onClick={()=>this.props.setVisibility('active')} className={this.props.visibility=="active" ? "selected" : ""}>active</a></li>
                <li><a href="javascripte:;" onClick={()=>this.props.setVisibility('completed')} className={this.props.visibility=="completed" ? "selected" : ""}>completed</a></li>
            </ul>
            <button className="clear-completed">clear completed</button>
        </footer>
        )
    }
}

Footer.propTypes = {
    visibility:PropTypes.string.isRequired,
    selectCount:PropTypes.number.isRequired,
    setVisibility:PropTypes.func.isRequired
}