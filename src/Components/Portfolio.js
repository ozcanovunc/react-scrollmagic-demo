import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    let projects =
      this.props.data &&
      this.props.data.map(project => {
        let { title, category, url, image } = project;
        return (
          <div key={project.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={url} title={title}>
                <img alt={title} src={`images/portfolio/${image}`} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{title}</h5>
                    <p>{category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });

    return projects ? (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    ) : (
      <div />
    );
  }
}

export default Portfolio;
