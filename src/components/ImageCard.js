import React from 'react';

class ImageCard extends React.Component {

    constructor (props) {
        super(props);
        this.state = {noSpan: ''};
        this.imageRef = React.createRef();
    }

    componentDidMount () {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        this.setState({noSpan: Math.ceil(height / 10)});
    }

    render() {
        return (
            <div style={{gridRowEnd: `span ${this.state.noSpan}`}}>
                <img ref={this.imageRef} alt={this.props.image.description} src={this.props.image.urls.regular} />
            </div>
        );
    }
}

export default ImageCard;