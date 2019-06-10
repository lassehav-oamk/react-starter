import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from './Entry.module.css';

export default class Entry extends Component {
    render() {
        return (
            <div className={ styles.centerScreen }>
                <h1>React Router Demo</h1>
                <Link to="/home">
                    <Button>
                        Proceed
                    </Button>
                </Link>
            </div> 
        )
    }
}
