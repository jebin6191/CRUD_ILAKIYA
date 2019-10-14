using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CrudOperation.Models
{
    public class EmployeeModel
    {
        public int? EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public int? DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public double? Salary { get; set; }
        public string Process { get; set; }
    }
}