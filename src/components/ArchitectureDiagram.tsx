const sharedCore = ['Auth', 'Navigation', 'Analytics', 'Networking', 'Storage', 'API Client']
const brandLayer = ['Theme', 'Colors', 'Typography', 'Images', 'Feature Flags', 'Product Settings']
const brands = ['Swell', 'Brand B', 'Brand C']

function Connector() {
  return <div className="w-px h-4 bg-ink/20 mx-auto" />
}

export default function ArchitectureDiagram() {
  return (
    <div className="w-full flex flex-col items-center gap-1 text-center">
      <div className="text-xs font-medium px-4 py-2 rounded-full bg-ink text-paper">
        React Native Application
      </div>

      <Connector />

      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="rounded-xl border border-ink/15 bg-paper/70 p-3 text-left">
          <p className="text-[11px] font-semibold text-ink/50 uppercase tracking-wide mb-1.5">
            Shared Core
          </p>
          <div className="flex flex-wrap gap-1">
            {sharedCore.map((item) => (
              <span key={item} className="text-[10px] px-1.5 py-0.5 rounded bg-ink/5 text-ink/60">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-accent/20 bg-paper/70 p-3 text-left">
          <p className="text-[11px] font-semibold text-accent/70 uppercase tracking-wide mb-1.5">
            White-Label Layer
          </p>
          <div className="flex flex-wrap gap-1">
            {brandLayer.map((item) => (
              <span key={item} className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Connector />

      <div className="text-xs font-medium px-4 py-2 rounded-full bg-accent text-paper">
        ContentStack CMS — Dynamic Brand Config
      </div>

      <Connector />

      <div className="flex gap-2 flex-wrap justify-center">
        {brands.map((b) => (
          <span
            key={b}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-ink/15 bg-paper text-ink/70"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  )
}
