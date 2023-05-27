interface iDragger {
  pos: number;
  diff: number;
  isDown: boolean;
  elm: HTMLDivElement;
  handleMouseDown: (e: MouseEvent) => void;
  handleMouseLeave: (e: MouseEvent) => void;
  handleMouseMove: (e: MouseEvent) => void;
  handleMouseUp: (e: MouseEvent) => void;
}

export default class Dragger implements iDragger {
  pos: number;
  diff: number;
  isDown: boolean;
  elm: HTMLDivElement;

  constructor(elm: HTMLDivElement) {
    this.elm = elm;
    this.pos = 0;
    this.diff = 0;
    this.isDown = false;
  }

  handleMouseMove(e: MouseEvent) {
    if (!this.isDown) return;
    this.diff = e.clientX - this.pos;
    this.pos = e.clientX;

    let value = (this.elm.scrollLeft += this.diff);

    this.elm.scrollLeft = value;
  }

  handleMouseLeave(e: MouseEvent) {
    this.isDown = false;
    this.diff = 0;
  }

  handleMouseUp(e: MouseEvent) {
    this.isDown = false;

    let value = this.elm.scrollLeft - this.diff * 60;

    this.elm.scrollLeft = value;
  }

  handleMouseDown(e: MouseEvent) {
    this.isDown = true;
    this.pos = e.clientX;
  }
}
