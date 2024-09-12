import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const LoginPage = (props) => {
  const router = useRouter();

  const [value, setValue] = useState({
    name: "name@gmail.com",
    password: "123456",
    remember: false,
  });

  const changeHandler = (e) => {
    console.log("values", value);
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = async (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      const payload = { userName: value.name, userPassword: value.password };
      try {
        const respone=await axios.post("/api/login", payload);
        localStorage.setItem("token",respone.data.data)
        toast.success("You successfully Login on Techhira !");
        router.push("/dashboard");
      } catch (err) {
        console.log("error", err);
        toast.error("Somethin went wrong");
      }
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };
  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Name"
                value={value.name}
                variant="outlined"
                name="name"
                label="Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("name", value.name, "required|name")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Password"
                value={value.password}
                variant="outlined"
                name="password"
                type="password"
                label="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("password", value.password, "required")}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formAction">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value.remember}
                      onChange={rememberHandler}
                    />
                  }
                  label="Remember Me"
                />
                <Link href="/forgot-password">Forgot Password?</Link>
              </Grid>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme" type="submit">
                  Login
                </Button>
              </Grid>
              <Grid className="loginWithSocial">
                <Button className="facebook">
                  <i className="fa fa-facebook"></i>
                </Button>
                <Button className="twitter">
                  <i className="fa fa-twitter"></i>
                </Button>
                <Button className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </Button>
              </Grid>
              <p className="noteHelp">
                Don't have an account?{" "}
                <Link href="/register">Create free account</Link>
              </p>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
