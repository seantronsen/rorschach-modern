export const ResponseFactory = (questionId, text) => {
  if (typeof questionId !== "number") throw new Error("Response Factory received a NAN value for Question ID.");
  if (!text) throw new Error("Response Factory received a null falsy value for the text parameter.");
  else {
    return { questionId, text };
  }
};
