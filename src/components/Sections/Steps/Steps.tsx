import {steps} from "../../../constants/constants.ts";
import StepCard from "./StepCard.tsx";
import styles from "./steps.module.css"

const Steps = () => {
  return (
    <section className={styles["steps"]}>
      {steps.map(({id, img, title, icon, desc}) => (
        <StepCard key={id} {...{id, img, title, icon, desc}}/>
      ))}
    </section>
  );
};

export default Steps;