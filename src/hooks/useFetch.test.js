import { useFetch } from './useFetch';
import { act, renderHook } from '@testing-library/react-hooks';

describe('fetch videos from youtube api', () => {
  it('returns a videos as an object', () => {
    const { result } = renderHook(useFetch('Wizeline'));

    act(() => {
      result.current.fetchData();
    });

    expect(result.current.videos).toBeInstanceOf(Object);
  });
});
