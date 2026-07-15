function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? '#e8590c' : 'none'}
      stroke={filled ? '#e8590c' : '#141221'}
      strokeOpacity={filled ? 1 : 0.25}
      strokeWidth="1.5"
    >
      <path
        d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.8L12 2.5z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating)
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} filled={i < filled} />
      ))}
    </div>
  )
}

interface StarRatingProps {
  before: number
  after: number
}

export default function StarRating({ before, after }: StarRatingProps) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-2">
        <Stars rating={before} />
        <span className="text-sm font-medium text-ink/50">{before.toFixed(1)}</span>
      </div>
      <span className="text-ink/30">→</span>
      <div className="flex items-center gap-2">
        <Stars rating={after} />
        <span className="text-sm font-medium text-ink">{after.toFixed(1)}</span>
      </div>
    </div>
  )
}
