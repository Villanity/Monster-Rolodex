import { Component } from "react";
import './search-box.css';
    
class SearchBox extends Component {

    render() {
        return (
            <center>
            <div>
                <input className={`search-box ${this.props.className}`} type='search' placeholder={this.props.placeholder} onChange={this.props.onChangeHandler} />
                </div>
                </center>
        )
    }
}

export default SearchBox;