import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { getProblemById } from '../api/api.prod';
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
  root: {
    flexGrow: 1,
    marginTop: 50,
  },
  paper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    width: 150,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function DetailedProblemComponent() {
  const [open, setOpen] = React.useState(false);
  const [problem, setProblem] = React.useState(null);
  const classes = useStyles();

  useEffect(() => {
    getProblemById('6047f039a44f6a15f84f4a2f')
      .then((d) => {
        setProblem(d);
      })
      .catch((e) => {
        console.log(e?.message);
      });
  }, []);
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='md'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              {problem?.name}
            </Typography>
            <div
              style={{
                marginTop: '100px',
                backgroundColor: '#4a47a3',
                padding: 30,
                borderRadius: 8,
              }}
            >
              <Typography
                component='h3'
                variant='body1'
                align='center'
                color='textSecondary'
                style={{ color: 'white' }}
                paragraph
              >
                {problem?.description}
              </Typography>
            </div>
            <div
              style={{
                marginTop: '100px',
                backgroundColor: '#4a47a3',
                padding: 30,
                borderRadius: 8,
              }}
            >
              <Typography
                component='h3'
                variant='body2'
                align='center'
                color='textSecondary'
                style={{
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: 'white',
                }}
                paragraph
              >
                {problem?.io}
              </Typography>
            </div>
          </Container>
        </div>
        <Container maxWidth='sm' style={{ paddingTop: 50, paddingBottom: 50 }}>
          <Typography
            component='h2'
            variant='h3'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Solutions
          </Typography>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                {[0, 1, 2].map((value) => (
                  <Grid key={value} item>
                    <Paper className={classes.paper} />
                  </Grid>
                ))}
                <Grid key='createCode' item>
                  <Paper
                    className={classes.paper}
                    style={{ backgroundColor: '#dddddd' }}
                  >
                    <AddIcon fontSize='large' />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={true}
          maxWidth='md'
          scroll='paper'
          aria-labelledby='scroll-dialog-title'
          aria-describedby='scroll-dialog-description'
        >
          <DialogTitle id='scroll-dialog-title'>{problem?.name}</DialogTitle>
          <DialogContent>
            <SyntaxHighlighter language='java' style={coldarkCold}>
              {problem?.codes[0]?.body}
            </SyntaxHighlighter>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Edit
            </Button>
            <Button onClick={handleClose} color='primary'>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </React.Fragment>
  );
}
/*
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/
