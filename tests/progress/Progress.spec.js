import Progress, { ProgressBase } from 'progress/Progress';

const render = shallowComponent(Progress);

describe('<Progress />', () => {
  let progress;

  beforeEach(() => {
    progress = render().until(ProgressBase);
  });

  it('has the right displayName', () => {
    expect(Progress.displayName).toEqual('Progress');
  });

  it('is deeply extendable', () => {
    expect(typeof Progress.extend).toEqual('function');
    expect(typeof Progress.extend``.extend).toEqual('function');
  });

  it('renders a ProgressBar', () => {
    expect(progress.find('ProgressBar')).toBePresent();
  });

  it('renders a BufferBar', () => {
    expect(progress.find('BufferBar')).toBePresent();
  });

  it('renders an AuxBar', () => {
    expect(progress.find('AuxBar')).toBePresent();
  });
});
