import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://i.picsum.photos/id/755/768/250.jpg?hmac=aBo4uVPHWfxJeBWGqPt9nVKhUfO9f__gHGwF50ngsLI',
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: 'https://i.picsum.photos/id/863/762/250.jpg?hmac=BldSm4Dg0veTnz8tqu9y85-SGKJrGJWYrU70GGtASRU',
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: 'https://i.picsum.photos/id/1075/762/250.jpg?hmac=cXVe3dq1gqQooBtIml4z74yNu5_t1Hcom37nm9hb2Js',
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;