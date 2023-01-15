import React from "react";
import Comment from "./Comment";

const comments = [
  {
    id: 1,
    name: "Marilyn Siphron",
    title: "Remix and React Training",
    picture: "profile1.png",
    comment:
      "Tellus mauris adipiscing dignissim sodales. Id dui venenatis mollis faucibus.",
  },
  {
    id: 2,
    name: "Adison Westervelt",
    title: "Senior Proogram Manager at Microsoft",
    picture: "profile2.png",
    comment:
      "Hendrerit diam a, morbi tristique egestas commodo ullamcorper ut. Aenean ipsum tempus, felis nibh amet mollis id sem sit. Venenatis aliquam tellus viverra nullam. Consequat cras ac donec nunc.",
  },
  {
    id: 3,
    name: "Marley Siphron",
    title: "Jobs",
    picture: "profile3.png",
    comment:
      "Habitant ut augue eu accumsan tellus ultrices integer. Gravida elementum egestas tellus condimentum bibendum suspendisse ut. Blandit.",
  },
  {
    id: 4,
    name: "Marley Siphron",
    title: "Remix and React Training",
    picture: "profile4.png",
    comment:
      "Libero in egestas pellentesque purus, nullam. Consectetur commodo odio interdum neque ullamcorper sit.",
  },
  {
    id: 5,
    name: "Adison Westervelt",
    title: "Senior Proogram Manager at Microsoft",
    picture: "profile5.png",
    comment:
      "Orci penatibus luctus felis in aliquam adipiscing. Vulputate condimentum ullamcorper pellentesque dictumst fusce.",
  },
  {
    id: 6,
    name: "Marley Siphron",
    title: "Jobs",
    picture: "profile6.png",
    comment:
      "Vitae purus ipsum eget leo at sed facilisi nisl. Ornare suspendisse netus in nunc eget facilisis accumsan gravida nisl.",
  },
];

function Comments() {
  return (
    <div className="w-full relative">
      <div className="py-3 md:py-4 px-4 mx-auto grid grid-cols-1 gap-9 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto md:max-w-3xl xl:max-w-7xl">
        {comments.map((comment, index) => (
          <Comment comment={comment} />
        ))}
      </div>

      <div className="w-full absolute bottom-0 h-1/2 bg-gradient-to-t from-[#FFF] to-[rgba(255, 255, 255, 0)]"></div>
    </div>
  );
}

export default Comments;
