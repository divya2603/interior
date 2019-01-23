import React, { Component } from 'react';

class Slider extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        slides: props.slides,
        currentIndex: 0,
        translateValue: 0
      }
    }
  
    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if(this.state.currentIndex === this.state.slides.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      
      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth = () => {
       return document.querySelector('.slide').clientWidth
    }
  
    autoSlide() {
			this.timeoutId && clearInterval(this.timeoutId);
      this.timeoutId = setInterval(() => {
        this.goToNextSlide()
      },this.props.slideDuration)
		}
		
		slideFunction() {
			if(this.props.autoSlide) {
				this.autoSlide();
			} else {
				return(
					<div>
						<LeftArrow
							goToPrevSlide={this.goToPrevSlide}
						/>
						<RightArrow
							goToNextSlide={this.goToNextSlide}
						/> 
					</div>
				)
			}
		}

    render() {
      return (
        <div>
            <div className="slider" style={{height : this.props.styles}}>
              <div className="slider-wrapper"
                style={{
                  transform: `translateX(${this.state.translateValue}px)`,
                  transition: `${this.props.transitionEffect}`
                }}>
                  {
                    this.state.slides.map((image, i) => (
                      <Slide key={i} image={image} />
                    ))
                  }
              </div>
              <a className="arrow right" onClick={() => this.slideNext()}></a>
            </div>

            {/* */}
            {this.slideFunction()}
        </div>
      );
    }
  }
  
  
  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
  }
  
  
  const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
  
  
  const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }

export default Slider;