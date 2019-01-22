import React, {Component} from 'react'; //need this if we use jsx (React.createElement)

class SearhBar extends Component{

    constructor(props) {
        super(props)
        this.state = {
            term : ''
        };
    }
    render = () => {
        return  (
            <div className="search-bar">
                <input //controlled component - value is set by state
                value = {this.state.term} 
                onChange = { event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearhBar;