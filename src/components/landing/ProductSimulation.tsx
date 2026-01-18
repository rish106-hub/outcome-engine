import DecisionCapsuleCard from "./DecisionCapsuleCard";
import CommitmentContractCard from "./CommitmentContractCard";
import ActionPackCard from "./ActionPackCard";

const ProductSimulation = () => {
  return (
    <div className="flex w-full items-center justify-center py-4">
      {/* Cards Container - Horizontal Grid on Desktop */}
      <div className="grid w-full max-w-6xl gap-6 md:grid-cols-3">
        {/* Card 1: Decision Capsule */}
        <div className="w-full">
          <DecisionCapsuleCard />
        </div>

        {/* Card 2: Commitment Contract */}
        <div className="w-full">
          <CommitmentContractCard />
        </div>

        {/* Card 3: Action Pack */}
        <div className="w-full">
          <ActionPackCard />
        </div>
      </div>
    </div>
  );
};

export default ProductSimulation;
