import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Box } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 250,
    height: 250
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ProviderCard(props) {
  const classes = useStyles();
  const { provider } = props;
  return (
      <Box>
        {provider && (<Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={provider.attributes['card-image'] || 'data:image/jpeg;base64,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'}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {provider.attributes.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                {provider.attributes.bio}
                </Typography>
                {provider.attributes.subspecialties && (<div><h5>Sub-Specialties</h5><ul>
                    {provider.attributes.subspecialties.map((item) => (
                        // eslint-disable-next-line no-unused-expressions
                        <li>{item}</li>
                ))}
                </ul></div>)}
                </CardContent>
            </div>
            </Card>)}
      </Box>
  );
}
