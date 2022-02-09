import "./App.scss"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import Personal from "./components/personal/personal"
import Main from "./components/main/main"

function App() {
  document.title = "Atanas Bekyarov - CV"
	return (
		<Container fluid="md">
			<Row>
				<Col xs={12} md={5} className="side-info-bg">
					<Personal />
				</Col>
				<Col xs={12} md={7}>
					<Main></Main>
				</Col>
			</Row>
		</Container>
	)
}

export default App
