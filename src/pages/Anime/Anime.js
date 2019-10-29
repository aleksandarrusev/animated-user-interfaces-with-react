import React from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import "./Anime.scss";
import anime from "animejs";
import "../../assets/images/macbook-pro.jpg";
import isInViewport from "in-viewport";
import { cards } from "../../cards";
import DrawingSVG from "../../components/DrawingSVG/DrawingSVG";

class Anime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      scrolledToCards: false,
      scrolledToSvg: false
    };
  }

  textBoxRef = React.createRef();
  imageBoxRef = React.createRef();
  imageBoxOverlayRef = React.createRef();
  headingRef = React.createRef();
  descriptionRef = React.createRef();
  scrollBtnRef = React.createRef();
  arrowRef = React.createRef();
  cardsContainerRef = React.createRef();
  svgContainer = React.createRef();

  componentDidMount() {
    this.setState({
      show: true
    });

    document.addEventListener("scroll", e => {
      const isCardContainerInViewport = isInViewport(
        this.cardsContainerRef.current
      );
      const isSVGContainerInViewport = isInViewport(this.svgContainer.current);

      if (isCardContainerInViewport && !this.state.scrolledToCards) {
        this.setState({ scrolledToCards: true });
        this.animateCardsReveal();
      }

      if (isSVGContainerInViewport && !this.state.scrolledToSvg) {
        this.setState({ scrolledToSvg: true });
        this.animateSVGDraw();
      }
    });
  }

  scrollDown = () => {
    window.scrollBy({ top: window.innerHeight + 100, behavior: "smooth" });
  };

  animateCardsReveal = () => {
    const tl = anime.timeline();
    tl.add(
      {
        targets: ".card",
        opacity: 1,
        duration: 400,
        scale: [1.2, 1],
        delay: anime.stagger(100),
        easing: "easeOutExpo"
      },
      400
    );
    tl.add(
      {
        targets: [".revealing-card-text"],
        duration: 600,
        delay: anime.stagger(140),
        opacity: [0, 1],
        translateY: [100, 0],
        easing: "easeOutExpo"
      },
      "-=400"
    );
    tl.add(
      {
        targets: ".card-button",
        duration: 800,
        opacity: [0, 1],
        scale: [0.3, 1],
        translateY: [50, 0],
        easing: "easeOutExpo"
      },
      "-=400"
    );
  };

  animateSVGDraw = () => {
    anime({
      targets: [".drawing-svg path", ".drawing-svg g"],
      delay: function(el, i) {
        return i * 160;
      },
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      duration: 200
    });
  };
  animateFirstSlide = (el, done) => {
    const tl = anime.timeline({
      duration: 600,
      easing: "easeOutExpo",
      complete: done
    });
    tl.add({
      targets: this.textBoxRef.current,
      translateX: [-300, 0],
      opacity: [0, 1],
      delay: 800
    });
    tl.add(
      {
        targets: this.imageBoxRef.current,
        translateX: [300, 0],
        opacity: [0, 1]
      },
      "-=600"
    );
    tl.add({
      targets: this.imageBoxOverlayRef.current,
      maxWidth: 0
    });
    tl.add({
      targets: [
        this.headingRef.current,
        this.descriptionRef.current,
        this.scrollBtnRef.current
      ],
      translateY: [60, 0],
      duration: 500
    });
  };

  render() {
    const { show } = this.state;

    return (
      <Transition
        timeout={400}
        in={show}
        addEndListener={this.animateFirstSlide}
      >
        <div className="page-container">
          <div className="scroll-container">
            <div className="image-box" ref={this.imageBoxRef}>
              <div
                className="image-box-overlay"
                ref={this.imageBoxOverlayRef}
              />
            </div>
            <div className="text-box" ref={this.textBoxRef}>
              <h3 className="heading-container">
                <span className="heading" ref={this.headingRef}>
                  This is how we use Anime.js
                </span>
              </h3>
              <p className="description-container">
                <span className="description" ref={this.descriptionRef}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, nesciunt.?
                </span>
              </p>
              <div className="button-container">
                <button className="btn-open" ref={this.scrollBtnRef}>
                  Click here to continue{" "}
                  <span className="arrow" ref={this.arrowRef}>
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="scroll-container cards" ref={this.cardsContainerRef}>
            <div className="cards-container">
              {cards.map(card => (
                <div className="card" key={card.title}>
                  <h3 className="card-title revealing-card-text">
                    {card.title}
                  </h3>
                  <div className="card-description revealing-card-text">
                    {card.description}
                  </div>
                  <div className="card-footer">
                    <div className="card-button">+</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="scroll-container svg-container"
            ref={this.svgContainer}
          >
            <DrawingSVG className="drawing-svg" ref={this.drawingSVG} />
          </div>
          <div className="scroll-button" onClick={this.scrollDown}>
            &#8595;
          </div>
        </div>
      </Transition>
    );
  }
}

export default Anime;
