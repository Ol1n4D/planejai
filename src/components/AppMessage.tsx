type AppMessageProps = {
  text: string
}

export function AppMessage({ text }: AppMessageProps) {
  return <p className="text-lg font-semibold text-slate-700">{text}</p>
}
