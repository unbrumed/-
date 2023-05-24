function contructor() {
  this.refsize_el = null;
  this.canvas = null;
	this.context = null;
	this.width_units = 1;

	return this;
}

export default function UnbrumedCanvas() {
	constructor.apply(this);
	this.pxsize = {
		width: 0,
		height: 0
	}

	/**
	 * @param {HTMLElement} canvas
   * @param {HTMLElement|window} refwidth/height reference element
	 * @param {number} units draw height in unis
	 */
  this.init = (canvas, ref, units) => {
    this.canvas = canvas;
		this.width_units = units;
		this.context = canvas.getContext("2d");
    this.refsize_el = reference;
  };

	/**
	 * units to pixels
	 *
	 * @returns {number} canvas absolute units converted into pixels
	 */
	this.utopx = (units) => {
		return Math.floor(this.unitsize() * units);
	}

	this.pxtou = (pixels) => {
		return pixels / this.unitsize();
	}

	this.unitsize = () => {
		return this.pxsize.width / this.width_units;
	}

	this.uwidth = () => {
		return this.width_units;
	}

	this.uheight = () => {
		return this.pxtou(this.pxsize.height);
	}

  this.update = () => {
    if (this.refsize_el) {
      const width = this.refsize_el.clientWidth ?? this.refsize_el.innerWidth;
      const height = this.refsize_el.clientHeight ?? this.refsize_el.innerHeight;

			this.pxsize.width = width;
			this.pxsize.height = height;

			this.canvas.width = width;
			this.canvas.height = height;
    }
  };
}
