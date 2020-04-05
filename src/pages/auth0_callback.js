// src/pages/auth0_callback

import React, { useEffect } from "react"

import { useAuth } from "react-use-auth"
import Layout from "../components/layout"

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth()
  useEffect(() => {
    handleAuthentication({ postLoginRoute: "/module-0" })
  }, [])

  return (
    <h1>
      This is the auth callback page, you should be redirected immediately.{" "}
    </h1>
  )
}

export default Auth0CallbackPage