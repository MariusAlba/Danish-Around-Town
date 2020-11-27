import React, { useRef, useState } from "react"
import { Form, Button, Card, Container, Alert } from "react-bootstrap"
import './App.css';
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import BackbuttonToIntro from "./BackbuttonToIntro";

export default function LogIn() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/Menu")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <BackbuttonToIntro />
      <Container
        className="d-flex align-items-center justify-content-center"
      >
        <Card className="w-100 border-0" style={{ maxWidth: "400px" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
                <Form.Text className="text-muted ml-1">
                  We'll never share your email with anyone else
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password *</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
              </Form.Group>
              <div className="text-center">
                  <Button disabled={loading} className="mBt" variant="info" size="md" type="submit">
                    Log In
                  </Button>
              </div>
            </Form>
            <div className="text-center mt-2">
              <Link to="/ForgotPassword">Forgot Password?</Link>
            </div>
            <div className="text-center mt-3">
            Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
  </>
  )
}