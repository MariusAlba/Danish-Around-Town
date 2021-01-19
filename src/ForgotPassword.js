import React, { useRef, useState } from "react"
import { Form, Button, Card, Container, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link } from "react-router-dom"
import BackbuttonToIntro from "./BackbuttonToIntro";

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
    <BackbuttonToIntro />
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ marginTop: "30px"}}
        >
            <Card className="w-100 border-0 " style={{ maxWidth: "300px" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />
                        </Form.Group>
                        <div className="text-center">
                            <Button disabled={loading} className="mBt" variant="info" size="md" type="submit">
                            Reset Password
                            </Button>
                        </div>
                    </Form>
                    <div className="text-center mt-3">
                        <Link to="/LogIn">Log In</Link>
                    </div>
                    <div className="text-center mt-3">
                        Need an account? <Link to="/SignUp">Sign Up</Link>
                    </div>
                </Card.Body>
            </Card>
      </Container>
    </>
  )
}
