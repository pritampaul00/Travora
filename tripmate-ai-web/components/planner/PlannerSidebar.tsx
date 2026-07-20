export default function PlannerSidebar() {
  return (
    <aside className="postmark">
      <div className="stamp">
        <span className="stamp-top">
          Cleared for
        </span>

        <span className="stamp-big">
          ANY
        </span>

        <span className="stamp-bottom">
          Destination
        </span>
      </div>

      <dl className="stub">
        <div>
          <dt>Desk</dt>

          <dd>Open 24 / 7</dd>
        </div>

        <div>
          <dt>Route</dt>

          <dd>You → anywhere</dd>
        </div>
      </dl>
    </aside>
  );
}