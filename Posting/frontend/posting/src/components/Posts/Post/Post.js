import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { ThumbUpAlt, Delete, MoreHoriz } from "@material-ui/icons";
import moment from "moment";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { likePost, deletePost } from "../../../actions/posts";

export default function Post({ post, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{ post.creator}</Typography>
        <Typography variant="body2">{ moment(post.createAt).fromNow() }</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color:"white"}} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHoriz fontSize="default"/>
        </Button>
      </div>
      <div className={classes.details}>
      <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAlt size="small"/>
            Like { post.likeCount }
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <Delete size="small"/>
            Delete
        </Button>
      </CardActions>
    </Card>
  );
}
