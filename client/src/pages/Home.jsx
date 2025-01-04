import Post from '../components/Post';
import { useRef, useState } from 'react';

const Home = () => {
  const postForm = useRef(null);
  const fileInput = useRef(null);
  const preview = useRef(null);
  const [imagePath, setImagePath] = useState({display: "none"});

  return (
    <>
      <dialog ref={postForm}>
        <div className="p-6 bg-champagne">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Make a Post</h2>
            <div className="w-6 h-6 transition-colors rounded-full p-2 bg-[url('./src/assets/close.svg')] hover:bg-desert cursor-pointer"
            onClick={() => postForm.current.close()}></div>
          </div>
          <form action="">
            <textarea
            className="block text-2xl bg-champagne resize-none p-2"
            placeholder="What's on your mind?"
            rows="3"
            cols="50"
            name="caption">
            </textarea>
            <input
            ref={fileInput}
            accept="image/*"
            type="file"
            onChange={() => {
              let reader = new FileReader();
              reader.readAsDataURL(fileInput.current.files[0]);
              console.log(reader.result);
              reader.onload = () => {
                setImagePath({backgroundImage: `url(${reader.result})`, height: "24rem"});
              }
            }}
            hidden/>
            {/*File Preview */}
            <div className="relative w-full bg-contain bg-no-repeat bg-center bg-top" ref={preview} style={imagePath}>
              <img
              className="absolute top-2 right-2 hover:bg-slate-50 hover:opacity-50 cursor-pointer"
              src="./src/assets/close.svg"
              alt="close"
              onClick={() => setImagePath({display: "none"})}
              />
            </div>
            <div className="flex justify-end">
              <div
              className="w-6 h-6 mt-4 transition-transform rounded-full bg-[url('./src/assets/image.svg')] hover:-translate-y-1 cursor-pointer"
              onClick={() => fileInput.current.click()}></div>
            </div>
          </form>
        </div>
      </dialog>
      <div className="w-screen h-screen flex">
        <div className="flex flex-col w-2/12 h-full bg-champagne">
          <h2 className="p-8 text-3xl font-bold">Menu</h2>
          <div className="flex transition-colors hover:bg-carafe cursor-pointer rounded-lg group p-2 mb-2"
          onClick={() => postForm.current.showModal()}>
            <div className="flex justify-center items-center pl-2">
              <svg className="group-hover:fill-champagne" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6a463a"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </div>
            <p className="text-right text-2xl pl-4 font-bold text-carafe group-hover:text-champagne">Post</p>
          </div>
          <div className="flex transition-colors hover:bg-carafe cursor-pointer rounded-lg group p-2 mb-2">
            <div className="flex justify-center items-center pl-2">
              <svg className="group-hover:fill-champagne" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6a463a"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
            </div>
            <p className="text-right text-2xl pl-4 font-bold text-carafe group-hover:text-champagne">Logout</p>
          </div>
        </div>
        <div className="w-3/5 bg-champagne h-full overflow-y-scroll flex-1">
          <h1 className="text-4xl font-bold text-carafe p-6">News Feed</h1>
            <Post />
            <Post />
        </div>
      </div>
    </>
    
  );
}

export default Home;