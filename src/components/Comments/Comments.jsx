import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { useSelector } from "react-redux";
import { filter } from "../../redux/filterSlice";

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();
  const commentsFilter = useSelector(filter);
  if (!comments) {
    return;
  }

  const getVisibleComments = () => {
    return comments.filter(({ content }) =>
      content.toLowerCase().includes(commentsFilter.toLowerCase())
    );
  };

  return (
    <Grid>
      {comments &&
        getVisibleComments().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
