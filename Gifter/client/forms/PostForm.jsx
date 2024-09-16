import React, { useState } from "react";
import { addPost } from "../src/services/PostService.jsx";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const PostForm = () => {
  const [post, setPost] = useState({});
  const handleSave = () => {
    if (post.title) {
      const singlePost = {
        title: post.title,
        imageUrl: post.imageUrl,
        caption: post.caption,
        userProfileId: 1,
        userProfile: null,
        dateCreated: new Date().toISOString(),
      };

      addPost(singlePost);
    } else {
      window.alert("Please give your post a title!");
    }
  };
  return (
    <Form onSubmit={handleSave}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          onChange={(event) => {
            const postCopy = { ...post };
            postCopy.title = event.target.value;
            setPost(postCopy);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="imageUrl">Image Url</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          type="text"
          onChange={(event) => {
            const postCopy = { ...post };
            postCopy.imageUrl = event.target.value;
            setPost(postCopy);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="caption">Caption</Label>
        <Input
          id="caption"
          name="caption"
          type="text"
          onChange={(event) => {
            const postCopy = { ...post };
            postCopy.caption = event.target.value;
            setPost(postCopy);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Input id="userProfileId" name="userProfileId" type="hidden" />
      </FormGroup>
      <FormGroup>
        <Input id="dateCreated" name="dateCreated" type="hidden" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};
