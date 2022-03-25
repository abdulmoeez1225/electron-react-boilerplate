import TableData from 'components/TableData';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddData from 'components/AddData';
// import icon from '../../assets/icon.svg';

// const Hello = () => {
//   return (
//     <div>
//       <div className="Hello">
//         <img width="200px" alt="icon" src={icon} />
//       </div>
//       <h1>electron-react-boilerplate</h1>
//       <div className="Hello">
//         <a
//           href="https://electron-react-boilerplate.js.org/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               📚
//             </span>
//             Read our docs
//           </button>
//         </a>
//         <a
//           href="https://github.com/sponsors/electron-react-boilerplate"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               🙏
//             </span>
//             asdasds
//           </button>
//         </a>
//         <Link to="/addData">Add Data</Link>
//       </div>
//     </div>
//   );
// };

export default function App() {
  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <NavItem>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </NavItem> */}
                <NavItem>
                  <Nav.Link as={Link} to="/">
                    All Data
                  </Nav.Link>
                </NavItem>{' '}
                <NavItem>
                  <Nav.Link as={Link} to="/addData">
                    Add Data
                  </Nav.Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          {/* <Route path="/" element={<Hello />} /> */}
          <Route path="/" element={<TableData />} />
          <Route path="/addData" element={<AddData />} />
        </Routes>
      </Router>
    </>
  );
}
