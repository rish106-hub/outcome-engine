import DecisionCapsuleCard from "./DecisionCapsuleCard";
import CommitmentContractCard from "./CommitmentContractCard";
import ActionPackCard from "./ActionPackCard";

const ProductSimulation = () => {
  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Stacked Cards Container */}
      <div className="relative w-full max-w-sm">
        {/* Card 1: Decision Capsule - Back */}
        <div className="absolute top-0 left-0 w-full transform -rotate-2 translate-y-4 opacity-90 scale-95">
          <DecisionCapsuleCard />
        </div>

        {/* Card 2: Commitment Contract - Middle */}
        <div className="absolute top-0 left-0 w-full transform rotate-1 translate-y-2 opacity-95 scale-[0.98]">
          <CommitmentContractCard />
        </div>

        {/* Card 3: Action Pack - Front */}
        <div className="relative w-full transform translate-y-0">
          <ActionPackCard />
        </div>
      </div>
    </div>
  );
};

export default ProductSimulation;
