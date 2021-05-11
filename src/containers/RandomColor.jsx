import React, { Component } from 'react';
import Display from '../components/presentation/Display';

export default class RandomColor extends Component {
  state = {
    color: ['#98ddca', '#d5ecc2', '#ffd3b4', '#ffaaa7'],
    bgColor: '#98ddca',
    bgImage: 'none',
  };

  generateRBGColor() {
    const color = randomColor();
    return color;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(
        {
          bgColor: this.generateRBGColor(),
        },
        1000
      );
    });

    //   setInterval(() => {
    //     const { colors, bgColor } = this.state;
    //     const newBg = this.pickColor(colors);
    //     if (newBg === bgColor) {
    //       this.setState({
    //         bgColor: '',
    //         bgImage: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)',
    //       });
    //     } else this.setState({ bgColor: newBg, bgImage: 'none' });
    //   }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { bgColor, bgImage } = this.state;
    return <Display colors={bgColor} bgImage={bgImage} />;
  }
}
