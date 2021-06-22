import {Character} from "../model/interfaces";
import {performAttack, performAttackInvertDependency} from "../src/performAttack";

const attacker: Character = {
  name: "Scorpion",
  life: 1500,
  defense: 200,
  strength: 600,
};

const defender: Character = {
  name: "Kitana",
  life: 1500,
  defense: 400,
  strength: 800,
};

describe('Teste para validar performAttack', ()=>{
  test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true
    });

    performAttackInvertDependency(attacker,defender, validatorMock as any)

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);

  });

  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false
    });

    try {
      performAttackInvertDependency(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
})