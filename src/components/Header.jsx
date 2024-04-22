export const Header = () => {
    return (
      <header>
        <div className="header-container">
          <div className="header-left">
            <h1>Первый опыт с React</h1>
          </div>
          <div className="header-right">
            <p>
              Выполнил: <span id="user-fullname">Шахтарин Павел Дмитриевич</span>
            </p>
          </div>
        </div>
      </header>
    );
  };