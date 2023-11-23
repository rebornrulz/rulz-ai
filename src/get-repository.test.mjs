import getRepository from './get-repository';

describe('Get Repository', () => {
  let github;
  let repoFullname;
  let action;

  beforeEach(() => {
    github = {
      getRepo: jest.fn(),
    };
    repoFullname = 'username/repo';
    action = getRepository.props.run.bind({ github, repoFullname });
  });

  it('should call github.getRepo with the correct parameters', async () => {
    await action({ $: { export: jest.fn() } });

    expect(github.getRepo).toHaveBeenCalledWith({ repoFullname });
  });

  it('should export the summary message', async () => {
    const exportFn = jest.fn();
    await action({ $: { export: exportFn } });

    expect(exportFn).toHaveBeenCalledWith('$summary', 'Successfully retrieved repository.');
  });

  it('should return the response from github.getRepo', async () => {
    const response = { data: 'repository data' };
    github.getRepo.mockResolvedValue(response);

    const result = await action({ $: { export: jest.fn() } });

    expect(result).toBe(response);
  });
});