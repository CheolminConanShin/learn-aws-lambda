exports.handler = function(event, context) {
    if(event.key1) {
      context.succeed("hello" + event.key1);
    } else {
      context.fail("no key1");
    }
};
