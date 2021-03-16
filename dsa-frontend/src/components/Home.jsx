import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Fab from '@material-ui/core/Fab';

import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { getAllProblemNames } from '../api/api.prod';
import homeStyles from '../Home.module.css';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 0.5,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  indicator: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomeComponent() {
  const classes = useStyles();
  const history = useHistory();
  const { data, status } = useQuery('problems', getAllProblemNames);

  const gotoCreate = () => {
    history.push('/create');
  };

  const gotoDetailedPage = (id) => {
    history.push(`/problem/${id}`);
  };
  //console.log(data, status);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={gotoCreate}
                  >
                    Create Problem
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container>
            {data?.map((card) => (
              <Grid item key={card._id} xs={12} sm={4} md={4}>
                <Card
                  className={homeStyles.card}
                  onClick={() => gotoDetailedPage(card._id)}
                  elevation={1}
                >
                  <h3>{card.name} &rarr;</h3>
                  <p>{card.shortDescription}</p>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Fab variant='extended'>Prev</Fab>
              </Grid>
              <Grid item className={classes.indicator}>
                <Typography
                  className={classes.indicator}
                  gutterBottom
                  variant='h5'
                  component='h5'
                >
                  1
                </Typography>
              </Grid>
              <Grid item>
                <Fab variant='extended'>Next</Fab>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

/* <Card
  onClick={() => gotoDetailedPage(card._id)}
  elevation={1}
  className={classes.card}
>
  <CardActionArea>
    <CardContent className={classes.cardContent}>
      <Typography gutterBottom align='center' variant='h5' component='h4'>
        {card.name}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>; */
