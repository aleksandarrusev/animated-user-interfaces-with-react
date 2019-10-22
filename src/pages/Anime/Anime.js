import React, {useState, useEffect} from "react";
import {CSSTransition, Transition} from "react-transition-group";
import './Anime.css';
import anime from "animejs";
import '../../assets/images/macbook-pro.jpg';

const Anime = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);


    return (
        <Transition
            timeout={400}
            in={show}
            unmountOnExit
            addEndListener={(el, done) => {
                const tl = anime.timeline(
                    {
                        duration: 600,
                        easing: 'easeInExpo',
                        complete: done,
                    }
                );
                tl.add({
                    targets: ['.text-box', '.image-box'],
                    translateX: show ? [300, 0] : [0, 300],
                    opacity: show ? [0, 1] : [1, 0],
                    delay: show ? 400 : 0,
                });
                tl.add({
                    targets: '.image-box-overlay',
                    maxWidth: 0,
                });
                tl.add({
                    targets: ['.heading', '.description'],
                    translateY: [40, 0],
                    duration: 500,
                });
                tl.add({
                    targets: '.btn-open',
                    translateY: [80, 0],
                    duration: 500,
                    complete: () => {
                        anime({
                            targets: '.arrow',
                            translateX: 5,
                            direction: 'alternate',
                            loop: true,
                            easing: 'easeInOutSine'
                        },);

                    }
                }, '-=500');

            }}
        >
            <div style={{height: '100%'}}>
                <div className="scroll-container">
                    <div className="image-box">
                        <div className="image-box-overlay"></div>
                    </div>
                    <div className="text-box">
                        <h3 className="heading-container">
                            <span className="heading">This is how we use Anime.js</span>
                        </h3>
                        <p className="description-container">
                            <span className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nesciunt?</span>
                        </p>
                        <div className="button-container">
                            <button className="btn-open">Click here to continue <span className="arrow">&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="scroll-container">
                    <div className="2image-box">
                        <div className="image-box-overlay"></div>
                    </div>
                    <div className="2text-box">
                        <h3 className="heading-container">
                            <span className="heading">This is how we use Anime.js</span>
                        </h3>
                        <p className="description-container">
                            <span className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nesciunt?</span>
                        </p>
                        <div className="button-container">
                            <button className="btn-open">Click here to continue <span className="arrow">&rarr;</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </Transition>)
};

export default Anime;