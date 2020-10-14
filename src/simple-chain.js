const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  length: 0,
  getLength() {
    return length;
  },
  addLink(value) {
    if (typeof value !== undefined) {
      this.chain.push(`( ${String(value)} )`);
    }
    else {
      this.chain.push("( )");
    }
    this.length++;
    return this;
  },
  removeLink(position) {
    position = Number.isInteger(position) ? parseInt(position) : undefined;
    if (!parseInt(position)) {
      this.chain = [];
      throw new Error();
    }
    if (!position || position > this.chain.length || position < 0) throw new Error(0)
    this.chain.splice(position - 1, 1);
    this.length--;
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let t = this.chain;
    this.chain = [];
    return t.join("~~");
  }
};

module.exports = chainMaker;
