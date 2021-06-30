import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    Resume: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Resume({ resume }) {
    const classes = useStyles();
    return (
        <Card className={classes.Resume}>
            <CardContent>
                <Typography variant='h5' component='h2'>
                    {resume.last_name} {resume.first_name} {resume.middle_name}, {resume.area.name}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                    резюме: #id {resume.id}
                </Typography>
                <Typography variant='body2' component='p'>
                    Возраст: {resume.age} лет.
                </Typography>
                <Typography className={classes.pos} variant='body2' component='p'>
                    {resume.title}
                </Typography>
                <Typography variant='body2' component='p'>
                    Контакты:
                </Typography>
                <Typography variant='body2' component='p'>
                    {resume.contact[0].type.name}: {resume.contact[0].value.formatted}
                </Typography>
                <Typography variant='body2' component='p'>
                    {resume.contact[1].type.name}: {resume.contact[1].value}
                </Typography>
            </CardContent>
        </Card>
    );
}
