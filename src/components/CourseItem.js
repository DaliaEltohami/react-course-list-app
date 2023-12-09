import React from "react";

class CourseItem extends React.Component {
  state = {
    toggleEdit: false,
    editedValue: "",
  };

  // Edit Toggle Handler
  editToggleHandler = () => {
    this.setState({
      toggleEdit: !this.state.toggleEdit,
    });
  };

  // Edit Submit Handler

  editSubmitHandler = () => {
    if (this.state.editedValue === "") {
      alert("Please Enter New value");
      return;
    }
    this.props.editCourseHandler(this.props.index, this.state.editedValue);
    this.editToggleHandler();
  };

  render() {
    const courseItemUI = (
      <li>
        <span>{this.props.course.name}</span>
        <button onClick={this.editToggleHandler}>Edit Course</button>
        <button
          onClick={() => {
            this.props.deleteCourseHandler(this.props.index);
          }}
        >
          Delete Course
        </button>
      </li>
    );

    const editCourseUI = (
      <>
        <input
          type="text"
          placeholder="Enter the New Name"
          value={this.state.editedValue}
          onChange={(e) => {
            this.setState({
              editedValue: e.target.value,
            });
          }}
        ></input>
        <button type = "submit" onClick={this.editSubmitHandler}>Submit</button>
      </>
    );

    return <>{this.state.toggleEdit ? editCourseUI : courseItemUI}</>;
  }
}

export default CourseItem;
