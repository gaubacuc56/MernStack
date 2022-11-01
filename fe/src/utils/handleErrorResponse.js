export const rejectWithRawError =
  (action) =>
  async (...args) => {
    const { rejectWithValue, ...rest } = args[1];
    try {
      await action(args[0], rest);
    } catch (err) {
      return rejectWithValue(err);
    }
  };
