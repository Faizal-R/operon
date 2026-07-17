import { Container } from "inversify";
import { registerAuthBindings } from "@/modules/auth/bindings/binding";
import { registerUserBindings } from "@/modules/user/bindings/binding";

const container = new Container();

registerAuthBindings(container);
registerUserBindings(container);

const resolveContainer = <T>(identifier: symbol) => {
  return container.get<T>(identifier);
};

export { container, resolveContainer };
