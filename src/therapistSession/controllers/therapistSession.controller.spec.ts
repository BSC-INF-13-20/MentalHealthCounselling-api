import { Test, TestingModule } from '@nestjs/testing';
import { TherapistSessionController } from './therapistSession.controller';

describe('AccountsController', () => {
  let controller: TherapistSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TherapistSessionController],
    }).compile();

    controller = module.get<TherapistSessionController>(TherapistSessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});