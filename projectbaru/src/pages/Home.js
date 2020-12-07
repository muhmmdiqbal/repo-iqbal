import React from "react";
import Example from "./Example";

const Home = () => {
  return (
  <div>
      <Example />
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <h1 class="my-4">Page Heading</h1>
            <div class="card mb-4">
              <img class="card-img-top" src="https://i.picsum.photos/id/129/750/300.jpg?hmac=ZP6IPwDmuEWQjt97EIzN3YPIPLyPUTzgBimA5kE_4lY" alt="title 1"/>
              <div class="card-body">
                <h2 class="card-title">Trending news</h2>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                <a href="#" class="btn btn-primary">Read More &rarr;</a>
              </div>
              <div class="card-footer text-muted">
                Posted on January 1, 2020 by
                <a href="#">Start Bootstrap</a>
              </div>
            </div>

              <div class="card mb-4">
                <img class="card-img-top" src="https://i.picsum.photos/id/628/750/300.jpg?hmac=Bq-bKBSzKQSoPQxCLOoEkG5IWfUjfMnzFTIAOZldnRQ" alt="Card image cap"></img>
                <div class="card-body">
                  <h2 class="card-title">Post Title</h2>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                  <a href="#" class="btn btn-primary">Read More &rarr;</a>
                </div>
                <div class="card-footer text-muted">
                  Posted on January 1, 2020 by
                  <a href="#">Start Bootstrap</a>
                </div>
              </div>

              <ul class="pagination justify-content-center mb-4">
                <li class="page-item">
                  <a class="page-link" href="#">&larr; Older</a>
                </li>
                <li class="page-item disabled">
                  <a class="page-link" href="#">Newer &rarr;</a>
                </li>
              </ul>

        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
