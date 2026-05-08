import { useSelector } from "react-redux"

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navItems = [
    {
      name : "Home",
      slug: "/",
      active : !authStatus
    },
    {
      name : "Home",
      slug: "/",
      active : authStatus
    },
    {
      name : "Login",
      slug: "/login",
      active : !authStatus
    },
    {
      name : "Login",
      slug: "/login",
      active : authStatus
    },
    {
      name : "Signup",
      slug: "/signup",
      active : !authStatus
    },
    {
      name : "Signup",
      slug: "/signup",
      active : authStatus
    },
    {
      name : "All Post",
      slug: "/all-posts",
      active : authStatus
    },
    {
      name : "Add Post",
      slug: "/add-post",
      active : authStatus
    }
  ]
  return (
    <div>Header</div>
  )
}

export default Header