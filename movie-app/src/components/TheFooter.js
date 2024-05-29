import { Component } from "../core/heropy";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /*html*/ `
      <div>
        <a href="https://github.com/minji2219">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://velog.io/@minji2219/posts">
          ${new Date().getFullYear()}
          SEOMINJI
        </a>
      </div>
    `;
  }
}
