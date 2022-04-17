import { useState } from "react";

import Feedback from "./components/Feedback";
import ThankYou from "./components/ThankYou";

function App() {
  const [rating, setRating] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  if (hasSubmitted) {
    return <ThankYou rating={rating} />;
  }

  return (
    <Feedback
      rating={rating}
      setRating={(value) => setRating(value)}
      onSubmit={() => setHasSubmitted(true)}
    />
  );
}

export default App;
