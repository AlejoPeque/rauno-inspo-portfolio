import React from "react";
import "./post.css";

import { FaLink } from "react-icons/fa";

import PostImage1 from "../../assets/work/work-2.jpg";
import PostImage2 from "../../assets/work/work-7.jpg";

const Post = () => {
  return (
    <div className="container page-post">
      <div className="post-header">
        <div className="post-info">
          <p>Sample Blog Post </p>
          <p>January 2024</p>
        </div>
        <div className="post-link">
          <FaLink size="14px" style={{ color: "hsl(0 0% 60%)" }} />
        </div>
      </div>

      <div className="post-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos impedit
          repellat sapiente, rerum pariatur nesciunt in optio? Adipisci tempore
          eligendi eius accusantium explicabo atque expedita quisquam illum,
          voluptates delectus sequi?
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nulla
          quidem ex quod nihil facilis sint non ullam possimus quisquam vitae id
          maiores aliquam, neque atque odio eos laudantium odit sunt? At atque
          aspernatur error facere voluptatibus nulla nobis! Aliquam suscipit
          dolore rerum omnis nesciunt voluptate. Repudiandae in aliquam et nam
          deserunt animi harum magnam nulla vitae. Similique praesentium tempore
          eveniet pariatur. Sequi perspiciatis qui, aperiam consectetur eaque
          reiciendis nostrum.
        </p>

        <div className="post-img post-img-1">
          <img src={PostImage1} alt="" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia qui
          possimus tempore totam explicabo. Quam commodi aut iusto quos eaque
          deserunt dolore ratione laboriosam numquam consectetur enim quod
          reiciendis sunt molestias, repellat illo ullam animi porro! Nam
          maiores voluptas beatae.
        </p>

        <div className="post-img post-img-2">
          <img src={PostImage2} alt="" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas
          maxime ducimus? Cumque odit soluta quis ipsum dignissimos veritatis,
          quaerat ullam veniam cum ipsam minus iste autem. Quibusdam eum
          accusantium ex suscipit corporis eveniet repudiandae voluptas
          voluptatibus, at voluptatum labore!
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet maxime
          sapiente reiciendis nesciunt? Illum possimus ab alias assumenda sunt,
          ratione repellat nesciunt sapiente earum delectus voluptates nihil
          repellendus, vel aliquid!
        </p>
      </div>

      <div className="white-space"></div>
    </div>
  );
};

export default Post;
