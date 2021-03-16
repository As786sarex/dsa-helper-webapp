import React from 'react';

//material ui
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CreateProblemComponent(props) {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [io, setIo] = React.useState('');
  const [pUrl, setUrl] = React.useState('');

  const verifyAndSubmit = () => {
    const payload = {
      name,
      description,
      io,
      url: pUrl,
    };
    console.log(payload);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <div className={classes.paper}>
              <Typography component='h1' variant='h5'>
                Create Problem
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete='name'
                      name='Problem Name'
                      variant='outlined'
                      required
                      fullWidth
                      value={name}
                      id='pName'
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      label='Problem Name'
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='outlined-description'
                      label='Problem Description'
                      multiline
                      required
                      fullWidth
                      rows={10}
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id='outlined-io'
                      label='Input/Output'
                      multiline
                      required
                      fullWidth
                      rows={10}
                      value={io}
                      onChange={(e) => {
                        setIo(e.target.value);
                      }}
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='url'
                      value={pUrl}
                      onChange={(e) => {
                        setUrl(e.target.value);
                      }}
                      label='Problem Url'
                      name='Problem Url'
                      autoComplete='url'
                    />
                  </Grid>
                </Grid>
                <Button
                  onClick={verifyAndSubmit}
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  Add Problem
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
