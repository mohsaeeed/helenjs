import { Hello } from '../index';

test('Hello', () => {
    expect(Hello('someone')).toBe('Hello someone');
});