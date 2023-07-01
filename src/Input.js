import React from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Input = () => {
    const ITEM_HEIGHT = 38;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const hobbiesNames = ['Cricket', 'PubG', 'Coding', 'Games'];

    const onSubmitForm = (values, props) => {
        console.log(values)
        const data = "Name="+values.name + ", " + "Country="+values.country + ", " + "Gender="+values.gender + ", " + "Address="+values.address + ", " + "HobbiesInterest="+values.hobbiesInterest
        alert(data)
        props.resetForm()
    };

    const initialValues = {
        name: '',
        country: '',
        gender: '',
        address: '',
        hobbiesInterest: [],
    };

    return (
        <div className="container">
            <Formik initialValues={initialValues} onSubmit={onSubmitForm} >
                {(props) => (
                    <Form>
                        <Field
                            as={TextField}
                            id="outlined-basic"
                            label="User Name"
                            name="name"
                            variant="outlined"
                            fullWidth
                            required
                        />


                        <br />
                        <br />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Field
                                as={Select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="country"
                                value={props.values.country}
                                label="Country"
                                onChange={props.handleChange}
                            >
                                <MenuItem value="India">India</MenuItem>
                                <MenuItem value="US">US</MenuItem>
                                <MenuItem value="UK">UK</MenuItem>
                                <MenuItem value="China">China</MenuItem>
                                <MenuItem value="Pakistan">Pakistan</MenuItem>
                            </Field>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <InputLabel id="demo-multiple-checkbox-label">Hobbies & Interest</InputLabel>
                            <Field
                                as={Select}
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                name="hobbiesInterest"
                                multiple
                                value={props.values.hobbiesInterest}
                                onChange={(e) => {
                                    props.handleChange(e);
                                    props.setFieldValue('hobbiesInterest', e.target.value);
                                }}
                                input={<OutlinedInput label="Hobbies & Interest" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {hobbiesNames.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={props.values.hobbiesInterest.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Field>
                        </FormControl>
                        <br />
                        <br />
                        <Field
                            as={TextField}
                            id="outlined-multiline-static"
                            label="Address"
                            name="address"
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <br />
                        <br />
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <Field as={RadioGroup} row aria-labelledby="demo-row-radio-buttons-group-label" name="gender">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </Field>
                        </FormControl>
                        <br />
                        <Button type="submit" variant="contained" >
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Input;