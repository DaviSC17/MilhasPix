import { StepConfig } from "../config/StepsConfig";
import { stepStyleConfig } from "../config/StepConfigStyles";

interface StepsProps {
  passoAtual: number;
}

export const Steps = ({ passoAtual }: StepsProps) => {
  const getStepStatus = (stepNumber: number) => {
    if (stepNumber < passoAtual) return "complete";
    if (stepNumber === passoAtual) return "current";
    return "incomplete";
  };

  return (
    <ul className="w-fit hidden flex-col lg:flex select-none">
      {StepConfig.map(({ AboutStep, WhichStep }, index) => {
        const stepNumber = index + 1;
        const status = getStepStatus(stepNumber);
        const styles = stepStyleConfig[status];

        return (
          <li
            key={WhichStep}
            className="flex items-center gap-4 px-3.5 py-6.5 rounded-lg"
          >
            <div className={styles.circle}>
              <span
                className={`${styles.span} ${
                  WhichStep === "Passo 1" && "before:hidden"
                } ${WhichStep === "Passo 4" && "after:hidden"}`}
              ></span>
            </div>
            <div>
              <h3 className={styles.title}>{WhichStep}</h3>
              <p className={styles.description}>{AboutStep}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
