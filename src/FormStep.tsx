import type { ReactNode } from 'react';

type FormStepProps = {
  title: string;
  description?: string;
  step?: number | string;
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export default function FormStep({
  title,
  description,
  step,
  children,
  actions,
  className,
}: FormStepProps) {
  const composedClassName = ['form-step', className].filter(Boolean).join(' ');
  const hasStep = typeof step === 'number' || typeof step === 'string';

  return (
    <section className={composedClassName} aria-label={title}>
      <header className="form-step__header">
        {hasStep ? <span className="form-step__step">{step}</span> : null}
        <div className="form-step__title-group">
          <h2 className="form-step__title">{title}</h2>
          {description ? <p className="form-step__description">{description}</p> : null}
        </div>
      </header>

      <div className="form-step__content">{children}</div>

      {actions ? <div className="form-step__actions">{actions}</div> : null}
    </section>
  );
}
