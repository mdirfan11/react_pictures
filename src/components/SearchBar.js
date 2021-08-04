import React from 'react';

class SearchBar extends React.Component {

    /* onInputChange = (event) => {
        console.log(event.target.value);
    }

    onInputClick = () => {
        console.log("Input clicked");
    } */

    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        //console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='ui field'>
                        <label><h1>Search Image</h1></label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;