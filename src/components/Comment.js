import Image from "next/image";
import React from "react";

function Comment({ comment }) {
  return (
    <div className="h-fit bg-[#FFF] border-[#E5E5E5] rounded-[23px] border-[1px] px-6 py-6 flex flex-col space-y-6">
      {/* Profile */}
      <div className="flex flex-row items-center space-x-4">
        <Image
          src={`/profiles/${comment.picture}`}
          width={56}
          height={56}
          className="rounded-full object-cover"
          alt={`${comment.name}'s Profile Picture`}
        />
        <div className="flex flex-col">
          <p className="text-text leading-[150%]">{comment.name}</p>
          <p className="text-brand leading-[150%]">{comment.title}</p>
        </div>
      </div>

      {/* Comment */}
      <p className="text-text leading-[150%]">{comment.comment}</p>
    </div>
  );
}

export default Comment;
