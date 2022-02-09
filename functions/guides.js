exports.handler = async (event, context) => {
  const guides = [
    {
      title: "Beat all Zelda Boses Like a Boss",
      author: "mario",
    },
    {
      title: "Mario Kart ShortCuts You Never Knew Exicted",
      author: "luigi",
    },
    {
      title: "Ultimate Street Fighter Guide",
      author: "chun-li",
    },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ msg: "ah ah ah you must be logged in to see this" }),
  };
};
