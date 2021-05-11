import React, { Component } from 'react';
import Display from '../components/presentation/Display';

export default class RandomColor extends Component {
  state = {
    colors: ['#98ddca', '#d5ecc2', '#ffd3b4', '#ffaaa7'],
    bgColor: '#98ddca',
    bgImage: 'none',
  };

  componentDidMount() {
    setInterval(() => {
      const { colors, bgColor } = this.state;
      const newBg = this.pickColor(colors);
      if (newBg === bgColor) {
        this.setState({
          bgColor: '',
          bgImage:
            'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)',
        });
      } else this.setState({ bgColor: newBg, bgImage: 'none' });
    }, 1000);
  }

  pickColor = (colors) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  };

  render() {
    const { bgColor, bgImage } = this.state;
    return <Display colors={bgColor} bgImage={bgImage} />;
  }
}
