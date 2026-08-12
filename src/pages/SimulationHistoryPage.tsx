import { useState } from 'react'

import { Button } from '@src/components/shared/Button'
import { PageHero } from '@src/components/shared/PageHero'
import { type SimulationRecord, useSimulationStorage } from '@src/hooks/useSimulationStorage'
import { calcMonthlySavings } from '@src/utils/simulation'
import { ArrowRight, CalendarClock, Goal, PiggyBank, Plus, Sparkles, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const feasibilityLabels: Record<string, { label: string; className: string }> = {
  viable: {
    label: 'Viável',
    className: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  },
  needs_adjustment: {
    label: 'Precisa de ajuste',
    className: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  },
  unfeasible: { label: 'Inviável', className: 'bg-rose-500/10 text-rose-600 border-rose-500/20' },
}

export function SimulationHistoryPage() {
  const navigate = useNavigate()
  const { getAllSimulations, deleteSimulation } = useSimulationStorage()
  const [simulations, setSimulations] = useState<SimulationRecord[]>(() => getAllSimulations())

  const handleDelete = (id: string) => {
    const updated = deleteSimulation(id)
    setSimulations(updated)
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <PageHero
            title="Histórico de Simulações"
            subtitle="Consulte suas simulações salvas e acesse os relatórios gerados pela IA."
          />
        </div>
        {simulations.length > 0 && (
          <div className="mb-6 sm:mb-0">
            <Button variant="primary" icon={Plus} onClick={() => void navigate('/')}>
              Nova Simulação
            </Button>
          </div>
        )}
      </div>

      {simulations.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-800">
          <div className="bg-primary/10 mb-4 flex h-14 w-14 items-center justify-center rounded-full">
            <Goal className="text-primary" size={28} />
          </div>
          <h3 className="text-foreground text-lg font-semibold">Nenhuma simulação encontrada</h3>
          <p className="text-muted-foreground mb-6 max-w-md text-sm">
            Você ainda não criou nenhuma simulação financeira. Preencha o formulário para receber
            uma análise completa por Inteligência Artificial.
          </p>
          <Button variant="primary" icon={Plus} onClick={() => void navigate('/')}>
            Criar Minha Primeira Simulação
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {simulations.map((sim) => {
            const monthlySavings = calcMonthlySavings(sim)
            const statusConfig = sim.insight
              ? feasibilityLabels[sim.insight.feasibility.status]
              : null

            return (
              <div
                key={sim.id}
                className="bg-card border-border flex flex-col justify-between rounded-2xl border p-6 shadow-xs transition-shadow hover:shadow-md"
              >
                <div>
                  {/* Status Badge & Header */}
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <h2
                      className="text-foreground line-clamp-1 text-lg font-bold"
                      title={sim.goalName}
                    >
                      {sim.goalName || 'Meta sem nome'}
                    </h2>
                    {statusConfig ? (
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${statusConfig.className}`}
                      >
                        <Sparkles size={12} />
                        {statusConfig.label}
                      </span>
                    ) : (
                      <span className="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium dark:border-zinc-800">
                        Pendente
                      </span>
                    )}
                  </div>

                  {/* Detalhes */}
                  <div className="mb-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1.5 text-xs">
                        <Goal size={14} /> Custo total
                      </span>
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {sim.goalAmount}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1.5 text-xs">
                        <CalendarClock size={14} /> Prazo
                      </span>
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {sim.goalDeadline} meses
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
                      <span className="flex items-center gap-1.5 text-xs">
                        <PiggyBank size={14} /> Meta mensal
                      </span>
                      <span className="text-primary font-bold">
                        R${' '}
                        {monthlySavings.toLocaleString('pt-BR', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ações */}
                <div className="border-border flex items-center justify-between gap-2 border-t pt-4">
                  <Button
                    variant="ghost"
                    icon={Trash2}
                    onClick={() => handleDelete(sim.id)}
                    aria-label="Excluir simulação"
                    className="text-rose-500 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/30"
                  >
                    Excluir
                  </Button>
                  <Button
                    variant="secondary"
                    icon={ArrowRight}
                    onClick={() => void navigate(`/resultado/${sim.id}`)}
                  >
                    Ver Resultado
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </main>
  )
}
