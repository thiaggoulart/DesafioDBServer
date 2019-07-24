import { Sensor } from "../../entidades/sensor";
import { Planta } from "../../entidades/planta";
import {plantaRepositorio} from "../../persistencia/plantaRepositorio";
import { SensorRepositorio } from "../../persistencia/sensorRepositorio";

describe('Testing if all functions are working', () => {

  const sensor: Sensor = {
    tipo: 'morango',
    status: 'top'
  }
  const planta: Planta = {
    sensor: sensor,
    umidade: 80
  }

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

  it('Should create a sensor.', async () => {

    const SPY = jest.fn(() => sensor);
    jest
        .spyOn(SensorRepositorio, 'criaSensor')
        .mockImplementation(async ()=> SPY());

    let result = await SensorRepositorio.criaSensor(sensor);
    expect(SPY).toHaveBeenCalledTimes(1);
    expect(result).toBe(sensor);
  });

    it('Should find a sensor.', async () => {

    const SPY = jest.fn(() => sensor);
    jest
        .spyOn(SensorRepositorio, 'buscaSensorId')
        .mockImplementation(async ()=> SPY());

    let result = await SensorRepositorio.buscaSensorId("teste");
    expect(SPY).toHaveBeenCalledTimes(1);
    expect(result).toBe(sensor);
    });

    it('Should find sensors by type.', async () => {

        const SPY = jest.fn(() => [sensor]);
        jest
            .spyOn(SensorRepositorio, 'buscarPorTipo')
            .mockImplementation(async ()=> SPY());
    
        let result = await SensorRepositorio.buscarPorTipo("morango");
        expect(SPY).toHaveBeenCalledTimes(1);
        expect(result).toEqual([sensor]);
    });

    it('Should find all sensors.', async () => {

        const SPY = jest.fn(() => [sensor]);
        jest
            .spyOn(SensorRepositorio, 'buscaTodos')
            .mockImplementation(async ()=> SPY());
    
        let result = await SensorRepositorio.buscaTodos();
        expect(SPY).toHaveBeenCalledTimes(1);
        expect(result).toEqual([sensor]);
    });

});