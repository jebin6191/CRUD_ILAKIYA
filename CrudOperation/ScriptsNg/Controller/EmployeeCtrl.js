
app.controller('EmployeeCtrl', ['$scope', 'EmployeeService',
    function ($scope, EmployeeService) {

        // Base Url 
        var baseUrl = '/api/Employee/';

        $scope.btnText = "Save";
        $scope.EmployeeId = 0;
        $scope.SaveUpdate = function () {
            var Employee = {
                EmployeeName: $scope.EmployeeName,
                DepartmentId: $scope.selectedDepartment.DeptId,
                Salary: $scope.Salary,
                EmployeeId: $scope.EmployeeId
            }
            if (!$scope.IsEditing) {
                var apiRoute = baseUrl + 'SaveEmployee/';
                var saveEmployee = EmployeeService.SaveEmployee(apiRoute, Employee);
                saveEmployee.then(function (response) {
                    if (response.data != "") {
                        alert("Data Save Successfully");
                        $scope.ReadAllEmployee();
                        $scope.Clear();

                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
            else
            {
                var apiRoute = baseUrl + 'UpdateEmployee/';
                var UpdateEmployee = EmployeeService.UpdateEmployee(apiRoute, Employee);
                UpdateEmployee.then(function (response) {
                    if (response.data != "") {
                        alert("Data Update Successfully");
                        $scope.ReadAllEmployee();
                        $scope.Clear();
                     

                    } else {
                        alert("Some error");
                    }

                }, function (error) {
                    console.log("Error: " + error);
                });
            }
        }

        $scope.EditEmployee = function (row) {
            $scope.IsEditing = true;
            $scope.EmployeeName = row.EmpName;
            $scope.EmployeeId = row.EmpId;
            $scope.Salary = row.Salary;

            $scope.Department.forEach(function (item) {
                if (item.DeptId == row.DeptId)
                {
                    $scope.selectedDepartment = item;
                }
            });
        }



        $scope.DeleteEmployee = function (row) {
            debugger
            var Employee = {
              
                EmployeeId: row.EmpId
            }
            var apiRoute = baseUrl + 'DeleteEmployee/';
            var DeleteEmployee = EmployeeService.DeleteEmployee(apiRoute, Employee);
            DeleteEmployee.then(function (response) {
                if (response.data != "") {
                    alert("Data Delete Successfully");
                    $scope.ReadAllEmployee();
                    $scope.Clear();
               

                } else {
                    alert("Some error");
                }

            }, function (error) {
                console.log("Error: " + error);
            });
        }

        $scope.ReadDepartment = function () {
            var apiRoute = baseUrl + 'ReadDepartment/';
            var student = EmployeeService.ReadDepartment(apiRoute);
            student.then(function (response) {
                debugger
                $scope.Department = response.data;

            },
            function (error) {
                console.log("Error: " + error);
            });
        }

        $scope.ReadAllEmployee = function () {
            var apiRoute = baseUrl + 'ReadAllEmployee/';
            var student = EmployeeService.ReadAllEmployee(apiRoute);
            student.then(function (response) {
                debugger
                $scope.EmployeeList = response.data;

            },
            function (error) {
                console.log("Error: " + error);
            });
        }

        $scope.ReadDepartment();
        $scope.ReadAllEmployee();

        $scope.btnText = "Save";
        $scope.IsEditing = false;

        $scope.Clear = function () {
            $scope.EmployeeId = 0;
            $scope.EmployeeName = "";
            $scope.DepartmentId = "";
            $scope.Salary = "";
            $scope.btnText = "Save";
        }
    }]);