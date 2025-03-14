import Image from "../../components/image/image";
import "./create.css";

const Create = () => {
  return (
    <div className="create">
      <div className="createTop">
        <h1 className="createTitle">Create Pin</h1>
        <button className="createButton">Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image path="pinterest/general/upload.svg" alt="upload" />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            <span>
              We recommend using high quality .jpg files less than 20 MB or .mp4
              files less than 200 MB.
            </span>
          </div>
        </div>
        <form action="" className="createForm">
          <div className="createFormItem">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="Add a title" />
          </div>
          <div className="createFormItem">
            <label htmlFor="description">Description</label>
            <textarea
              rows={6}
              id="description"
              placeholder="Add a detailed description"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="link">Link</label>
            <input type="text" id="link" placeholder="Add a link" />
          </div>
          <div className="createFormItem">
            <label htmlFor="board">Board</label>
            <select name="board" id="board">
              <option value="">Choose a board</option>
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
            </select>
          </div>
          <div className="createFormItem">
            <label htmlFor="tags">Tags</label>
            <input type="text" id="tags" placeholder="Add tags" />
            <small>Dont&apos;t worry, people won&apos;t see your tags</small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
