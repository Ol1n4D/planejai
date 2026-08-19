import FormStep from './FormStep';

function App() {
  return (
    <main>
      <FormStep
        step={1}
        title="Dados pessoais"
        description="Preencha seu nome e e-mail para continuar."
        actions={
          <button type="button">
            Continuar
          </button>
        }
      >
        <label>
          Nome
          <input type="text" name="name" placeholder="Seu nome" />
        </label>

        <label>
          E-mail
          <input type="email" name="email" placeholder="seu@email.com" />
        </label>
      </FormStep>
    </main>
  );
}

export default App;
