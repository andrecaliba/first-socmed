import { useState } from 'react';
const Post = ({ caption, liked, likes, comments, srcURL, user }) => {
  const [like, setLike] = useState(liked);
  const likeHandler = () => {
    setLike(!like);
  }
  return (
    // parent
    <div className="p-6 w-1/2 border-b border-black">
      <div className={`w-full h-96 bg-cover`} style={{ backgroundImage: `url(http://localhost:3000/api/posts/${srcURL})` }}></div>
      {/* options */}
      <div className="flex pt-2">
        {like ? <svg className="hover:scale-110 cursor-pointer transition-transform" onClick={likeHandler} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#C51104"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" /></svg> :
        <svg className="hover:scale-110 cursor-pointer transition-transform" onClick={likeHandler} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6a463a"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>}
        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
      </div>
      <div>
        <p className="font-bold">{likes} likes</p>
      </div>
      {/* Caption */}
      <div className="flex">
        <p className="font-bold ">{user}</p>
        <p className="pl-2 w-full h-5 text-ellipsis overflow-hidden whitespace-nowrap">{caption}</p>
      </div>
    </div>
  );
};

export default Post;