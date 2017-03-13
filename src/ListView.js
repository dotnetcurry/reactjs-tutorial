import React, { Component } from 'react';

export class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: "Alex Kesler",
          designation: "Software Architect",
          project: "URR"
        },
        {
          name: "Raghu Shah",
          designation: "Software Engineer",
          project: "SHU"
        },
        {
          name: "Kim Lee",
          designation: "Intern",
          project: "URR"
        },
        {
          name: "Joe Walsh",
          designation: "Manager",
          project: "SHU"
        },
        {
          name: "Christine Sam",
          designation: "QA Engineer",
          project: "FHD"
        },
        {
          name: "Tim Asermeley",
          designation: "UX Designer",
          project: "FHD"
        },
        {
          name: "Raji Sinha",
          designation: "Tech Lead",
          project: "SHU"
        }
      ]
    };
  }

  filterEmployees() {
    let employees = this.state.employees;
    if (this.props.field && this.props.value) {
      employees = this.state.employees.filter((e) => {
        return e[this.props.field].toLowerCase().indexOf(this.props.value.toLowerCase()) >= 0;
      });
    }
    return employees;
  }

  render() {
    let employees = this.filterEmployees();

    let jsx = <table style={{ display: "inline-table" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>Project</th>
        </tr>
      </thead>
      <tbody>
        {
          employees.map(function (employee) {
            return <tr key={employee.name}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.project}</td>
            </tr>
          })
        }
      </tbody>
    </table>;

    return jsx;
  }
}