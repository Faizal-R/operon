import { Container } from "inversify";

const container = new Container();

const resolveContainer = <T>(identifier: symbol) => {
  return container.get<T>(identifier);
};

export { container, resolveContainer };
