import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AuthLayout({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    // note: page need authentication and also need authStatus be true but authStatus false so go to login
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }

    //note: page don't want authentication but user logged in so to
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    /* note: 
        if page: flase and authStatus: false -> show those pages like login, signup, home
        if page: true and authStatus: true -> show those pages like remaining pages */
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChecked(true);
  }, [authStatus, authentication, navigate]);

  return checked ? <div>{children}</div> : null;
}

export default AuthLayout;
