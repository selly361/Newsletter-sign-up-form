import { Main, Modal } from "components";
import React, { Fragment } from "react";

import GlobalStyles from "global/GlobalStyle";
import { useAppContext } from "hooks/useAppContext";

function App() {

  const { modalOpen } = useAppContext()

  return (
    <Fragment>
      <GlobalStyles />
      {modalOpen ? <Modal /> : <Main />}
    </Fragment>
  );
}

export default App;
