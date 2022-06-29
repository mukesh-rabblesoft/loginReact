import React, { Fragment } from "react";

class FormData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    let data = this.props.getData;
    return (
      <Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default FormData;
