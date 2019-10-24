import React from "react";
import {
  CSSTransition,
  Transition,
  TransitionGroup
} from "react-transition-group";
import "./Anime.scss";
import anime from "animejs";
import "../../assets/images/macbook-pro.jpg";
import isInViewport from "in-viewport";

class Anime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      scrolledToCards: false
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

  cards = [
    {
      title: "Card 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nesciunt."
    },
    {
      title: "Card 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nesciunt."
    },
    {
      title: "Card 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nesciunt."
    },
    {
      title: "Card 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nesciunt."
    },
    {
      title: "Card 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nesciunt."
    },
    {
      title: "Card 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nesciunt."
    }
  ];

  animateCardsReveal = () => {
    const tl = anime.timeline();
    tl.add({
      targets: ".card",
      opacity: [0, 1],
      duration: 400,
      scale: [1.4, 1],
      delay: anime.stagger(170),
      easing: "easeOutExpo"
    });
    tl.add({
      targets: [".card-revealing-text"],
      duration: 800,
      opacity: [0.3, 1],
      translateY: [100, 0],
      easing: "easeOutExpo"
    });
  };

  componentDidMount() {
    this.setState({
      show: true
    });

    document.addEventListener("scroll", e => {
      if (
        isInViewport(this.cardsContainerRef.current) &&
        !this.state.scrolledToCards
      ) {
        this.setState({
          scrolledToCards: true
        });
        this.animateCardsReveal();
      }
    });
  }

  scrollDown = () => {
    window.scrollBy({ top: window.innerHeight + 100, behavior: "smooth" });
  };

  animateFirstSlide = (el, done) => {
    const tl = anime.timeline({
      duration: 600,
      easing: "easeOutExpo",
      complete: done
    });
    tl.add({
      targets: [this.textBoxRef.current, this.imageBoxRef.current],
      translateX: [300, 0],
      opacity: [0, 1],
      delay: 600
    });
    tl.add({
      targets: this.imageBoxOverlayRef.current,
      maxWidth: 0
    });
    tl.add({
      targets: [this.headingRef.current, this.descriptionRef.current],
      translateY: [40, 0],
      duration: 500
    });
    tl.add(
      {
        targets: this.scrollBtnRef.current,
        translateY: [80, 0],
        duration: 500,
        complete: () => {
          anime({
            targets: ".arrow",
            translateX: 5,
            direction: "alternate",
            loop: true,
            easing: "easeInOutSine"
          });
        }
      },
      "-=500"
    );
    tl.add({
      targets: ".scroll-button",
      opacity: [0, 1]
    });
  };

  render() {
    const { show } = this.state;

    return (
      <Transition
        timeout={400}
        in={show}
        unmountOnExit
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
            <TransitionGroup className="cards-container">
              <Transition timeout={4000}>
                <>
                  {this.cards.map(card => (
                    <div className="card" key={card.title}>
                      <h3 className="card-title">
                        <span className="card-revealing-text">
                          {card.title}{" "}
                        </span>
                      </h3>
                      <div className="card-description">
                        <span className="card-revealing-text">
                          {card.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              </Transition>
            </TransitionGroup>
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
