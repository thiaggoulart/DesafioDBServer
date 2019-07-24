import { Sensor } from "../../entidades/sensor";
import { SensorRepositorio } from "../../persistencia/sensorRepositorio";


const sensor: Sensor = {
  tipo: 'morango',
  status: 'top'
}

describe('Testing if all functions are working', () => {

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