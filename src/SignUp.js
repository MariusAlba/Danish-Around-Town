import React, { useRef, useState } from "react"
import { Form, Button, Card, Container, Alert } from "react-bootstrap"
import './App.css';
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import BackbuttonToIntro from "./BackbuttonToIntro";

export default function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/LogIn")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center" style={{ marginTop: "30px"}}
      >
        <BackbuttonToIntro />
        <Card className="w-100 border-0" style={{ maxWidth: "300px" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password *</Form.Label>
                <Form.Control type="password" placeholder="Enter password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group controlId="formPasswordConfirm">
                <Form.Label>Confirm Password *</Form.Label>
                <Form.Control type="password" placeholder="Enter password again" ref={passwordConfirmRef} required />
              </Form.Group>
              <div className="text-center">
                  <Button disabled={loading} className="mBt" variant="info" size="md" type="submit">
                    Sign Up
                  </Button>
              </div>
            </Form>
            <div className="text-center mt-3">
              Already have an account? <Link to="LogIn">Log In</Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
  </>
  )
}