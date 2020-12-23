export const pageAnim = {
	hidden: {
		opacity: 0,
		y: 300,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.75,
			ease: "easeOut",
			when: "beforeChildren",
			staggerChildren: 0.5,
		},
	},
	exit: {
		opacity: 0,
		y: 300,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export const titleAnim = {
	hidden: {
		y: 200,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

export const titleAnimDelayed = {
	hidden: {
		y: 200,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeOut",
			delay: 6.5,
		},
	},
};

export const titleAnim2 = {
	hidden: {
		x: 1000,
	},
	show: {
		x: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

export const fade = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

export const fadeDelayed = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 2,
			ease: "easeOut",
			delay: 7,
		},
	},
};

export const photoAnim = {
	hidden: {
		scale: 1.5,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			ease: "easeOut",
			duration: 1,
		},
	},
};

export const photoAnimDelayed = {
	hidden: {
		scale: 1.5,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			ease: "easeOut",
			duration: 1,
			delay: 8.5,
		},
	},
};

export const slider = {
	hidden: {
		x: "-130%",
		skew: "45deg",
	},
	show: {
		x: "100%",
		skew: "0deg",
		transition: {
			ease: "easeOut",
			duration: 1,
		},
	},
};

export const slideDown = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};
