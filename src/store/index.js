import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";

const middlewares = [];

// reactotron ativar monitoramento dos sagas monitoramento
const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

/**
 * Criar parte do store
 */
const composer =
  process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
