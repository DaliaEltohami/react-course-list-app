import React from "react";

class AddCourse extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.addCourseSubmitHandle}>
          <input
            type="text"
            placeholder="Enter New Course...."
            value={this.props.current}
            onChange={this.props.addInputChangeHandle}
          ></input>
          <button type="submit">Add Course</button>
        </form>
      </>
    );
  }
}

export default AddCourse;
