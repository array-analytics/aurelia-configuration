import { configure } from '../../src/index';
import { AureliaConfiguration } from '../../src/aurelia-configuration';

let AureliaStub = {
    container: {
        get: (key: string) => {
            return key;
        }
    },
    callback: function (config: any) {
        return config;
    }
};

describe('Index', () => {
    beforeEach(() => {
        spyOn(AureliaStub, 'callback').and.callThrough();
        spyOn(AureliaStub.container, 'get').and.returnValue(new AureliaConfiguration);
    });

    it('expect callback to be called', () => {
        configure(AureliaStub as any, AureliaStub.callback);

        expect(AureliaStub.callback).toHaveBeenCalledWith(new AureliaConfiguration);
        expect(AureliaStub.callback(new AureliaConfiguration)).toEqual(new AureliaConfiguration);
    });
});
