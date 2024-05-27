import { Component } from "../core/heropy";
import movieStore, { searchMovies } from "../store/moveis";

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    movieStore.subscribe("pageMax", () => {
      const { page, pageMax } = movieStore.state;
      page >= pageMax
        ? this.el.classList.add("hide")
        : this.el.classList.remove("hide");
      // pageMax > page
      //   ? this.el.classList.remove("hide")
      //   : this.el.classList.add("hide");
    });
  }

  render() {
    this.el.classList.add("hide");
    this.el.classList.add("btn", "view-more", "hide");
    this.el.textContent = "View more..";
    this.el.addEventListener("click", async () => {
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
