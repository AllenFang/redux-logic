import expect from 'expect';
import mod, { createLogic, createLogicMiddleware } from '../src/index';

describe('index.js', () => {
  it('should provide createLogic function', () => {
    expect(createLogic).toBeA(Function);
  });

  it('should provide createLogicMiddleware function', () => {
    expect(createLogicMiddleware).toBeA(Function);
  });

  it('should provide a default obj with createLogic', () => {
    expect(mod.createLogic) // eslint-disable-line import/no-named-as-default-member
      .toBeA(Function);
  });

  it('should provide a default obj with createLogicMiddleware', () => {
    expect(mod.createLogicMiddleware) // eslint-disable-line import/no-named-as-default-member
      .toBeA(Function);
  });
});
