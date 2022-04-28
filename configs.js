let configs = (function () {
  'use strict';

  // Authentication and channels - required
  const channel = '';
  const username = '';
  const oauth = '';
  const channelBots = ['streamelements', 'nightbot', 'streamlabs'];

  // Styling - required
  const textColor = 'black'; //  hex or name
  const backgroundColor = '#000000'; // hex only
  const backgroundOpacity = 0; // 0 to 1 - background initially hidden (0)
  const fontFamily = 'Roboto';
  const labelFontSize = '55px';
  const timeFontSize = '90px';
  const pomoFontSize = '36px';
  const labelTimeSpace = '0px';
  const timePomoSpace = '6px';

  // Time Configuration - required
  const workTime = 3000; // in seconds
  const breakTime = 600; // in seconds
  const longBreakTime = 900; // in seconds
  const longBreakEvery = 3; // long break every x pomos
  const defaultPomoNumber = 10;

  // Label Configuration - required
  const workLabel = 'Work';
  const breakLabel = 'Break';
  const clearLabel = '( ͡ᵔ ͜ʖ ͡ᵔ)';

  // Responses - not required
  const workMsg =
    "It's work time POLICE POLICE Knifeduck peepoRun"; // these are 7tv emotes
  const breakMsg = '🥁 🥁 Time for a break! 🥁 🥁'; // works with emojis
  const notMod = 'hhhhh not mod';

  // Don't touch this
  const user = {
    channel,
    username,
    oauth,
  };

  const styles = {
    textColor,
    backgroundColor,
    backgroundOpacity,
    fontFamily,
    labelFontSize,
    timeFontSize,
    pomoFontSize,
    labelTimeSpace,
    timePomoSpace,
  };

  const responses = {
    workMsg,
    breakMsg,
    notMod,
  };

  const settings = {
    workTime,
    breakTime,
    longBreakTime,
    defaultPomoNumber,
    longBreakEvery,
    workLabel,
    breakLabel,
    clearLabel,
  };

  let module = {};

  module.user = user;
  module.styles = styles;
  module.responses = responses;
  module.settings = settings;
  module.channelBots = channelBots;

  return module;
})();
