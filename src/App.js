import React from "react";
import "./App.css";
import AddCourse from "./components/AddCourse";
import CourseItem from "./components/CourseItem";

class App extends React.Component {
  state = {
    courses: [{ name: "CSS" }, { name: "PHP" }, { name: "React" }],
    current: "",
  };

  // Handle Add Input Change

  addInputChangeHandle = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  // Handle Add Course Submit

  addCourseSubmitHandle = (e) => {
    e.preventDefault();
    if (this.state.current === "") {
      alert("Please Enter Course Name");
      return;
    }
    const newCourse = {
      name: this.state.current,
    };
    this.setState({
      courses: [...this.state.courses, newCourse],
      current: "",
    });
  };

  // Handle Delete Course

  deleteCourseHandler = (index) => {
    console.log(index);
    this.setState({
      courses: this.state.courses.filter((course, i) => i !== index),
    });
  };

  // Edit Course Handler

  editCourseHandler = (index, value) => {
    const courses = this.state.courses.map((course, i) => {
      if (i === index) {
        course.name = value;
      }
      return course;
    });
    this.setState({
      courses,
    });
  };

  render() {
    const coursesList = this.state.courses.map((course, index) => {
      return (
        <CourseItem
          course={course}
          key={index}
          index={index}
          deleteCourseHandler={this.deleteCourseHandler}
          editCourseHandler={this.editCourseHandler}
        ></CourseItem>
      );
    });
    return (
      <div className="App">
        <h1>Courses List App</h1>
        <AddCourse
          current={this.state.current}
          addInputChangeHandle={this.addInputChangeHandle}
          addCourseSubmitHandle={this.addCourseSubmitHandle}
        ></AddCourse>
        <ul>{coursesList}</ul>
      </div>
    );
  }
}

export default App;
