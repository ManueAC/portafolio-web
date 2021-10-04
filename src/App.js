import { makeStyles, Box, Avatar, Typography, Grid } from "@material-ui/core";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import {
  Send,
  LocalPhone,
  Mail,
  Share,
  RemoveRedEye,
  ArrowDownward,
} from "@material-ui/icons";
import kkkk from "./assets/kkkk.jpg";
//on and ando n


const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
    width: "100%",
  },
  content: {
    overflow: "auto",
    background: "#0A0A0A",
    width: "100%",
  },
  container: {
    margin: "30px",
  },
  userAvatar: {
    width: 140,
    height: 140,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#0066FF",
    background: "transparent  0% 0% no-repeat padding-box",
  },
  title: {
    color: "#F9F9F9",
    opacity: 0.9,
    fontSize: "30px",
  },
  icons: {
    color: "#0066FF",
    justifyContent: "center",
  },
  font: {
    color: "#0066FF",
  },
  conts: {
    background: "#212121",
    borderRadius: "5px",
    padding: "8px",
  },
  info: {
    background: "#212121",
    borderRadius: "5px",
    padding: "8px 20px",
    margin: "10px auto",
  },
  infoTitle: {
    color: "#9e9e9e",
  },
  infoCont: {
    margin: "10px auto",
  },
  infoIcons: {
    margin: "8px auto",
    color: "#0066FF",
  },
}));

export const App = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Box className={classes.container}>
          <Box style={{ float: "right" }}>
            <TurnedInNotIcon style={{ color: "#006DFF" }} />
          </Box>
          <br />
          <Box display="flex" flexDirection="column">
            <Box margin="10px auto">
              <Avatar
                src="https://randomuser.me/api/portraits/women/17.jpg"
                className={classes.userAvatar}
              />
            </Box>

            <Box margin="10px auto">
              <Typography className={classes.title}>Daniel Duarte</Typography>
            </Box>
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={3}>
              <Grid container justifyContent="center">
                <Grid
                  container
                  justifyContent="center"
                  className={classes.conts}
                >
                  <Send className={classes.icons} />
                  <Grid item xs={12}>
                    <Typography className={classes.font}>message</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container justifyContent="center">
                <Grid
                  container
                  justifyContent="center"
                  className={classes.conts}
                >
                  <LocalPhone className={classes.icons} />
                  <Grid item xs={12}>
                    <Typography align="center" className={classes.font}>
                      call
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container justifyContent="center">
                <Grid
                  container
                  justifyContent="center"
                  className={classes.conts}
                >
                  <Mail className={classes.icons} />
                  <Grid item xs={12}>
                    <Typography align="center" className={classes.font}>
                      email
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container justifyContent="center">
                <Grid
                  container
                  justifyContent="center"
                  className={classes.conts}
                >
                  <Share className={classes.icons} />
                  <Grid item xs={12}>
                    <Typography align="center" className={classes.font}>
                      share
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            className={classes.infoCont}
          >
            <Grid item xs={12} className={classes.info}>
              <Typography className={classes.infoTitle}>phone</Typography>
              <Typography className={classes.font}>
                +1 (929) 244 - 9595
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.info}>
              <Typography className={classes.infoTitle}>email</Typography>
              <Typography className={classes.font}>
                hello@danielduarte.io
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.info}>
              <Typography className={classes.infoTitle}>website</Typography>
              <Typography className={classes.font}>danielduarte.io</Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              className={classes.info}
            >
              <Grid item xs={8}>
                <Typography className={classes.infoTitle} align="left">
                  resumen
                </Typography>
              </Grid>
              <Grid item className={classes.infoIcons}>
                <RemoveRedEye />
              </Grid>
              <Grid item className={classes.infoIcons}>
                <ArrowDownward />
              </Grid>
              <Grid>
                <img src={kkkk} width="300" alt="img"/>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </main>
    </div>
  );
};

export default App;
