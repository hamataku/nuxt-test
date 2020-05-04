const { WebClient } = require('@slack/web-api');
const token = process.env.TOKEN;
const web = new WebClient(token);
const querystring = require('querystring');

exports.handler = async (event) => {
  const body = querystring.parse(event.body);
  const result = await web.chat.postMessage({
    text: body.text,
    channel: '#vip',
  });

  return {
    statusCode: 200,
    body: 'vipに投稿したお（ ＾ω＾）',
  };
};
