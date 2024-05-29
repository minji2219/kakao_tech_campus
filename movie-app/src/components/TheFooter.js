import { Component } from "../core/heropy";
import aboutStore from "../store/about";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    const { github, blog } = aboutStore.state;
    this.el.innerHTML = /*html*/ `
      <div>
        <a href=${github}>
          GitHub Repository
        </a>
      </div>
      <div>
        <a href=${blog}>
          ${new Date().getFullYear()}
          SEOMINJI
        </a>
      </div>
    `;
  }
}
