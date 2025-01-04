const Post = () => {
  return (
    // parent
    <div className="p-6 w-1/2 border-b border-black">
      <div className="w-full h-96 bg-cover bg-[url('./src/assets/sample-pic.jpg')]"></div>
      {/* options */}
      <div className="flex pt-2">
        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#C51104"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
      </div>
      <div>
        <p className="font-bold">100 likes</p>
      </div>
      {/* Caption */}
      <div className="flex">
        <p className="font-bold ">User</p>
        <p className="pl-2 w-full h-5 text-ellipsis overflow-hidden whitespace-nowrap">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dolorem perferendis aliquam asperiores, mollitia ipsum vitae illum atque dignissimos laboriosam voluptas vel molestias deserunt delectus consequatur veniam placeat nostrum autem!</p>
      </div>
    </div>
  );
};

export default Post;