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

class Login extends React.Component<WithStyles<any>> {
    state = {
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
                        title="Welcome Back"
                        className={classes.cardHeader}
                        classes={{ title: classes.cardHeaderTitle }}
                    />
                    <CardContent>
                        <form>
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
                                Login
                            </Button>
                        </form>
                        <div className={classes.signUpContainer}>
                            Don't have an account? <Link to="/register">Sign up</Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles as any)(Login);
