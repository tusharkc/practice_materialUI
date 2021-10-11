/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "./Slice.User";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
import Auth from "../Auth";
import Button from "@mui/material/Button";
import { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import MenuItem from "@mui/material/MenuItem";

function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  let history = useHistory();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const onSubmit = (data) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);

    const ifHasBike = () => {
      if (data.hasBike != false) {
        return "bike";
      } else {
        return "";
      }
    };

    const ifHasCar = () => {
      if (data.hasCar != false) {
        return "car";
      } else {
        return "";
      }
    };

    const ifHasBoat = () => {
      if (data.hasBoat != false) {
        return "boat";
      } else {
        return "";
      }
    };

    dispatch(
      addUser({
        dateOfBirth: data.dateOfBirth,
        firstName: data.firstName,
        lastName: data.lastName,
        isMarried: data.married,
        hasBike: ifHasBike(),
        hasCar: ifHasCar(),
        hasBoat: ifHasBoat(),
      })
    );

    if (firstName && lastName) {
      Auth.authenticate();
      history.push("/users");
    }
  };

  return (
    <div>
      <Container maxWidth="xl">
        <div className="formBody">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                id="outlined-error-helper-text"
                label="First Name"
                variant="outlined"
                {...register("firstName", { required: "This is Required." })}
              />
              <ErrorMessage errors={errors} name="firstName" />

              <TextField
                style={{ marginTop: 10 }}
                id="outlined-error-helper-text"
                helperText={lastName === "" ? "First Name is required" : null}
                id="filled-required"
                label="Last Name"
                variant="outlined"
                error={lastName === "" ? true : false}
                {...register("lastName", { required: "This is Required." })}
              />
              <ErrorMessage errors={errors} name="lastName" />
            </Grid>
            <FormControl>
              <Select
                style={{ width: 225, margin: 10 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Gender"
                // onChange={handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                style={{ marginTop: 10, width: 225 }}
                required={true}
                id="date"
                label="Birthday"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("dateOfBirth")}
              />
            </Grid>
            <input
              type="radio"
              id="married"
              name="isMarried"
              value="is married"
              {...register("married")}
            />
             <label for="married">Married</label>
            <input
              style={{ marginTop: 20 }}
              type="radio"
              defaultChecked={true}
              id="unMarried"
              name="isMarried"
              value="is unmarried"
              {...register("married")}
            />
             <label for="unMarried">Un Married</label>
            <br />
            <Grid
              style={{ marginTop: 10 }}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <FormControlLabel
                value="bike"
                control={<Checkbox color="primary" />}
                label="Bike"
                labelPlacement="Bottom"
                {...register("hasBike")}
              />

              <FormControlLabel
                value="Car"
                control={<Checkbox color="primary" />}
                label=" Car"
                labelPlacement="Bottom"
                {...register("hasCar")}
              />

              <FormControlLabel
                value="Boat"
                control={<Checkbox color="primary" />}
                label="Boat"
                labelPlacement="Bottom"
                {...register("hasBoat")}
              />
            </Grid>
            <br /> 
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Form;
