import "./trainer.css";
import TrainerVerification from "./TrainerVerification";
import WorkoutPrograms from "./WorkoutPrograms";
import ClientProgress from "./ClientProgress";
import TrainerChat from "./TrainerChat";
import TrainerEarnings from "./TrainerEarnings";
import TrainerFeedback from "./TrainerFeedback";
import TrainerProfile from "./TrainerProfile";

export default function TrainerDashboard() {
  return (
    <div className="trainer-container">
      <h2 className="sparkle-title">🏋️ Trainer Dashboard</h2>

      <TrainerProfile />
      <TrainerVerification />
      <WorkoutPrograms />
      <ClientProgress />
      <TrainerChat />
      <TrainerEarnings />
      <TrainerFeedback />
    </div>
  );
}
