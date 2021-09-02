import React, {createRef} from 'react';

class ImageCard extends React.Component {
  constructor (props) {
    super (props);
    this.imageRef = createRef (0);
    this.state = {span: 0};
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil (height / 1) + 5;
    this.setState ({span});
  };

  componentDidMount () {
    this.imageRef.current.addEventListener ('load', this.setSpan);
  }

  render () {
    const {description, urls, key} = this.props.image;
    console.log ('props', this.props);

    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.span}`,
          position: 'relative',
        }}
      >
        <img
          ref={this.imageRef}
          key={key}
          src={urls.regular}
          alt={description}
        />
        <p
          style={{
            display: 'none',
            position: 'absolute',
            width: '200px',
            top: '0px',
            left: '0px',
          }}
        >
          {this.props.counter}
        </p>
      </div>
    );
  }
}

export default ImageCard;
