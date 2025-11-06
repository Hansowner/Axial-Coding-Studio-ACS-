import type { ReactNode } from 'react';

export type StubPageProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export const StubPage = ({ title, description, children }: StubPageProps) => (
  <section className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-12">
    <header className="space-y-2">
      <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Axial Coding Studio</p>
      <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
      <p className="text-base text-slate-600">{description}</p>
    </header>
    <div className="rounded-lg border border-dashed border-slate-300 bg-white/60 p-6 text-slate-600 shadow-sm">
      <p>
        This is a placeholder view for the <span className="font-medium text-slate-700">{title}</span> screen. Start replacing
        this copy once the axial coding workflows are implemented.
      </p>
      {children}
    </div>
  </section>
);
