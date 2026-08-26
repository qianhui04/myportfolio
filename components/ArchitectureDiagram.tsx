import type { CaseStudySection } from "@/content/projects";

export function ArchitectureDiagram({ architecture }: { architecture: CaseStudySection["architecture"] }) {
  return (
    <div className="mt-4 overflow-hidden rounded-sm border border-line">
      <p className="border-b border-line bg-bg-2 px-4 py-2 mono text-xs text-muted uppercase">
        System architecture
      </p>
      <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {architecture.layers.map((layer, i) => (
          <div key={layer.name} className="bg-surface p-4">
            <p className="mono text-[11px] text-accent">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h4 className="mt-1 text-sm font-medium">{layer.name}</h4>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {layer.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-line px-4 py-3 text-sm text-muted">{architecture.summary}</p>
    </div>
  );
}
