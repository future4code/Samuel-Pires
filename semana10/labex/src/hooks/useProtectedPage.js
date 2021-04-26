import { useHistory } from "react-router-dom";

export default function useProtectedPage() {
  const history = useHistory()
  const token = window.localStorage.getItem("token")

  if (!token) history.push("/login")
  else return token
}
