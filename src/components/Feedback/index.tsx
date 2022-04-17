import IconStar from "../../assets/images/icon-star.svg";

import { RATING_SCALE } from "../../utils/definitions";

import classes from "./Feedback.module.css";

type FeedbackProps = {
  rating: number;
  setRating: (value: number) => void;
  onSubmit: () => void;
};

function Feedback(props: FeedbackProps) {
  const { rating, setRating, onSubmit } = props;

  const handleSubmit = () => {
    if (!rating) return;

    onSubmit();
  };

  return (
    <div className={`card center-absolute ${classes.container}`}>
      <div className={classes.iconStar}>
        <img className="center-absolute" src={IconStar} alt="star" />
      </div>

      <h1 className="title">How did we do?</h1>
      <p className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={classes.cardButtonsRating}>
        {[...Array(RATING_SCALE)].map((e, i) => (
          <button
            key={i + 1}
            className={rating === i + 1 ? classes.selected : ""}
            onClick={() => setRating(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button className={classes.buttonSubmit} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Feedback;
