import React from 'react';
class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0};

        this.imageRef = React.createRef();
    }
    componentDidMount() {
        //console.log(this.imageRef); 
        //console.log(this.imageRef.current.clientHeight);
        //para possível erro de leitura de informação da imagem: this.imageRef.current.addEventListener('load',this.setSpans);
        this.imageRef.current.addEventListener('load',this.setSpans);
    }
    setSpans = () => {
         const height = this.imageRef.current.clientHeight; 
         const spans = Math.ceil (height / 10 +1); //essa função calculou e realizou reparo na diferença de tamanho das imagens 
    
        this.setState({spans: spans}); 
        };
    render() { 
        const {description, urls} = this.props.image;
        return ( 
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img
                ref={this.imageRef}
                 alt={description}
                 src={urls.regular}
                 />
            </div>
         );
    }
}
export default ImageCard;
