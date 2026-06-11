interface BadgeProps {
  label: string
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded">
      {label}
    </span>
  )
}
