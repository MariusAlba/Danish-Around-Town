import React, { useRef, useState } from "react"
import { Form, Button, Card, Container, Alert } from "react-bootstrap"
import './App.css';
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateUsername } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (usernameRef.current.value !== currentUser.username) {
        promises.push(updateUsername(usernameRef.current.value))
      }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
      >
        <Card className="w-100 border-0 " style={{ maxWidth: "400px" }}>
          <Card.Body>
            <h2 className="text-center mb-4">
              Update Profile
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" ref={usernameRef} required />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Leave blank to keep the same" ref={passwordRef} required />
              </Form.Group>
              <Form.Group controlId="formPasswordConfirm">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Leave blank to keep the same" ref={passwordConfirmRef} required />
              </Form.Group>
            </Form>
            <div className="text-center">
              <Link to="/Profile">
                <Button disabled={loading} className="mBt" variant="info" size="md" type="submit">
                  Update
                </Button>
              </Link>
            </div>
            <div className="text-center mt-3">
              <Link to="Profile"> Cancel </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
  </>
  )
}