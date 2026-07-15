const deviceClouds = ['BrowserStack', 'LambdaTest', 'Sauce Labs']

function Connector() {
  return <div className="w-px h-4 bg-ink/20 mx-auto" />
}

function Step({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`text-xs font-medium px-4 py-2 rounded-full text-center ${
        accent ? 'bg-accent text-paper' : 'bg-ink text-paper'
      }`}
    >
      {label}
    </div>
  )
}

export default function TestingPipelineDiagram() {
  return (
    <div className="w-full flex flex-col items-center gap-1 text-center">
      <Step label="Developer" />
      <Connector />
      <Step label="Pull Request" />
      <Connector />
      <Step label="Unit Tests (Jest)" />
      <Connector />
      <Step label="UI Tests (Maestro) — Local" accent />
      <Connector />
      <Step label="Appium & Selenium" />
      <Connector />

      <p className="text-[10px] font-semibold text-ink/40 uppercase tracking-wide">
        Device Clouds
      </p>
      <div className="flex gap-2 flex-wrap justify-center">
        {deviceClouds.map((c) => (
          <span
            key={c}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-ink/15 bg-paper text-ink/70"
          >
            {c}
          </span>
        ))}
      </div>

      <Connector />
      <Step label="Production" accent />
    </div>
  )
}
