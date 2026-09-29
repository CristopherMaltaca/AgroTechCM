function App() {
  return (
    <div>
      <header>
        <h1>AgroControl</h1>
        <p>Monitoramento de máquinas agrícolas</p>
      </header>

      <main>
        <section>
          <div>
            <strong>12</strong>
            <span>Máquinas</span>
          </div>

          <div>
            <strong>8</strong>
            <span>Em operação</span>
          </div>

          <div>
            <strong>4</strong>
            <span>Paradas</span>
          </div>
        </section>

        <section>
          <h2>Máquinas</h2>

          <div>
            <p>Trator 01 — Em operação</p>
            <p>Trator 02 — Em operação</p>
            <p>Colheitadeira 01 — Parada</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;