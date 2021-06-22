// MUI
import {
    Typography,
    makeStyles,
    Avatar,
    TextField,
    Button,
    Grid
} from '@material-ui/core/';
// React
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router';
// Styles
const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(5),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    avatar: {
        width: 100,
        height: 100,
        marginBottom: theme.spacing(2)
    }
}));

export default function Login() {
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector(store => store.errors);
    const dispatch = useDispatch();

    const login = (event) => {
        event.preventDefault();

        if (username && password) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password,
                },
            });
            // TODO add validation to check if user is registered
            // Send user to either home view or register form
        } else {
            dispatch({ type: 'LOGIN_INPUT_ERROR' });
        };
    }; // end login
    return (
        <Grid container component="main" className={classes.layout}>
            <Grid item xs={12} className={classes.paper}>
                <Avatar className={classes.avatar} style={{ alignSelf: 'center' }} >
                    <img src="/images/OELavatar.png" />
                </Avatar>
                <Typography
                    component="h3"
                    variant="h4"
                    align="center"
                    gutterBottom
                    style={{ color: '#12ae5b' }}
                >
                    Our Economic Lives
                </Typography>
                <form className={classes.form} onSubmit={login} noValidate>
                    {errors.loginMessage && (
                        <h3 className="alert" role="alert">
                            {errors.loginMessage}
                        </h3>
                    )}
                    {/* Input for Username */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="Username"
                        label="Email"
                        name="Username"
                        autoComplete="email"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    {/* input for password */}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        name="password"
                        label="Password"
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        style={{ marginBottom: 20 }}
                    />
                    {/* submit button */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Login
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};