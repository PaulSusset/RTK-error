import { Link, useNavigate, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  const navigate = useNavigate()
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Désolé l'application a planté</p>
      <pre style={{ whiteSpace: 'pre' }}>
        {JSON.stringify(error, undefined, 2)}
      </pre>
      <Link to={'/'}>
        <button type={'button'}>Vers l'accueil</button>
      </Link>
    </div>
  )
}
