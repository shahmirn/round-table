// tslint:disable:no-any
import * as React from 'react';
import { Card, withStyles, CardContent, WithStyles, TextField, CardHeader, Button, Theme } from 'material-ui';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100% - 64px)'
    },
    card: {
        maxWidth: 345,
    },
    textField: {
        width: '100%'
    },
    button: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        width: '100%'
    },
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
    },
    cardHeaderTitle: {
        color: theme.palette.primary.contrastText
    },
    signUpContainer: {
        marginTop: theme.spacing.unit,
        textAlign: 'center'
    }
});

class Register extends React.Component<WithStyles<any>> {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
          [name]: event.target.value,
        });
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardHeader
                        title="Register"
                        className={classes.cardHeader}
                        classes={{ title: classes.cardHeaderTitle }}
                    />
                    <CardContent>
                        <form>
                            <TextField
                                id="firstName"
                                label="First Name"
                                className={classes.textField}
                                value={this.state.firstName}
                                onChange={this.handleChange('firstName')}
                                margin="normal"
                            />
                            <TextField
                                id="lastName"
                                label="Last Name"
                                className={classes.textField}
                                value={this.state.lastName}
                                onChange={this.handleChange('lastName')}
                                margin="normal"
                            />
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                className={classes.textField}
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                margin="normal"
                            />
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                className={classes.textField}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                margin="normal"
                            />
                            <Button variant="raised" size="large" color="primary" className={classes.button}>
                                Register
                            </Button>
                        </form>
                        <div className={classes.signUpContainer}>
                            Already have an account? <Link to="/login">Login</Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles as any)(Register);
