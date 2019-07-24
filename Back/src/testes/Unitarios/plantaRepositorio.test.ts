import { Sensor } from "../../entidades/sensor";
import { Planta } from "../../entidades/planta";
import {plantaRepositorio} from "../../persistencia/plantaRepositorio";

const sensor: Sensor = {
  tipo: 'morango',
  status: 'top'
}
const planta: Planta = {
  sensor: sensor,
  umidade: 80
}

describe('Testing if all functions are working', () => {

  it('Should create a plant.', async () => {

    const SPY = jest.fn(() => planta);
    jest
      .spyOn(plantaRepositorio, 'criaPlanta')
      .mockImplementation(async ()=> SPY());

    let result = await plantaRepositorio.criaPlanta(planta);
    expect(SPY).toHaveBeenCalledTimes(1);
    expect(result).toBe(planta);
  });

  it('Should find a plant.', async () => {

    const SPY = jest.fn(() => planta);
    jest
      .spyOn(plantaRepositorio, 'buscaPorId')
      .mockImplementation(async ()=> SPY());

    let result = await plantaRepositorio.buscaPorId("teste");
    expect(SPY).toHaveBeenCalledTimes(1);
    expect(result).toBe(planta);
  });

  it('Should find a plant by sensor.', async () => {

    const SPY = jest.fn(() => [planta]);
    jest
      .spyOn(plantaRepositorio, 'buscaPorSensor')
      .mockImplementation(async ()=> SPY());

    let result = await plantaRepositorio.buscaPorSensor("teste");
    expect(SPY).toHaveBeenCalledTimes(1);
    expect(result).toEqual([planta]);
  });

  it('Should find a sensor', async () => {

    const SPY = jest.fn(() => [sensor]);
    jest
      .spyOn(plantaRepositorio, 'buscaPorSensorId')
      .mockImplementation(async ()=> SPY());

    let result = await plantaRepositorio.buscaPorSensorId();
    expect(SPY).toHaveBeenCalledTimes(1);
    expect(result).toEqual([sensor]);
  });

  it('Should find every plant created.', async () => {

    const SPY = jest.fn(() => [planta]);
    jest
      .spyOn(plantaRepositorio, 'buscaTodos')
      .mockImplementation(async ()=> SPY());

    let result = await plantaRepositorio.buscaTodos();
    expect(SPY).toHaveBeenCalledTimes(1);
    expect(result).toEqual([planta]);
  });

});