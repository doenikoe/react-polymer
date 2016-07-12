import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import View from 'react-flexbox';

class App extends Component{
    render(){
        return(
            <div className={styles.content}>
                <View row>One</View>
                <View row>Two</View>
                <View row>Three</View>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));