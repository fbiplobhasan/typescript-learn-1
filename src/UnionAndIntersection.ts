// type UserRole = 'admin' | 'user';

// const getDashboard = (role: UserRole) => {
//     if(role === 'admin'){
//         return 'Admin Dashboard';
//     } else if (role === 'user'){
//         return 'User Dashboard';
//     } else {
//         return 'Guest Dashboard'
//     }
// }
// getDashboard('guest')

// intersection 

type Employee = {
    id: string;
    name: string;
    phonNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager

const ChouDhuriShaheb: EmployeeManager = {
  id: '1234568',
  name: 'Choudhuri Shahed',
  phonNo: '024554854',
  designation: 'manager',
  teamSize: 100

}



