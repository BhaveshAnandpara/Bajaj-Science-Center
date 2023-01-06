const particleOptions = {
    fpsLimit: 60,
    backgroundMode: {
        enable: false,
        zIndex: 0
    },
    particles: {
        number: {
            value: 300,
            density: {
                enable: true,
                area: 1000
            }
        },
        color: {
            value: "#230f24",
            animation: {
                enable: true,
                speed: 1,
                sync: true
            }
        },
        shape: {
            type: "circle",
            options: {
                polygon: {
                    sides: 5
                },
                image: {
                    src: "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                    height: 100
                }
            }
        },
        stroke: {
            width: 0
        },
        opacity: {
            value: 0.5,
            random: false,
            animation: {
                enable: false,
                speed: 3,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: false,
                speed: 20,
                minimumValue: 0.1,
                sync: false
            }
        },
        links: {
            enable: true,
            distance: 100,
            color: "#230f24",
            opacity: 0.9,
            width: 1
        },
        move: {
            enable: true,
            speed: 4,
            direction: "right",
            random: false,
            straight: false,
            outMode: "out",
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },

    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 100,
                links: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 100,
                size: 80,
                duration: 10,
                opacity: 0.8
            },
            repulse: {
                distance: 100
            },
            push: {
                quantity: 4
            },
            remove: {
                quantity: 2
            }
        }
    },
    detectRetina: true,
    background: {
        color: "#f0f0f0",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    }
}

export default particleOptions;