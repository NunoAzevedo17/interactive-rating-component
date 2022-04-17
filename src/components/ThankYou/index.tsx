import IllustrationThankYou from "../../assets/images/illustration-thank-you.svg";

import { RATING_SCALE } from "../../utils/definitions";

import classes from "./ThankYou.module.css";

type ThankYouProps = {
  rating: number;
};

function ThankYou(props: ThankYouProps) {
  const { rating } = props;

  return (
    <div className={`card center-absolute ${classes.container}`}>
      <img
        className={classes.image}
        src={IllustrationThankYou}
        alt="Thank you"
      />

      <div className={classes.ratingSelected}>
        <h2>
          You selected {rating} out of {RATING_SCALE}
        </h2>
      </div>

      <h1 className="title">Thank you!</h1>

      <p className="description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
