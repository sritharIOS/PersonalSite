function Connector() {
  return <div className="w-px h-3 bg-ink/20 mx-auto" />
}

function Step({ label, accent = false, small = false }: { label: string; accent?: boolean; small?: boolean }) {
  return (
    <div
      className={`font-medium px-3 py-1.5 rounded-full text-center ${small ? 'text-[10px]' : 'text-xs'} ${
        accent ? 'bg-accent text-paper' : 'bg-ink text-paper'
      }`}
    >
      {label}
    </div>
  )
}

export default function NotificationFlowDiagram() {
  return (
    <div className="w-full flex flex-col items-center gap-1 text-center">
      <p className="text-[10px] font-semibold text-ink/40 uppercase tracking-wide">
        Device Registration → SQL Server + Azure Notification Hub
      </p>
      <Connector />
      <Step label="Express.js Notification API" />
      <Connector />

      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="flex flex-col items-center gap-1">
          <p className="text-[9px] font-semibold text-accent/70 uppercase tracking-wide">
            Real-Time (1–3s)
          </p>
          <Step label="Money Transfer, etc." small />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-[9px] font-semibold text-moss/70 uppercase tracking-wide">
            Batch Campaigns
          </p>
          <Step label="Kafka → Workers → SQL Server" small />
        </div>
      </div>

      <Connector />
      <Step label="Azure Notification Hub" accent />
      <Connector />
      <Step label="APNs / FCM" />
      <Connector />
      <Step label="3M+ Mobile Devices" />
    </div>
  )
}
