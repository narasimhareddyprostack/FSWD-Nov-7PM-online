import React, { Component } from "react";
import Axios from "axios";
class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }
  componentDidMount = () => {
    Axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((resonse) => {
        console.log(resonse.data);
        this.setState({ photos: resonse.data });
      })
      .catch();
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h1>Photo Component</h1>

        <table className="table table-hover">
          <thead>
            <tr>
              <td>Album ID</td>
              <td>Image</td>
              <td>Title</td>
            </tr>
          </thead>
          <tbody>
            {this.state.photos.length > 0 ? (
              <React.Fragment>
                {this.state.photos.map((photo) => {
                  return (
                    <tr key={photo.id}>
                      <td>{photo.id}</td>
                      <td>{photo.title}</td>
                      <td>
                        <img src={photo.thumbnailUrl} />
                      </td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Photo;
