import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }

    }
    render() {
        return (
                <div className="search-bar col-md-offset-4 col-md-8">
                    <input
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)} 
                        placeholder="Search YouTube"/>
                </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;