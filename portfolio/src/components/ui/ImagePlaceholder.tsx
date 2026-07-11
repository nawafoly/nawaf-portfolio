interface ImagePlaceholderProps {
  aspect?: string
  label?: string
}

export function ImagePlaceholder({
  aspect = '16/9',
  label = 'Image placeholder',
}: ImagePlaceholderProps) {
  return (
    <div
      className="relative overflow-hidden rounded-lg border border-border bg-surface"
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,197,24,0.16),rgba(121,215,200,0.08)_36%,rgba(20,20,20,0.92))]" />
      <div className="absolute inset-x-6 top-6 h-px bg-accent/40" />
      <span className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-text-secondary">
        {label}
      </span>
    </div>
  )
}
