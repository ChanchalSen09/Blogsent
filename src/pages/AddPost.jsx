import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
  return (
    <div className="py-24 md:py-28 lg:py-32">
      <Container>
        <div className="max-w-2xl mx-auto">
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
