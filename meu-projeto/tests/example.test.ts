import { ExampleService } from '../src/services/index';

describe('ExampleService', () => {
    let service: ExampleService;

    beforeEach(() => {
        service = new ExampleService();
    });

    test('should get data', () => {
        const data = service.getData();
        expect(data).toBeDefined();
    });

    test('should save data', () => {
        const result = service.saveData('test data');
        expect(result).toBe(true);
    });
});