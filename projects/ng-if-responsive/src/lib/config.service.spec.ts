import {ConfigService} from "./config.service";

describe('ConfigService', () => {
  let sut: ConfigService;

  beforeEach(() => {
    sut = new ConfigService();
  });

  it('should work', function () {

    expect(sut.getBreakPointFromConfig(null, 240)).toBe(1);
  });

});
