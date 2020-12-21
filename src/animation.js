export const pageAnim = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.5
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export const titleAnim = {
    hidden: {
        y:200
    },
    show: {
        y:0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}

export const titleAnim2 = {
    hidden: {
        x:1000
    },
    show: {
        x:0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}

export const fade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}

export const photoAnim = {
    hidden: {
        scale: 1.5,
        opacity: 0
    },
    show: {
        scale:1,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 1
        }
    }
}

export const slider = {
    hidden: {
        x: '-130%',
        skew: '45deg'
    },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            ease: "easeOut",
            duration: 1
        }
    }
}

export const slideDown = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity:1,
        transition: {
            duration: 1,
            ease: "easeOut"
        } 
    }
}