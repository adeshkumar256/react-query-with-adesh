import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function ListUsers({ users }) {
  return (
    <Container style={{ p: 4 }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.designation}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default ListUsers;