import {
  useContext,
  useRef,
  useState,
  type FC,
  type JSX,
  type SubmitEvent,
} from "react";
import { ChallengesContext } from "../store/ChallengesContext";
import Modal from "./Modal";
import images from "../types/images";
import type { NewChallengeProps, Image, Challenge } from "../types/data-types";

const NewChallenge: FC<NewChallengeProps> = ({ onDone }): JSX.Element => {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const deadline = useRef<HTMLInputElement>(null);

  const [selectedImage, setSelectedImage] = useState<Image | undefined>(
    undefined,
  );
  const { addChallenge } = useContext(ChallengesContext);

  const handleSelectImage = (image: Image): void => setSelectedImage(image);
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const challenge: Challenge = {
      title: title.current?.value || "",
      description: description.current?.value || "",
      deadline: deadline.current?.value || "",
      image: selectedImage,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      return;
    }

    onDone();
    addChallenge(challenge);
  };

  return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <ul id="new-challenge-images">
          {images.map((image) => (
            <li
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? "selected" : undefined}
            >
              <img src={image.src} alt={image.alt} />
            </li>
          ))}
        </ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewChallenge;
