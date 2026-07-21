import HeaderBar from "@/components/ui/HeaderBar";

export default function PlannerHeader() {
  return (
    <HeaderBar
      left={
        <span className="panel-label">
          Plan a trip
        </span>
      }
      right={
        <span className="status">
          <span className="status-dot" />
          Planners online
        </span>
      }
    />
  );
}