function Connector({ muted = false }: { muted?: boolean }) {
  return <div className={`w-px h-3 ${muted ? 'bg-ink/15' : 'bg-ink/20'} mx-auto`} />
}

function Pill({ label, tone = 'ink' }: { label: string; tone?: 'ink' | 'accent' | 'muted' }) {
  const styles =
    tone === 'accent'
      ? 'bg-accent text-paper'
      : tone === 'muted'
        ? 'bg-ink/15 text-ink/50'
        : 'bg-ink text-paper'
  return <div className={`text-[10px] font-medium px-3 py-1.5 rounded-full text-center ${styles}`}>{label}</div>
}

export default function AuthMigrationDiagram() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col items-center gap-1">
        <p className="text-[9px] font-semibold text-ink/40 uppercase tracking-wide">Before</p>
        <Pill label="Mobile App" tone="muted" />
        <Connector muted />
        <Pill label="Native Okta Login Page" tone="muted" />
        <Connector muted />
        <Pill label="Cookie Session" tone="muted" />
        <Connector muted />
        <Pill label="Backend APIs" tone="muted" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="text-[9px] font-semibold text-accent/70 uppercase tracking-wide">After</p>
        <Pill label="Mobile App" />
        <Connector />
        <Pill label="Azure Entra ID — OAuth 2.0 + PKCE" tone="accent" />
        <Connector />
        <Pill label="Access / Refresh / ID Tokens" tone="accent" />
        <Connector />
        <Pill label="Express.js — JWT Validated" />
      </div>
    </div>
  )
}
